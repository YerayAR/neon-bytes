import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-pink-400">Página no encontrada</h1>
        <p className="mb-8 text-gray-300">Lo sentimos, no pudimos encontrar lo que buscas.</p>
        <Link
          href="/"
          className="px-6 py-3 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg text-white font-semibold hover:from-pink-700 hover:to-purple-700 transition-colors"
        >
          Volver al inicio
        </Link>
      </div>
    </div>
  );
}
