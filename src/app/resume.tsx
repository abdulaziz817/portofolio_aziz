"use client";

import { Typography, Button } from "@material-tailwind/react";
import {
  AcademicCapIcon, // Ikon Pendidikan (gelar)
  ClipboardDocumentCheckIcon, // Ikon Sertifikat (sertifikasi)
  ArrowRightIcon, // Ikon panah kanan untuk tombol
} from "@heroicons/react/24/solid";
import { ResumeItem } from "@/components";

const RESUME_ITEMS = [
  {
    icon: AcademicCapIcon,
    children: "Pendidikan: SMK Madinatul Qur'an, Jonggol",
  },
  {
    icon: ClipboardDocumentCheckIcon,
    children: "Sertifikat Kursus Desain Grafis",
},
{
    icon: ClipboardDocumentCheckIcon,
    children: "Sertifikat Penghargaan Lomba Desain Grafis",
},

];

export function Resume() {
  return (
    <section className="px-8 py-24">
      <div className="container mx-auto grid w-full grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <div className="col-span-1">
          <Typography variant="h2" color="blue-gray">
            Riwayat Hidup
          </Typography>
          <Typography className="mb-4 mt-3 w-9/12 font-normal !text-gray-500">
            Desainer grafis berpengalaman dengan lebih dari 5 tahun dalam menciptakan desain visual yang menarik dan fungsional, baik untuk media cetak maupun digital.
          </Typography>
          <Button
            variant="text"
            color="gray"
            className="flex items-center gap-2"
          >
            Lihat lebih lanjut
            <ArrowRightIcon
              strokeWidth={3}
              className="h-3.5 w-3.5 text-gray-900"
            />
          </Button>
        </div>
        <div className="col-span-1 grid gap-y-6 lg:ml-auto pr-0 lg:pr-12 xl:pr-32">
          {RESUME_ITEMS.map((props, idx) => (
            <ResumeItem key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Resume;
