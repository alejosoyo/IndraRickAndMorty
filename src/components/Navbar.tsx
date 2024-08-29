import logo from "../assets/react.svg";
const Navbar = () => {
    return (
      <nav className="bg-indigo-700 border-b border-indigo-500">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 flex h-14 items-center justify-between">
          <div className="flex items-center space-x-2">
            <img className="h-10 w-auto" src={logo} alt="React Jobs" />
            <span className="hidden md:block text-white text-2xl font-bold">
              Indra Test
            </span>
          </div>
        </div>
      </nav>
    );
  };
  
  export default Navbar;