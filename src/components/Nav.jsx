import { headerLogo } from "../assets/images";
import { close, hamburger } from "../assets/icons";
import { navLinks } from "../constants";

const Nav = ({ isOpen, onClick }) => {
  const handleClick = () => {
    onClick();
  };
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="Logo" width={130} height={29} />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-slate-gray"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <button type="button" className="lg:hidden" onClick={handleClick}>
          <img
            src={isOpen ? close : hamburger}
            alt="Hamburger"
            width={25}
            height={25}
          />
        </button>
      </nav>
    </header>
  );
};

export default Nav;
