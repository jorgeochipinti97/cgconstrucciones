import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { TailcastLogo } from "../assets/logos/TailcastLogo";

const navbarLinks = [
  { label: "Servicios", href: "#servicios", ariaLabel: "Servicios" },
  { label: "Llave en mano", href: "#llave", ariaLabel: "Llave en mano" },
  { label: "FAQ", href: "#FAQ", ariaLabel: "FAQ" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-screen h-20 flex flex-col justify-center items-center fixed bg-customDarkBg1 lg:bg-customDarkBgTransparent z-40 lg:backdrop-blur-xl">
      <div className="2xl:w-[1280px] xl:w-10/12 w-11/12 flex justify-between items-center relative">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          exit={{ opacity: 0 }}
        >
          <a className="navbar-link" href="#home" aria-label="Home m">
            <div className="flex justify-start items-center grow basis-0">

              <TailcastLogo />

            </div>
          </a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          exit={{ opacity: 0 }}
        >
          <div className="hidden lg:flex h-full pl-12 pb-2">
            <a
              className="navbar-link "
              href={'#servicios'}

            >
              Servicios
            </a>
            <a
              className="navbar-link "
              href={'#llave'}

            >
              Llave en mano
            </a>
            <a
              className="navbar-link "
              href={'#FAQ'}

            >
FAQS
            </a>
            <a
            target="_blank"
              className="navbar-link "
              href={'https://wa.link/ws9kl3'}

            >
Contactanos
            </a>

          </div>
        </motion.div>

        <div
          className="lg:hidden flex flex-col  px-2 py-3 border-solid border border-gray-600 rounded-md cursor-pointer hover:bg-customDarkBg2"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="w-5 h-0.5 bg-gray-500  mb-1"></div>
          <div className="w-5 h-0.5 bg-gray-500  mb-1"></div>
          <div className="w-5 h-0.5 bg-gray-500 "></div>
        </div>
      </div>
      {/* Mobile navbar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="flex flex-col mt-16 lg:hidden absolute top-4 left-0  bg-customDarkBg1 z-50 w-full 
        items-center gap-10 pb-10 border-y border-solid border-customDarkBg3 pt-10
        "
            >
              {navbarLinks.map(({ label, href, ariaLabel }) => (
                <a
                  key={href}
                  className="navbar-link"
                  href={href}
                  onClick={() => setIsOpen(false)}
                  aria-label={ariaLabel}
                >
                  {label}
                </a>
              ))}

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
