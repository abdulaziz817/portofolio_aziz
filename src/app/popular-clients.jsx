"use client";

import { Typography } from "@material-tailwind/react";
import { FaPaintBrush, FaCamera, FaVideo, FaPenNib } from "react-icons/fa";

export function KlienPopuler() {
  return (
    <section className="py-8 px-8 lg:py-20">
      <div className="container mx-auto grid items-center place-items-center">
        <div className="text-center">
          <Typography variant="h6" className="mb-4 uppercase !text-gray-500">
            KLIEN POPULER
          </Typography>
          <Typography variant="h2" color="blue-gray" className="mb-4">
            Dipercaya lebih dari 100+ <br /> klien
          </Typography>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-16 mt-8">
          <FaPaintBrush className="w-10 h-12 text-gray-500" /> {/* Ikon Desain Grafis */}
          <FaCamera className="w-10 h-10 text-gray-500" /> {/* Ikon Fotografi */}
          <FaVideo className="w-10 h-10 text-gray-500" /> {/* Ikon Videografi */}
          <FaPenNib className="w-10 h-10 text-gray-500" /> {/* Ikon UI/UX */}
        </div>
      </div>
    </section>
  );
}

export default KlienPopuler;