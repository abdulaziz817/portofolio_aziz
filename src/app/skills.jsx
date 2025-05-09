"use client";

import { Typography } from "@material-tailwind/react";
import {
  PencilSquareIcon,
  CameraIcon,
  CodeBracketIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

const skills = [
  {
    icon: PencilSquareIcon,
    title: "Desain Grafis",
    description:
      "Merancang identitas visual, layout media sosial, branding, hingga materi cetak yang konsisten dan menarik.",
  },
  {
    icon: CodeBracketIcon,
    title: "Web Development",
    description:
      "Mengembangkan antarmuka website yang interaktif dan dinamis dengan teknologi terkini dan desain responsif.",
  },
  {
    icon: CameraIcon,
    title: "Fotografi",
    description:
      "Menangkap momen dengan komposisi yang kuat, pencahayaan optimal, dan gaya visual yang estetis.",
  },
];

export default function Skills() {
  return (
    <section className="bg-white px-6 py-24 overflow-hidden">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.3, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-center mb-20 max-w-2xl mx-auto"
      >
        <Typography
          className="uppercase text-xl font-semibold tracking-widest text-gray-700 mb-2"
        >
          Keahlian Saya
        </Typography>
        <Typography
          variant="h1"
          className="text-4xl font-bold text-gray-900 mb-4"
        >
          Apa yang Saya Lakukan
        </Typography>
        <Typography variant="lead" className="text-gray-600">
          Menciptakan solusi kreatif dan teknis untuk dunia digital dan visual dengan hasil berkualitas tinggi.
        </Typography>
      </motion.div>

      {/* Skills Timeline */}
      <div className="relative max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
        {skills.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 1.2,
                delay: index * 0.2,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center px-4"
            >
              <div className="bg-white border border-gray-300 rounded-full p-6 shadow-md mb-6">
                <Icon className="h-10 w-10 text-black" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
