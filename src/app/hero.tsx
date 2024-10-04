"use client";

import Image from "next/image";
import { Input, Button, Typography } from "@material-tailwind/react";

function Hero() {
  return (
    <header className="bg-white p-8">
      <div className="container mx-auto grid h-full gap-10 min-h-[60vh] w-full grid-cols-1 items-center lg:grid-cols-2">
        <div className="row-start-2 lg:row-auto">
          <Typography
            variant="h1"
            color="blue-gray"
            className="mb-4 lg:text-5xl !leading-tight text-3xl font-bold"
          >
            Abdul Aziz 
          </Typography>
          <Typography
            variant="h2"
            color="blue-gray"
            className="mb-4 lg:text-4xl !leading-tight text-2xl italic"
          >
            Desainer Grafis
          </Typography>
          <Typography
            variant="lead"
            className="mb-4 !text-gray-500 md:pr-16 xl:pr-28"
          >
            Seseorang yang gemar belajar hal-hal baru, terutama dalam desain grafis. Saya telah mendalami bidang ini selama lebih dari 5 tahun dan aktif dalam menciptakan desain untuk media sosial maupun cetak. Menurut saya, dengan desain, hidup menjadi lebih berwarna 🙂.
          </Typography>
          <div className="grid">
            <Typography
              variant="small"
              className="mb-2 text-gray-900 font-medium"
            >
              Email Anda
            </Typography>
            <div className="mb-2 flex w-full flex-col gap-4 md:w-10/12 md:flex-row">
              {/* @ts-ignore */}
              <Input color="gray" label="Masukkan email Anda" size="lg" />
              <Button color="gray" className="w-full px-4 md:w-[12rem]">
                penawaran
              </Button>
            </div>
          </div>
          <Typography variant="small" className="font-normal !text-gray-500">
            Baca selengkapnya{" "}
            <a href="#" className="font-medium underline transition-colors">
              Syarat dan Ketentuan
            </a>
          </Typography>
        </div>
        <Image
          width={1024}
          height={1024}
          alt="kerja tim"
          src="/image/meong.png"
          className="h-[rem] w-full rounded-xl object-cover"
        />
      </div>
    </header>
  );
}

export default Hero;
