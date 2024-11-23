import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { MobileNavBar } from './MobileNavbar/MobileNavBar';

export const Navbar = () => {
  const router = useNavigate();
  const loc = useLocation();

  const activeClass = ({ isActive }: { isActive: boolean }) => {
    if (isActive) {
      if (loc.pathname === '/') {
        return 'text-white underline underline-offset-4 font-medium hover:font-bold';
      }
      return 'text-black underline underline-offset-4 font-medium hover:font-bold';
    }
    if (loc.pathname === '/') {
      return 'text-white hover:font-bold';
    }
    return 'text-black hover:font-bold';
  };

  return (
    <div className="absolute left-0 right-0 top-0 z-50 mt-2 font-century">
      <nav className="flex items-center justify-between px-6 py-4">
        <div className="text-xl font-bold">
          <NavLink to="/" className="">
            <div
              className={`px-6 pt-3 font-metropolis font-medium tracking-widest xs:text-[14px] sm:text-[16px] lg:pt-2 lg:text-[18px] ${loc.pathname === '/' ? 'text-white' : 'text-black'}`}
            >
              CELEBRATION CHAPTERS
            </div>
          </NavLink>
        </div>
        <div className="hidden items-center space-x-6 text-white md:flex">
          <NavLink to="/" className={activeClass}>
            Home
          </NavLink>
          <NavLink to="/about" className={activeClass}>
            About us
          </NavLink>
          <NavLink to="/photos" className={activeClass}>
            Photos
          </NavLink>
          <NavLink to="/films" className={activeClass}>
            Films
          </NavLink>
          <NavLink to="/contact" className={activeClass}>
            Contact Us
          </NavLink>
        </div>
        <div className="md:hidden">
          <MobileNavBar />
        </div>
        {/* <button className="bg-black text-white hover:bg-gray-800">Sign up</button> */}
      </nav>
    </div>
  );
};
