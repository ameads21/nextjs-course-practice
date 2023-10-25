import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex space-x-3 bg-slate-200 p-5">
      <Link href="/" className="mr-5">
        Next.js
      </Link>
      <Link href="/users">Users</Link>
      <Link href="/api/auth/signin">Login</Link>
    </div>
  );
};

export default Navbar;
