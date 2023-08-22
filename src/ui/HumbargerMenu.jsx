/* eslint-disable react/prop-types */
import { RxCross1 } from "react-icons/rx";

function HumbargerMenu({ setIsShowMenu, handleNavigate }) {
  return (
    <div className="fixed left-0 top-0 z-50 h-screen w-screen bg-[rgba(0,0,0,0.3)] transition-all backdrop:blur-[4px] md:hidden">
      <div className=" fixed top-0 h-[200px]  w-full bg-slate-50 px-3 py-4">
        <div>
          <RxCross1 className="ml-auto" onClick={() => setIsShowMenu(false)} />
        </div>
        <ul className=" flex flex-col items-center justify-center gap-3 font-semibold">
          <li onClick={handleNavigate} className=" cursor-pointer">
            Home
          </li>

          <li onClick={handleNavigate} className=" cursor-pointer">
            Project
          </li>
        </ul>
      </div>
    </div>
  );
}
export default HumbargerMenu;
