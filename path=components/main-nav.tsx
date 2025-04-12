import Link from "next/link";

export function MainNav() {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-4 py-2 flex justify-between items-center">
        <Link href="/">
          <a className="text-xl font-bold">FreshMart</a>
        </Link>
        <div>
          <Link href="/categories"><a className="mx-2">Categories</a></Link>
          <Link href="/deals"><a className="mx-2">Deals</a></Link>
          <Link href="/about"><a className="mx-2">About</a></Link>
        </div>
      </nav>
    </header>
  );
} 