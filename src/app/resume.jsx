"use client";

import { Typography, Button } from "@material-tailwind/react";
import {
  RocketLaunchIcon,
  LightBulbIcon,
  SparklesIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/solid";
import React, { useState } from "react";
import { motion } from "framer-motion";

// Variabel animasi item
const itemVariants = {
  hidden: { opacity: 0, x: 40 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
    },
  }),
};

// Komponen ResumeItem
function ResumeItem({ icon: Icon, children, index }) {
  return (
    <motion.div
      custom={index}
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
      className="flex items-center gap-4 bg-white border shadow-sm hover:shadow-md transition-all duration-300 rounded-xl px-5 py-4"
    >
      <motion.div
        whileHover={{ rotate: 10 }}
        transition={{ type: "spring", stiffness: 200 }}
        className="p-3 rounded-full border"
      >
        <Icon className="h-6 w-6 text-black" />
      </motion.div>
      <p className="text-black font-medium">{children}</p>
    </motion.div>
  );
}

const RESUME_ITEMS = [
  {
    icon: RocketLaunchIcon,
    children: "Memulai karier kreatif sebagai freelancer desain",
  },
  {
    icon: LightBulbIcon,
    children: "Menciptakan ide-ide visual untuk klien lokal & online",
  },
  {
    icon: SparklesIcon,
    children: "Terlibat dalam berbagai proyek desain inovatif",
  },
];

export function Resume() {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section className="px-8 py-24 bg-white text-black">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="container mx-auto grid grid-cols-1 lg:grid-cols-2 items-start gap-16"
      >
        {/* Kolom Deskripsi */}
        <div>
          <Typography variant="h2" className="font-bold mb-4 text-black">
            Riwayat Hidup
          </Typography>
          <Typography className="w-full lg:w-10/12 text-gray-700 leading-relaxed mb-4">
            {isExpanded
              ? "Desainer grafis berpengalaman dengan lebih dari 5 tahun dalam menciptakan desain visual yang menarik dan fungsional, baik untuk media cetak maupun digital. Selain itu, saya memiliki kemampuan dalam manajemen proyek dan bekerja sama dalam tim untuk mencapai tujuan yang diinginkan."
              : "Desainer grafis berpengalaman dengan lebih dari 5 tahun dalam menciptakan desain visual yang menarik dan fungsional, baik untuk media cetak maupun digital."}
          </Typography>
          <motion.div whileHover={{ x: 5 }}>
            <Button
              variant="text"
              color="gray"
              className="flex items-center gap-2 group"
              onClick={handleExpand}
            >
              {isExpanded ? "Lihat lebih sedikit" : "Lihat lebih lanjut"}
              <motion.span
                animate={{ rotate: isExpanded ? 90 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ArrowRightIcon className="h-4 w-4 text-black group-hover:translate-x-1 transition-transform" />
              </motion.span>
            </Button>
          </motion.div>
        </div>

        {/* Kolom Resume Items */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-5"
        >
          {RESUME_ITEMS.map((props, idx) => (
            <ResumeItem key={idx} {...props} index={idx} />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Resume;
