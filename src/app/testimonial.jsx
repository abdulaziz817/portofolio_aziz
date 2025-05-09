"use client";

import React from "react";
import { motion } from "framer-motion";
import { Typography } from "@material-tailwind/react";
import {
  BriefcaseIcon,
  LightBulbIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/outline";

export function WhyChooseDesigner() {
  const [active, setActive] = React.useState(0);

  const reasons = [
    {
      title: "Keahlian Profesional",
      description:
        "Desainer grafis profesional mampu mengubah ide menjadi visual yang menarik dan fungsional.",
      name: "Keunggulan Desain",
      position: "Berpengalaman lebih dari 5 tahun dalam bidang desain grafis.",
      icon: BriefcaseIcon,
    },
    {
      title: "Kreativitas Tak Terbatas",
      description:
        "Setiap desain membawa nilai unik dan kreatif untuk meningkatkan daya tarik visual brand Anda.",
      name: "Inspirasi Kreatif",
      position: "Menghandle berbagai proyek dari media sosial hingga branding.",
      icon: LightBulbIcon,
    },
    {
      title: "Komunikasi Visual Efektif",
      description:
        "Komunikasi yang kuat dimulai dari visual yang tepat dan berkesan.",
      name: "Pesan yang Efektif",
      position: "Telah membantu berbagai klien membangun kesadaran merek.",
      icon: ChatBubbleLeftRightIcon,
    },
  ];

  return (
    <section className="py-20 px-6 bg-white">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-center mb-16 max-w-2xl mx-auto"
      >
        <Typography variant="h2" color="blue-gray" className="font-bold mb-4">
          Kenapa Harus Pilih Desainer Grafis?
        </Typography>
        <Typography variant="lead" className="text-gray-600">
          Pilihan tepat untuk hasil yang maksimal. Berikut alasan kenapa Anda
          perlu memilih desainer grafis profesional.
        </Typography>
      </motion.div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {reasons.map((reason, index) => {
          const Icon = reason.icon;
          const isActive = active === index;

          return (
            <motion.div
              key={index}
              onClick={() => setActive(index)}
              initial={{ opacity: 0, scale: 0.8, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeInOut", delay: index * 0.3 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.07,
                boxShadow: "0px 20px 60px rgba(0, 0, 0, 0.1)",
              }}
              className={`relative overflow-hidden p-8 border rounded-3xl cursor-pointer transition-all duration-700 ease-in-out group ${
                isActive
                  ? "bg-white border-blue-500 ring-2 ring-blue-300 shadow-2xl scale-[1.03]"
                  : "bg-white border-gray-200"
              }`}
            >
              {/* Shine effect */}
              <motion.div
                className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-gradient-to-tr from-transparent via-white to-transparent opacity-10 rotate-45 pointer-events-none"
                animate={{ x: [0, 100], y: [0, 100] }}
                transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
              />

              {/* Icon */}
              <div
                className={`w-16 h-16 flex items-center justify-center rounded-full mb-5 shadow-md transition-all duration-500 ${
                  isActive ? "bg-blue-600 text-white" : "bg-gray-100 text-blue-gray-500"
                }`}
              >
                <Icon className="w-8 h-8" />
              </div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 1 }}
              >
                <Typography
                  variant="h5"
                  color="blue-gray"
                  className="font-semibold mb-2"
                >
                  {reason.title}
                </Typography>
                <Typography className="text-gray-600 mb-4">
                  {reason.description}
                </Typography>
                <Typography variant="h6" color="blue-gray">
                  {reason.name}
                </Typography>
                <Typography variant="small" className="text-gray-500">
                  {reason.position}
                </Typography>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

export default WhyChooseDesigner;
