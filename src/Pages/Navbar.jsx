import { NavLink } from 'react-router-dom';
import logo from '../../public/logo.svg'

const Navbar = () => {
  const navLinks = <>
    <li><NavLink to='/'
     style={({ isActive}) => {
      return {
        fontWeight: isActive ? "bold" : "",
        color: isActive ? "red" : "black",
      };
    }}
    >Home</NavLink> </li>
    <li><NavLink to='/about'
     style={({ isActive}) => {
      return {
        fontWeight: isActive ? "bold" : "",
        color: isActive ? "red" : "black",
      };
    }}
    >About</NavLink> </li>
    <li><NavLink to='/service'
     style={({ isActive}) => {
      return {
        fontWeight: isActive ? "bold" : "",
        color: isActive ? "red" : "black",
      };
    }}
    >Services</NavLink> </li>
    <li><NavLink to='/blog'
      style={({ isActive}) => {
        return {
          fontWeight: isActive ? "bold" : "",
          color: isActive ? "red" : "black",
        };
      }}
    >Blog</NavLink> </li>
    <li><NavLink to='/contact'
      style={({ isActive}) => {
        return {
          fontWeight: isActive ? "bold" : "",
          color: isActive ? "red" : "black",
        };
      }}
    >Contact</NavLink></li>
  </>
  return (
    <div>
    
      <header className="bg-white   ">
        <div className="block md:hidden ">
        <div className="drawer">
  <input id="my-drawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    {/* Page content here */}
    <label htmlFor="my-drawer" className="btn drawer-button">   
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </label>
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
    <ul className="menu p-4 w-80 min-h-full bg-base-200  text-base-content">
      {/* Sidebar content here */}
      {navLinks}
      
    </ul>
  </div>
</div>
        </div>
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 lg:py-4">
          <div className="flex h-16 items-center justify-between">
            <div>

              <img src={logo} alt="" className='w-full h-full p-[20px] ' />

            </div>

            <div className="hidden md:block">
              <nav aria-label="Global">
                <ul className="flex items-center gap-6 text-sm">
                  {navLinks}
                </ul>
              </nav>
            </div>

            <div className="flex items-center gap-4">
              <div className="sm:flex sm:gap-4">
                <a
                  href="javascript:void(0)"
                  className="uppercase border-secondary border rounded-md inline-flex items-center justify-center py-3 px-7 text-center text-base font-medium text-secondary hover:bg-[#E8FBF6] disabled:bg-gray-3 disabled:border-gray-3 disabled:text-dark-5"
                >
                  Appoinment
                </a>

               
              </div>


            </div>
          </div>
        </div>
      </header>

    </div>
  );
};

export default Navbar;