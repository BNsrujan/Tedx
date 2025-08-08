import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="text-center space-y-6 px-4">
        <h1 className="text-6xl font-bold text-red-600">404</h1>
        <h2 className="text-3xl font-light">Page Not Found</h2>
        <p className="text-gray-400 max-w-md mx-auto">
          Oops! The page you're looking for seems to have vanished into thin
          air..
        </p>
        <Link
          href="/"
          className="inline-block mt-8 px-6 py-3 bg-red-600 text-white  hover:bg-red-700 transition-colors duration-200"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
