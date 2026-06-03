import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0b1626] flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="text-9xl font-serif font-bold text-accent mb-6 animate-pulse">404</div>
        <h1 className="text-3xl font-serif font-bold text-white mb-4">
          Page Not Found
        </h1>
        <p className="text-gray-400 text-base leading-relaxed mb-10">
          The page you are looking for does not exist or has been moved. Let's get you back on track.
        </p>
        <Link
          href="/"
          className="bg-accent text-[#0b1626] font-bold px-8 py-3.5 rounded-full hover:bg-yellow-400 transition-all inline-block shadow-lg"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
