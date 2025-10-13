// Secure utilities for email sending
import { getAllSubscribers } from './subscribers';

// Email validation function
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) && email.length <= 254;
}

// Sanitize input function
function sanitizeInput(input: string): string {
  return input.replace(/[<>"'&]/g, (match) => {
    const htmlEntities: Record<string, string> = {
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#x27;',
      '&': '&amp;'
    };
    return htmlEntities[match] || match;
  });
}

/**
 * Sends newsletter link to all subscribers with security validations.
 */
export async function sendNewsletterLink(id: string, url: string): Promise<void> {
  try {
    // Validate inputs
    if (!id || !url) {
      throw new Error('ID and URL are required');
    }
    
    // Sanitize inputs
    const sanitizedId = sanitizeInput(id.trim());
    const sanitizedUrl = sanitizeInput(url.trim());
    
    // Validate URL format
    try {
      new URL(sanitizedUrl);
    } catch {
      throw new Error('Invalid URL format');
    }
    
    const subscribers = await getAllSubscribers();
    
    if (!subscribers || subscribers.length === 0) {
      console.log('No subscribers found');
      return;
    }
    
    // Send emails with rate limiting and error handling
    const batchSize = 10; // Prevent overwhelming email service
    for (let i = 0; i < subscribers.length; i += batchSize) {
      const batch = subscribers.slice(i, i + batchSize);
      
      const promises = batch.map(async (subscriber) => {
        if (!isValidEmail(subscriber.email)) {
          console.error(`Invalid email format: ${subscriber.email}`);
          return;
        }
        
        return sendEmail(
          subscriber.email,
          `¡Nueva NeonBytes! Edición ${sanitizedId}`,
          `Lee aquí: ${sanitizedUrl}`
        );
      });
      
      await Promise.allSettled(promises);
      
      // Rate limiting delay between batches
      if (i + batchSize < subscribers.length) {
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
    }
    
    console.log(`Newsletter sent to ${subscribers.length} subscribers`);
    
  } catch (error) {
    console.error('Error sending newsletter:', error);
    throw error;
  }
}

// Enhanced email sending function with security
async function sendEmail(to: string, subject: string, body: string): Promise<void> {
  try {
    // Validate email address
    if (!isValidEmail(to)) {
      throw new Error(`Invalid email address: ${to}`);
    }
    
    // Sanitize content
    const sanitizedSubject = sanitizeInput(subject);
    const sanitizedBody = sanitizeInput(body);
    
    // In production, integrate with a real email service:
    // - Nodemailer with SMTP
    // - SendGrid
    // - AWS SES
    // - Mailgun
    // - Resend
    
    // For now, log the email (remove in production)
    console.log(`Sending to ${to.substring(0, 3)}***@${to.split('@')[1]}: ${sanitizedSubject}`);
    
    // Example integration with Nodemailer:
    /*
    const nodemailer = require('nodemailer');
    
    const transporter = nodemailer.createTransporter({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD
      }
    });
    
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: to,
      subject: sanitizedSubject,
      text: sanitizedBody,
      // Optional HTML version
      html: `<p>${sanitizedBody}</p>`
    });
    */
    
  } catch (error) {
    console.error(`Failed to send email to ${to}:`, error);
    throw error;
  }
}
