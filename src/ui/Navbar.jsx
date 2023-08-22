/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar({ setIsShowMenu }) {
  return (
    <header className="w-full ">
      <nav className="mx-auto flex max-w-full items-center justify-between px-6 py-4 sm:px-16">
        <h3 className=" font-logo text-2xl font-semibold">Zay</h3>
        <ul className=" hidden items-center gap-3 text-sm text-slate-900 md:flex">
          <li>
            <NavLink to="/" className="px-4 py-2  transition-all">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/project" className="px-4 py-2  transition-all">
              Project
            </NavLink>
          </li>
        </ul>
        <div className="md:hidden">
          <GiHamburgerMenu
            className=" cursor-pointer"
            onClick={() => setIsShowMenu(true)}
          />
        </div>
      </nav>
    </header>
  );
}
export default Navbar;
