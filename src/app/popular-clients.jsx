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

// Animasi masuk elegan
const cardVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 40 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export function KlienPopuler() {
  return (
    <section className="bg-white text-black px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <Typography variant="h6" className="uppercase text-gray-600 tracking-widest mb-2">
          Klien Populer
        </Typography>
        <Typography variant="h2" className="text-black font-bold">
          Dipercaya oleh 100+ Klien
        </Typography>
      </motion.div>

      <div className="flex flex-wrap justify-center gap-10">
        {ICONS.map((item, i) => (
          <motion.div
            key={i}
            custom={i}
            initial="hidden"
            whileInView="visible"
            variants={cardVariants}
            viewport={{ once: true }}
            whileHover={{ scale: 1.08 }}
            className="flex flex-col items-center border border-gray-200 rounded-xl p-6 shadow-md hover:shadow-xl transition-all bg-white"
          >
            <div className="p-4 bg-gray-100 rounded-full mb-3">
              <item.icon className="w-8 h-8 text-black" />
            </div>
            <p className="text-sm text-black font-medium">{item.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default KlienPopuler;
