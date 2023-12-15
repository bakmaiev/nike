import { createPortal } from "react-dom";
import { navLinks } from "../constants";
import { close, hamburger } from "../assets/icons";
import { headerLogo } from "../assets/images";
import { motion, AnimatePresence } from "framer-motion";

const modalRoot = document.querySelector("#modal-root");

const SideBar = ({ isOpen, onClick }) => {
  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: -100 },
  };

  const handleClose = () => {
    onClick();
  };

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial="closed"
          animate="open"
          variants={variants}
          className="fixed top-0 left-0 w-screen h-screen z-50 flex justify-center items-center bg-white lg:hidden overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-full flex justify-between padding-x py-8">
            <a href="/">
              <img src={headerLogo} alt="Logo" width={130} height={29} />
            </a>

            <button type="button" onClick={handleClose}>
              <img
                src={isOpen ? close : hamburger}
                alt="Hamburger"
                width={25}
                height={25}
              />
            </button>
          </div>

          <ul className="flex flex-col justify-center items-center gap-8 ">
            {navLinks.map((item) => (
              <li key={item.label} onClick={handleClose}>
                <a
                  href={item.href}
                  className="font-montserrat font-bold leading-normal text-3xl sm:text-4xl text-black"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </AnimatePresence>,
    modalRoot
  );
};

export default SideBar;
