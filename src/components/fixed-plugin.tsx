"use client";
import Image from "next/image";
import { Button } from "@material-tailwind/react";

export function FixedPlugin() {
  return (
    <a href="https://www.instagram.com/zizzz.dul_/?next=%2Freels%2F" target="_blank">
      <Button
        color="white"
        size="sm"
        className="!fixed bottom-4 right-4 flex gap-1 pl-2 items-center border border-blue-gray-50"
      >
        <Image
          width={24}
          height={24}
          className="w-5 h-5"
          alt="Instagram"
          src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
        />{" "}
        Kunjungi
      </Button>
    </a>
  );
}