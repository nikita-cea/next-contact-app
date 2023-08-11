import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
  const { pathname } = useRouter();
  return (
    <nav className="fixed z-10 flex items-center justify-between w-full h-16 px-4 bg-white shadow-sm text-zinc-500">
      <div className="text-lg font-bold text-center">Contact App</div>
      <div className="text-sm text-center">
        <Link
          href="/"
          className={`mr-2 ${pathname === "/" ? "text-blue-600" : ""}`}
        >
          Server Side Rendering (SSR)
        </Link>
        <Link
          href="/static"
          className={`mr-2 ${pathname === "/static" ? "text-blue-600" : ""}`}
        >
          Static Site Generation (SSG)
        </Link>
        <Link
          href="/incremental"
          className={`${pathname === "/incremental" ? "text-blue-600" : ""}`}
        >
          Incremental Static Re-Generation (ISR)
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
