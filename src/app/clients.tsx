"use client";

import Image from "next/image";
import { Typography } from "@material-tailwind/react";

const KLIEN = [
  "coinbase",
  "spotify",
  "pinterest",
  "google",
  "amazon",
  "netflix",
];

export function Klien() {
  return (
    <section className="px-8 py-28">
      <div className="container mx-auto text-center">
        <Typography variant="h6" color="blue-gray" className="mb-8">
          Klien-klien hebat saya
        </Typography>
        <div className="flex flex-wrap items-center justify-center gap-6">
          {KLIEN.map((logo, key) => (
            <Image
              key={key}
              alt={logo}
              width={768}
              height={768}
              className="w-40"
              src={`/logos/logo-${logo}.svg`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Klien;
