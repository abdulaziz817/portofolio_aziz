"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "@material-tailwind/react";

export function FixedPlugin() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const showTimer = setTimeout(() => setVisible(true), 5000);
    const hideTimer = setTimeout(() => setVisible(false), 15000);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <>
      {/* Floating Message */}
      <div
        className={`fixed bottom-24 right-4 z-40 px-5 py-3 rounded-xl border border-pink-100 bg-white text-pink-600 text-sm font-semibold shadow-xl
        transform transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
        ${visible ? "opacity-100 scale-100" : "opacity-0 scale-75 pointer-events-none"}`}
      >
        ✨ Intip saya di Instagram
      </div>

      {/* Instagram Button */}
      <a
        href="https://www.instagram.com/abdulaziz.nusantara/"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 z-50 group"
      >
        <Button
          color="white"
          size="sm"
          className="flex items-center gap-2 px-4 py-2 rounded-full border border-pink-100 bg-white shadow-md
          hover:shadow-xl transition-transform duration-300 ease-in-out hover:scale-105"
        >
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
            alt="Instagram"
            width={20}
            height={20}
            className="transition-transform duration-300 group-hover:rotate-[10deg] group-hover:scale-110"
          />
          <span className="text-pink-600 font-medium tracking-tight transition-opacity duration-300 group-hover:opacity-90">
            Kunjungi
          </span>
        </Button>
      </a>
    </>
  );
}
