"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Input, Button, Typography } from "@material-tailwind/react";
import { motion, AnimatePresence } from "framer-motion";
import { XMarkIcon } from "@heroicons/react/24/solid";

function Hero() {
  const [email, setEmail] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");

  const handleEmailChange = (e) => setEmail(e.target.value);

  const handleOfferClick = () => {
    if (!email) {
      setPopupMessage("📩 Anda harus membaca syarat & ketentuan dan mengisi email terlebih dahulu.");
      setShowPopup(true);
    } else if (!email.endsWith("@gmail.com")) {
      setPopupMessage("❌ Email tidak valid. Gunakan email yang berakhiran @gmail.com.");
      setShowPopup(true);
    } else {
      const whatsappMessage = `Saya berharap Bisa di terima di sini. Berikut saya cantumkan email saya: ${email}, dan saya sangat tertarik untuk mengambil kesempatan bergabung di bidang desain grafis. Saya yakin keterampilan dan pengalaman saya dapat memberikan kontribusi positif bagi tim.`;
      const whatsappLink = `https://wa.me/6287782535212?text=${encodeURIComponent(whatsappMessage)}`;
      window.open(whatsappLink, "_blank");
    }
  };

  const closePopup = () => setShowPopup(false);

  useEffect(() => {
    if (showPopup) {
      const timer = setTimeout(() => {
        setShowPopup(false);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [showPopup]);

  const handleTermsClick = () => {
    const pdfUrl = "/image/penawaran.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Syarat dan Ketentuan.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <header className="relative overflow-hidden bg-white pt-20 pb-20 px-4 sm:px-10 lg:px-20">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 items-start min-h-[80vh] gap-10">
        {/* TEKS */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-start space-y-6 mt-12"
        >
          <Typography variant="h1" color="blue-gray" className="text-5xl md:text-6xl font-bold leading-tight">
            Abdul Aziz
          </Typography>
          <Typography variant="h2" className="text-3xl md:text-4xl font-extrabold text-indigo-600 italic">
            Desainer Grafis
          </Typography>
          <Typography variant="lead" className="text-gray-600 max-w-xl">
            Seseorang yang gemar belajar hal-hal baru, terutama dalam desain grafis. Saya telah mendalami bidang ini selama lebih dari 5 tahun dan aktif dalam menciptakan desain untuk media sosial maupun cetak. Menurut saya, dengan desain, hidup menjadi lebih berwarna 🙂
          </Typography>

          <div>
            <Typography variant="small" className="mb-2 font-medium text-gray-800">
              Email Anda
            </Typography>
            <div className="flex flex-col gap-4 md:flex-row">
              <Input
                color="gray"
                label="Masukkan email Anda"
                size="lg"
                value={email}
                onChange={handleEmailChange}
              />
              <motion.div whileTap={{ scale: 0.95 }}>
                <Button
                  color="gray"
                  className="w-full md:w-auto px-6 py-3 transition-transform hover:scale-105"
                  onClick={handleOfferClick}
                >
                  Penawaran
                </Button>
              </motion.div>
            </div>
            <Typography variant="small" className="mt-2 text-gray-500">
              Baca selengkapnya{" "}
              <span
                onClick={handleTermsClick}
                className="font-medium underline cursor-pointer hover:text-gray-800"
              >
                Syarat dan Ketentuan
              </span>
            </Typography>
          </div>
        </motion.div>

        {/* GAMBAR */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="w-full flex justify-center"
        >
          <Image
            width={410}
            height={410}
            alt="kerja tim"
            src="/image/meong.png"
            className="w-auto h-auto object-cover rounded-none -mt-4 md:-mt-8 lg:-mt-12"
            priority
          />
        </motion.div>
      </div>

      {/* MODAL / POPUP */}
      <AnimatePresence>
  {showPopup && (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        initial={{ opacity: 0, y: -50, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 50, scale: 0.95 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        className="relative w-[90%] max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-300"
      >
        {/* Tombol X di kanan atas dengan animasi hover */}
        <div className="absolute top-4 right-4">
          <button
            onClick={closePopup}
            className="text-gray-400 hover:text-gray-700 transition-all transform scale-125 hover:scale-150 duration-300 ease-in-out"
            aria-label="Tutup"
          >
            <XMarkIcon className="h-8 w-8" />
          </button>
        </div>

        {/* Isi konten */}
        <div className="flex flex-col sm:flex-row">
          <div className="w-full sm:w-3/4 p-6 text-center sm:text-left">
            <p className="text-lg font-medium text-gray-700 leading-relaxed opacity-90 transition-all duration-300 hover:text-gray-900">
              {popupMessage}
            </p>
          </div>

          {/* Garis pembatas */}
          <div className="hidden sm:block border-l-2 border-gray-300 transform transition-all duration-300 hover:border-gray-500"></div>

          {/* Area kosong agar tombol X terpisah secara visual di sisi kanan */}
          <div className="hidden sm:block w-1/4 p-4"></div>
        </div>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>

    </header>
  );
}

export default Hero;
