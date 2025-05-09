"use client";
import { Typography } from "@material-tailwind/react";
import { Palette } from "lucide-react";
import {
  Smartphone,
  Globe,
  ShoppingCart,
  LayoutDashboard,
} from "lucide-react";
import { motion } from "framer-motion";

// Data proyek
const PROYEK = [
  {
    icon: Smartphone,
    title: "Aplikasi Mobile",
    desc: "Aplikasi untuk menjelajahi restoran & kuliner lokal dengan pengalaman pengguna yang intuitif dan elegan.",
    link: "https://github.com/abdulaziz817?tab=repositories",
  },
  {
    icon: Globe,
    title: "Landing Page",
    desc: "Halaman promosi modern untuk brand kebugaran, dirancang responsif dan fokus pada konversi pengguna.",
    link: "https://github.com/abdulaziz817?tab=repositories",
  },
  {
    icon: Palette,
    title: "Desain Grafis",
    desc: "Berbagai karya desain grafis seperti poster, logo, banner, dan konten media sosial dengan estetika profesional.",
    link: "https://github.com/abdulaziz817?tab=repositories",
  },
  
  {
    icon: ShoppingCart,
    title: "Website E-commerce",
    desc: "Toko online yang responsif dan elegan, menampilkan produk teknologi terbaru dengan UI modern.",
    link: "https://github.com/abdulaziz817?tab=repositories",
  },
];

// Komponen Card Proyek
function ProjectCard({ icon: Icon, title, desc, link }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="backdrop-blur-sm bg-white/70 border border-gray-200 rounded-3xl p-6 shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
    >
      <div className="flex justify-center mb-5">
        <div className="bg-gradient-to-tr from-gray-100 to-white shadow-inner p-4 rounded-full">
          <Icon size={32} className="text-gray-800" />
        </div>
      </div>
      <h3 className="text-lg font-semibold text-center text-gray-900 mb-3 tracking-wide">
        {title}
      </h3>
      <p className="text-gray-600 text-sm text-justify leading-relaxed line-clamp-4">
        {desc}
      </p>
      <div className="mt-4 text-center">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 text-sm font-medium hover:underline"
        >
          Lihat detail
        </a>
      </div>
    </motion.div>
  );
}

// Komponen Utama
export function Proyek() {
  return (
    <section className="py-28 px-8 bg-white">
      <div className="container mx-auto mb-20 text-center">
        <Typography variant="h2" color="blue-gray" className="mb-4 font-extrabold">
          Proyek Saya
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full px-4 font-normal !text-gray-600 lg:w-6/12"
        >
          Dari aplikasi mobile hingga dashboard dan e-commerce, saya bangun produk digital yang modern dan sesuai kebutuhan Anda.
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-4">
        {PROYEK.map((props, idx) => (
          <ProjectCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default Proyek;
