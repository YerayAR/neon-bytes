'use client';
import { useEffect, useState } from 'react';

export default function Edicion1() {
  const [content, setContent] = useState<string>('');

  useEffect(() => {
    // Cargar el contenido de la newsletter
    const newsletterContent = `
      <div className="prose dark:prose-invert mx-auto p-4">
        <h1>Edición 1</h1>
        <p><em>Fecha: 2024-01-01</em></p>
        
        <h2>Editorial</h2>
        <p>Bienvenidos a la primera edición de <strong>NeonBytes</strong>. Aquí encontrarás las novedades más relevantes.</p>
        
        <h2>Noticias destacadas</h2>
        <div className="space-y-6">
          <div className="border-l-4 border-blue-500 pl-4 py-2">
            <h3 className="font-bold text-lg">Node.js 24 - Nueva versión Current</h3>
            <p className="text-sm text-gray-300 mb-2">6 May 2025 • OpenJS Foundation</p>
            <p className="text-sm">Node.js 24 llega con múltiples mejoras de rendimiento, motor V8 v13.6, npm 11 integrado y un modelo de permisos más seguro. Node 18 llegó a EOL el 30/4/2025.</p>
            <a href="https://openjsf.org/blog/nodejs-24-released" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 text-sm">Leer artículo →</a>
          </div>
          
          <div className="border-l-4 border-green-500 pl-4 py-2">
            <h3 className="font-bold text-lg">ECMAScript 2025 JavaScript Standard Approved</h3>
            <p className="text-sm text-gray-300 mb-2">8 Jul 2025 • InfoWorld (Paul Krill)</p>
            <p className="text-sm">La especificación ECMAScript 2025 incorpora nueve propuestas finalizadas, incluyendo import de módulos JSON, métodos utilitarios para iteradores síncronos y mejoras en expresiones regulares.</p>
            <a href="https://www.infoworld.com/article/3856449/ecmascript-2025-javascript-standard-takes-shape.html" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 text-sm">Leer artículo →</a>
          </div>
          
          <div className="border-l-4 border-purple-500 pl-4 py-2">
            <h3 className="font-bold text-lg">Next.js 15.4 con Turbopack</h3>
            <p className="text-sm text-gray-300 mb-2">14 Jul 2025 • Blog oficial Next.js (Vercel)</p>
            <p className="text-sm">Lanzamiento con foco en rendimiento y estabilidad. Destaca la compatibilidad del 100% en tests de integración al compilar con <code>next build --turbopack</code>.</p>
            <a href="https://nextjs.org/blog" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 text-sm">Leer artículo →</a>
          </div>
          
          <div className="border-l-4 border-red-500 pl-4 py-2">
            <h3 className="font-bold text-lg">GitHub Copilot Agent Mode para todos</h3>
            <p className="text-sm text-gray-300 mb-2">7 Abr 2025 • Blog VS Code (Isidor Nikolić)</p>
            <p className="text-sm">Visual Studio Code habilita el nuevo "Agent Mode" de GitHub Copilot. Asistente autónomo capaz de ejecutar tareas de código de múltiples pasos con soporte para MCP.</p>
            <a href="https://code.visualstudio.com/blogs/2025/04/07/agentMode" target="_blank" rel="noopener noreferrer" className="text-red-400 hover:text-red-300 text-sm">Leer artículo →</a>
          </div>
        </div>
        
        <h2>Artículos técnicos destacados</h2>
        <div className="space-y-4">
          <div className="bg-gray-800 p-4 rounded-lg">
            <h3 className="font-bold text-lg text-yellow-400">"Moving Highlight" Navigation con JavaScript y CSS</h3>
            <p className="text-sm text-gray-300 mb-2">11 Jun 2025 • Smashing Magazine (Blake Lundquist)</p>
            <p className="text-sm">Tutorial detallado sobre cómo implementar el efecto de "resaltado móvil" en barras de navegación usando <code>getBoundingClientRect</code> y la nueva View Transition API.</p>
            <a href="https://www.smashingmagazine.com/category/coding/" target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:text-yellow-300 text-sm">Leer tutorial →</a>
          </div>
          
          <div className="bg-gray-800 p-4 rounded-lg">
            <h3 className="font-bold text-lg text-cyan-400">CSS Cascade Layers vs. BEM vs. Utility Classes</h3>
            <p className="text-sm text-gray-300 mb-2">19 Jun 2025 • Smashing Magazine (Victor Ayomipo)</p>
            <p className="text-sm">Análisis avanzado sobre estrategias de arquitectura CSS para controlar la especificidad. Compara cascade layers (@layer), metodología BEM y utility classes.</p>
            <a href="https://www.smashingmagazine.com/category/coding/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 text-sm">Leer artículo →</a>
          </div>
          
          <div className="bg-gray-800 p-4 rounded-lg">
            <h3 className="font-bold text-lg text-orange-400">Truco de JavaScript que ahorró $10,000 en costos de servidor</h3>
            <p className="text-sm text-gray-300 mb-2">Abr 2025 • Medium (Md Alishan Ali)</p>
            <p className="text-sm">Caso de estudio sobre cómo una optimización en el event loop de Node.js redujo drásticamente la factura de AWS de una startup de la noche a la mañana.</p>
            <a href="https://medium.com/@md.alishanali/this-one-javascript-trick-saved-my-startup-10-000-in-server-costsovernight-2ac54f06d5c8" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 text-sm">Leer caso de estudio →</a>
          </div>
        </div>
        
        <h2>Mini-tutorial</h2>
        <div className="bg-gray-800 p-4 rounded-lg">
          <h3 className="font-bold text-lg text-green-400 mb-2">Ejemplo de Event Loop Optimization</h3>
          <p className="text-sm mb-4">Inspirado en el artículo sobre optimización de costos de servidor:</p>
          <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto">
            <code>
              {"// ❌ Problemático: bloquea el event loop\n"}
              {"for (let i = 0; i < 1000000; i++) {\n"}
              {"  processData(i);\n"}
              {"}\n\n"}
              {"// ✅ Optimizado: permite que el event loop respire\n"}
              {"function processDataAsync(data, callback) {\n"}
              {"  setImmediate(() => {\n"}
              {"    for (let i = 0; i < 1000; i++) {\n"}
              {"      processData(data[i]);\n"}
              {"    }\n"}
              {"    callback();\n"}
              {"  });\n"}
              {"}\n\n"}
              {"console.log('Hola NeonBytes - Event Loop Optimizado!');"}
            </code>
          </pre>
        </div>
        
        <h2>Más novedades del desarrollo web</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-gray-800 p-4 rounded-lg border-l-4 border-blue-400">
            <h3 className="font-bold text-lg text-blue-400">Django 5.2 LTS</h3>
            <p className="text-sm text-gray-300 mb-2">30 May 2025 • InfoWorld (Paul Krill)</p>
            <p className="text-sm">Nueva versión LTS con importación automática de modelos, soporte para claves primarias compuestas y hooks personalizados para admin.</p>
            <a href="https://www.infoworld.com/article/3952899/django-5-2-release-touts-automatic-model-importing.html" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 text-sm">Leer más →</a>
          </div>
          
          <div className="bg-gray-800 p-4 rounded-lg border-l-4 border-red-400">
            <h3 className="font-bold text-lg text-red-400">Angular v20</h3>
            <p className="text-sm text-gray-300 mb-2">2 Abr 2025 • InfoWorld (Paul Krill)</p>
            <p className="text-sm">Nueva versión con mejoras en IA generativa, modo "zoneless" en preview, hidratación incremental estable y archivo llms.txt para LLMs.</p>
            <a href="https://www.infoworld.com/article/3998375/angular-v20-arrives-with-eyes-on-generative-ai-development.html" target="_blank" rel="noopener noreferrer" className="text-red-400 hover:text-red-300 text-sm">Leer más →</a>
          </div>
        </div>
        
        <h2>Herramientas recomendadas</h2>
        <div className="space-y-4">
          <div className="bg-gradient-to-r from-blue-900 to-purple-900 p-4 rounded-lg">
            <h3 className="font-bold text-lg text-white">🚀 Vercel CLI</h3>
            <p className="text-sm text-gray-200">Despliega rápidamente tus proyectos Next.js, React y más con un solo comando.</p>
          </div>
          
          <div className="bg-gradient-to-r from-green-900 to-teal-900 p-4 rounded-lg">
            <h3 className="font-bold text-lg text-white">📚 Cómo mantenerse al día con CSS</h3>
            <p className="text-sm text-gray-200 mb-2">20 Jun 2025 • CSS-Tricks (Sacha Greif)</p>
            <p className="text-sm text-gray-200">Estrategias y recursos para seguir las últimas novedades de CSS: web.dev, CSS-Tricks, State of CSS y más.</p>
            <a href="https://www.uxlift.org/articles/how-to-keep-up-with-new-css-features-css-tricks/" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 text-sm">Leer guía →</a>
          </div>
        </div>
        
        <h2>Cierre</h2>
        <p><a href="https://neonbytes.dev" target="_blank" rel="noopener noreferrer">Visita NeonBytes</a></p>
      </div>
    `;
    setContent(newsletterContent);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white">
      <div className="max-w-4xl mx-auto py-8">
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </main>
  );
}
