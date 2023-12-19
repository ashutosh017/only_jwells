function Sidebar() {
  return (
    <div
      id="sidebar"
      className="absolute md:hidden text-red-950 bg-gray-50 w-1/2 p-4"
    >
      <ul className=" cursor-pointer mb-8">
        <li>Home</li>
        <li>About</li>
        <li>Collections</li>
        <li>Shop Online</li>
        <li>Contact Us</li>
      </ul>
      <div className=" cursor-pointer ">
        <p>Login</p>
        <p>SignUp</p>
      </div>
    </div>
  );
}

export default Sidebar;
