import { Typography, Button } from "@material-tailwind/react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

const LINKS = ["Beranda", "Tentang Kami", "Blog", "Layanan"];
const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  const handleSubscribe = () => {
    window.location.href = "https://github.com/abdulaziz817";
  };

  return (
    <footer className="bg-gray-50 pt-20 pb-10 px-6 mt-20 border-t border-gray-200">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center"
      >
        {/* Left: Copyright */}
        <div>
          <Typography className="text-gray-700 text-sm md:text-base text-center md:text-left">
            &copy; {CURRENT_YEAR} Hak cipta dilindungi.{" "}
            <a
              href="https://wa.me/6287782535212"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Abdul Aziz
            </a>
            .
          </Typography>
        </div>

        {/* Right: Links and Button */}
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-end gap-4">
          <ul className="flex gap-6">
            {LINKS.map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="text-gray-700 hover:text-gray-900 transition-colors relative after:block after:h-0.5 after:bg-blue-500 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
          <Button
            onClick={handleSubscribe}
            className="flex items-center gap-2 bg-black text-white hover:bg-gray-800 transition duration-300"
          >
            <FaGithub className="text-lg" />
            GitHub
          </Button>
        </div>
      </motion.div>
    </footer>
  );
}

export default Footer;
