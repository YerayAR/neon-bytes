# Security Policy

## Supported Versions

This project is actively maintained and security updates are provided for the following versions:

| Version | Supported          |
| ------- | ------------------ |
| 0.1.x   | :white_check_mark: |

## Reporting a Vulnerability

We take the security of NeonBytes seriously. If you have discovered a security vulnerability, we appreciate your help in disclosing it to us responsibly.

### How to Report

1. **Email**: Send details to security@neon-bytes.dev
2. **GitHub Security Advisory**: Create a private security advisory on GitHub
3. **Response Time**: We aim to respond within 48 hours

### What to Include

Please include the following information in your report:

- A clear description of the vulnerability
- Steps to reproduce the issue
- Potential impact of the vulnerability
- Any suggested fixes or mitigations
- Your contact information for follow-up

### What to Expect

1. **Acknowledgment**: We'll acknowledge receipt of your report within 48 hours
2. **Investigation**: We'll investigate the issue and determine its severity
3. **Fix Development**: We'll develop and test a fix
4. **Disclosure**: We'll coordinate responsible disclosure with you
5. **Credit**: We'll credit you in our security acknowledgments (if desired)

## Security Best Practices

This project implements several security measures:

- **Content Security Policy (CSP)** headers
- **HTTP Strict Transport Security (HSTS)**
- **X-Frame-Options** to prevent clickjacking
- **X-Content-Type-Options** to prevent MIME sniffing
- **Input validation** and sanitization in all forms
- **Rate limiting** on newsletter subscriptions
- **Email validation** and safe email handling
- **Secure Docker configurations**
- **Environment variable protection**

## Newsletter Security

- Email addresses are validated before processing
- Input sanitization prevents XSS attacks
- Rate limiting prevents spam and abuse
- Subscriber data is handled with privacy in mind
- Email content is sanitized before sending

## Security Guidelines for Contributors

- Always validate and sanitize user inputs
- Use HTTPS for all external requests
- Keep dependencies up to date
- Follow the principle of least privilege
- Don't commit secrets or sensitive information
- Use environment variables for configuration
- Test security features before submitting PRs

## Contact

For security-related questions or concerns, please contact:
- Email: security@neon-bytes.dev
- GitHub: Create a private security advisory

Thank you for helping keep NeonBytes secure!