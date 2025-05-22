"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Input, Button, Typography } from "@material-tailwind/react";
import { motion, AnimatePresence } from "framer-motion";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { Typewriter } from "react-simple-typewriter";

function Hero() {
  const [email, setEmail] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const [showTypewriter, setShowTypewriter] = useState(false);

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
      const whatsappLink = `https://wa.me/6287860592111?text=${encodeURIComponent(whatsappMessage)}`;
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

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTypewriter(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

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
          className="flex flex-col justify-start space-y-5 mt-6 sm:mt-8"

        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <Typography
              variant="h1"
              color="blue-gray"
              className="text-5xl md:text-6xl font-bold leading-tight"
            >
              Abdul Aziz
            </Typography>
          </motion.div>

          {showTypewriter && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="mt-2"
            >
              <Typography variant="h3" className="text-2xl md:text-3xl font-bold text-gray-700">
                <Typewriter
                  words={["Desainer Grafis", "Web Developer", "Photography"]}
                  loop={false}
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1500}
                />
              </Typography>
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.9, ease: [0.4, 0, 0.2, 1] }}
          >
            <Typography
              variant="lead"
              className="text-gray-600 max-w-xl mt-4 leading-relaxed text-justify indent-8"
            >
              Saya antusias mempelajari hal-hal baru, terutama di bidang desain grafis, web development, dan fotografi.
              Berpengalaman lebih dari 5 tahun di dunia desain, saya juga aktif mengembangkan website dan mengeksplorasi visual melalui kamera.
              Bagi saya, kombinasi desain, kode, dan foto mampu menghadirkan karya yang penuh makna dan warna. 🙂
            </Typography>
          </motion.div>


          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            <div className="mt-6">
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

      {/* POPUP */}
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
              <div className="absolute top-4 right-4">
                <button
                  onClick={closePopup}
                  className="text-gray-400 hover:text-gray-700 transition-all transform scale-125 hover:scale-150 duration-300 ease-in-out"
                  aria-label="Tutup"
                >
                  <XMarkIcon className="h-8 w-8" />
                </button>
              </div>

              <div className="flex flex-col sm:flex-row">
                <div className="w-full sm:w-3/4 p-6 text-center sm:text-left">
                  <p className="text-lg font-medium text-gray-700 leading-relaxed opacity-90 transition-all duration-300 hover:text-gray-900">
                    {popupMessage}
                  </p>
                </div>

                <div className="hidden sm:block border-l-2 border-gray-300 transform transition-all duration-300 hover:border-gray-500"></div>
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
