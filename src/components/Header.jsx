import { useState } from "react";
import Sidebar from "./Sidebar";

function Header() {
  const [isHidden, setIsHidden] = useState(false);
  return (
    <div className="text-red-950">
      <nav className="flex justify-between p-4 bg-purple-50 md:justify-between ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 cursor-pointer md:hidden "
          onClick={() => setIsHidden(!isHidden)}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
        <h2>OnlyJwells</h2>
        <ul className="flex space-x-4 cursor-pointer hidden md:inline-flex">
          <li>Home</li>
          <li>About</li>
          <li>Collections</li>
          <li>Shop Online</li>
          <li>Contact Us</li>
        </ul>
        <div className="flex space-x-4 cursor-pointer hidden md:inline-flex">
          <p>Login</p>
          <p>SignUp</p>
        </div>
      </nav>
      {isHidden && <Sidebar />}
    </div>
  );
}

export default Header;
