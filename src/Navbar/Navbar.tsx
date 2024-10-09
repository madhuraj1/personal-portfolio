import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import Logo1 from '../assets/new_logo.png';
import { MobileNavBar } from './MobileNavbar/MobileNavBar';

export const Navbar = () => {
  const router = useNavigate();
  const loc = useLocation();

  const onclick = (path: string) => {
    router(path);
  };

  const activeClass = ({ isActive }: { isActive: boolean }) => {
    if (isActive) {
      if (loc.pathname === '/' || loc.pathname === '/about') {
        return 'text-white underline underline-offset-4 font-medium hover:font-bold';
      }
      return 'text-black underline underline-offset-4 font-medium hover:font-bold';
    }
    if (loc.pathname === '/' || loc.pathname === '/about') {
      return 'text-white hover:font-bold';
    }
    return 'text-black hover:font-bold';
  };
  return (
    <div className="font-metropolis absolute left-0 right-0 top-0 z-50 mt-2">
      <nav className="flex items-center justify-between px-6 py-4">
        <div className="text-xl font-bold">
          <NavLink to="/" className="">
            <div className="w-56">
              <img
                src={Logo1}
                alt="Celebration Photography"
                className="z-50 h-full w-full object-fill"
              />
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
          <NavLink to="/memories" className={activeClass}>
            Memories
          </NavLink>
          <NavLink to="/films" className={activeClass}>
            Films
          </NavLink>
          <NavLink to="/contact" className={activeClass}>
            Contact Us
          </NavLink>
        </div>
        <div className="sm:hidden">
          <MobileNavBar />
        </div>
        {/* <button className="bg-black text-white hover:bg-gray-800">Sign up</button> */}
      </nav>
    </div>
  );
};
