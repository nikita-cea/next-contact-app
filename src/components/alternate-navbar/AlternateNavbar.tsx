import { NavbarProps } from "./types";

const Navbar = (props: NavbarProps) => {
  return (
    <nav className="fixed z-10 flex items-center w-full h-16 px-4 bg-white shadow-sm text-zinc-500">
      <div className="text-lg font-bold">Contact App</div>
      <div className="flex-grow"></div>
      <button className="md:hidden" onClick={props.onMenuButtonClick}>
        <svg
          className="w-6 h-6"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 18L20 18"
            stroke="#000000"
            strokeWidth={2}
            strokeLinecap="round"
          />
          <path
            d="M4 12L20 12"
            stroke="#000000"
            strokeWidth={2}
            strokeLinecap="round"
          />
          <path
            d="M4 6L20 6"
            stroke="#000000"
            strokeWidth={2}
            strokeLinecap="round"
          />
        </svg>
      </button>
    </nav>
  );
};

export default Navbar;
