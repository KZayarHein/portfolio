import { useState } from "react";
import HumbargerMenu from "./HumbargerMenu";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

function Header() {
  const [showMenu, setIsShowMenu] = useState(false);
  const navigate = useNavigate();

  function handleNavigate(e) {
    if (e.target.innerHTML === "Project") {
      navigate("/project");
      setIsShowMenu(false);
    } else {
      navigate("/");
      setIsShowMenu(false);
    }
    console.log(e.target.innerHTML);
  }
  return (
    <header>
      <Navbar setIsShowMenu={setIsShowMenu} />
      {showMenu && (
        <HumbargerMenu
          setIsShowMenu={setIsShowMenu}
          handleNavigate={handleNavigate}
        />
      )}
    </header>
  );
}
export default Header;
