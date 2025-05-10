"use client";

import React, { useEffect } from "react";
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

  // Auto-highlight setiap 4 detik
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % reasons.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [reasons.length]);

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-white via-white-50 to-white">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
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
              transition={{ duration: 1, delay: index * 0.3 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.07 }}
              className={`relative overflow-hidden p-8 border rounded-3xl cursor-pointer transition-all duration-700 group shadow-lg ${
                isActive
                  ? "bg-white border-blue-500 ring-2 ring-blue-300 scale-[1.03] animate-pulse"
                  : "bg-white border-gray-200"
              }`}
            >
              {/* Shine effect */}
              <motion.div
                className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-gradient-to-tr from-transparent via-white to-transparent opacity-10 rotate-45 pointer-events-none"
                animate={{ x: [0, 100], y: [0, 100] }}
                transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
              />

              {/* Icon with ripple animation */}
              <div
                className={`w-16 h-16 flex items-center justify-center rounded-full mb-5 shadow-md relative transition-all duration-500 ${
                  isActive ? "bg-blue-600 text-white" : "bg-gray-100 text-blue-gray-500"
                }`}
              >
                <Icon className="w-8 h-8 z-10" />
                {isActive && (
                  <motion.span
                    className="absolute w-16 h-16 rounded-full border-2 border-blue-300"
                    initial={{ scale: 1, opacity: 1 }}
                    animate={{ scale: 1.8, opacity: 0 }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeOut",
                    }}
                  />
                )}
              </div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.2, duration: 1 }}
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
