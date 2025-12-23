import Link from "next/link";

export default function LinkBtn({ href, className, children }) {
  return (
    <Link 
        href={href} 
        className={`rounded-lg bg-lime-700 px-2 py-1 text-white hover:bg-lime-800 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2 inline-block text-center ${className}`}>
        {children}
    </Link>
  );
}
