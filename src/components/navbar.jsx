"use client";

import React from "react";
import {
  Navbar as MTNavbar,
  Button,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/solid";
import { AnimatePresence, motion } from "framer-motion";

const NAV_MENU = [
  { name: "Instagram", href: "https://www.instagram.com/abdulaziz.nusantara/" },
  { name: "WhatsApp", href: "https://wa.me/6287860592111" },
];

function NavItem({ children, href }) {
  return (
    <li>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-800 hover:text-blue-600 text-base font-medium transition-all duration-300 relative after:block after:h-0.5 after:bg-blue-500 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left"
      >
        {children}
      </a>
    </li>
  );
}

function DesktopNav() {
  return (
    <ul className="hidden lg:flex items-center gap-10">
      {NAV_MENU.map(({ name, href }) => (
        <NavItem key={name} href={href}>
          {name}
        </NavItem>
      ))}
    </ul>
  );
}

function DesktopCVButton() {
  return (
    <div className="hidden lg:flex">
      <a href="/image/CV_Abdul_Aziz.pdf" download="CV_Abdul_Aziz">
        <Button className="bg-black text-white hover:bg-gray-900 shadow-md hover:shadow-lg transition-all duration-300">
          Unduh CV
        </Button>
      </a>
    </div>
  );
}

export function Navbar() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen((cur) => !cur);

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 960) setOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <MTNavbar
      shadow={false}
      fullWidth
      className="backdrop-blur-md bg-white/80 border-b border-gray-200 sticky top-0 z-50"
    >
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Typography as="span" variant="h5" className="font-bold text-gray-900 text-2xl">
            Abdul <span className="text-black-600">Aziz</span>
          </Typography>
        </motion.div>

        <DesktopNav />
        <DesktopCVButton />

        <motion.div
          whileTap={{ scale: 0.9 }}
          className="ml-auto lg:hidden"
        >
          <IconButton variant="text" color="gray" onClick={handleOpen}>
            {open ? (
              <motion.div
                key="x"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <XMarkIcon className="h-6 w-6" />
              </motion.div>
            ) : (
              <motion.div
                key="bars"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Bars3Icon className="h-6 w-6" />
              </motion.div>
            )}
          </IconButton>
        </motion.div>
      </div>

      {/* Mobile Menu with Animation */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white/80 backdrop-blur-md border-t border-gray-200"
          >
            <div className="container mx-auto px-4 py-6">
              <ul className="flex flex-col gap-6 mb-6 text-center">
                {NAV_MENU.map(({ name, href }) => (
                  <NavItem key={name} href={href}>
                    {name}
                  </NavItem>
                ))}
              </ul>
              <a href="/image/CV_Abdul_Aziz.pdf" download="CV_Abdul_Aziz">
                <Button
                  color="gray"
                  fullWidth
                  className="transition-all duration-300 hover:scale-[1.03]"
                >
                  Unduh CV
                </Button>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </MTNavbar>
  );
}

export default Navbar;
