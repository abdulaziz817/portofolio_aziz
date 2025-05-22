"use client";

import {
  HiOutlinePencilSquare,
  HiOutlineCamera,
  HiOutlineGlobeAlt,
  HiOutlineDevicePhoneMobile,
} from "react-icons/hi2";
import { motion } from "framer-motion";
import { Typography } from "@material-tailwind/react";

const ICONS = [
  { icon: HiOutlinePencilSquare, label: "Desain Grafis" },
  { icon: HiOutlineCamera, label: "Fotografi" },
  { icon: HiOutlineGlobeAlt, label: "Web Development" },
  { icon: HiOutlineDevicePhoneMobile, label: "UI/UX" },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 40 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
    },
  },
};

export function KlienPopuler() {
  return (
    <section className="bg-gradient-to-br from-white via-gray-50 to-white text-black px-6 py-24 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <Typography variant="h6" className="uppercase text-gray-600 tracking-[0.25em] mb-2">
          Klien Populer
        </Typography>
        <Typography variant="h2" className="text-black font-bold text-3xl sm:text-4xl">
          Dipercaya oleh 100+ Klien
        </Typography>
      </motion.div>

      <motion.div
        className="flex flex-wrap justify-center gap-8 sm:gap-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {ICONS.map((item, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{
              scale: 1.1,
              boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
            }}
            whileTap={{ scale: 0.97 }}
            className="flex flex-col items-center border border-gray-200 rounded-2xl p-6 sm:p-8 bg-white shadow-md hover:shadow-xl transition-all duration-300 ease-in-out group"
          >
            <div className="p-5 bg-gray-100 rounded-full mb-4 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-105">
              <item.icon className="w-10 h-10 text-indigo-600 group-hover:text-indigo-800 transition-colors duration-300" />
            </div>
            <p className="text-md text-gray-800 font-semibold tracking-wide">
              {item.label}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default KlienPopuler;
