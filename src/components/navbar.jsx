"use client";

import React from "react";
import {
  Navbar as MTNavbar,
  Collapse,
  Button,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

const NAV_MENU = [
  { name: "Instagram", href: "https://www.instagram.com/zizzzdul_/?hl=en" },
  { name: "WhatsApp", href: "https://wa.me/6287782535212" },
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
        <Button
          className="bg-black text-white hover:bg-gray-900 shadow-md hover:shadow-lg transition-all duration-300"
        >
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
        <Typography
  as="span"
  variant="h5"
  className="font-bold text-gray-900 text-2xl"
>
  Abdul <span className="text-black-600">Aziz</span>
</Typography>

        </motion.div>

        <DesktopNav />
        <DesktopCVButton />

        <IconButton
          variant="text"
          color="gray"
          onClick={handleOpen}
          className="ml-auto lg:hidden"
        >
          {open ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </IconButton>
      </div>

      {/* Mobile Menu */}
      <Collapse open={open}>
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={open ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.3 }}
          className="container mx-auto px-4 py-4"
        >
          <ul className="flex flex-col gap-4 mb-4">
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
        </motion.div>
      </Collapse>
    </MTNavbar>
  );
}

export default Navbar;
