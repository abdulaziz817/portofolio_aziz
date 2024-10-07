"use client";

import { Typography } from "@material-tailwind/react";
import {
  PencilSquareIcon, // Desain Grafis (ikon pensil sebagai simbol desain)
  CameraIcon, // Fotografi (ikon kamera)
  DevicePhoneMobileIcon, // UI/UX (ikon perangkat mobile sebagai simbol UI/UX)
  SparklesIcon, // Canva (ikon kilau atau kreativitas)
  PaintBrushIcon, // CorelDRAW (ikon kuas sebagai simbol ilustrasi)
  PhotoIcon, // Adobe (ikon gambar sebagai simbol software desain Adobe)
  ComputerDesktopIcon, // Figma (ikon komputer atau perangkat digital)
  DocumentTextIcon, // Microsoft Office (ikon dokumen sebagai simbol administrasi)
} from "@heroicons/react/24/solid";
import { SkillCard } from "@/components";

const KEAHLIAN = [
  {
    icon: PencilSquareIcon,
    title: "Desain Grafis",
    children:
      "Menciptakan desain visual yang menarik dan fungsional untuk berbagai platform, baik media cetak maupun digital.",
  },
  {
    icon: CameraIcon,
    title: "Fotografi",
    children:
      "Menghasilkan foto-foto berkualitas tinggi yang menangkap momen-momen penting dengan estetika visual yang menarik.",
  },
  {
    icon: DevicePhoneMobileIcon,
    title: "UI/UX",
    children:
      "Merancang pengalaman pengguna yang intuitif dan interaktif dengan pendekatan user-centric untuk aplikasi dan website.",
  },
  {
    icon: SparklesIcon,
    title: "Canva",
    children:
      "Menggunakan Canva untuk membuat desain yang cepat dan profesional untuk berbagai keperluan, seperti poster, media sosial, dan presentasi.",
  },
  {
    icon: PaintBrushIcon,
    title: "CorelDRAW",
    children:
      "Menguasai CorelDRAW untuk menciptakan ilustrasi, logo, dan desain vektor dengan presisi tinggi.",
  },
  {
    icon: PhotoIcon,
    title: "Adobe",
    children:
      "Berpengalaman menggunakan berbagai software Adobe untuk desain grafis, termasuk Photoshop, Illustrator, dan lainnya.",
  },
  {
    icon: ComputerDesktopIcon,
    title: "Figma",
    children:
      "Menggunakan Figma untuk kolaborasi desain UI/UX yang efisien, baik untuk prototyping maupun handoff kepada developer.",
  },
  {
    icon: DocumentTextIcon,
    title: "Microsoft Office",
    children:
      "Menguasai Microsoft Office untuk keperluan administrasi, penyusunan dokumen, presentasi, dan analisis data.",
  },
  

];

export function Skills() {
  return (
    <section className="px-8">
      <div className="container mx-auto mb-20 text-center">
        <Typography color="blue-gray" className="mb-2 font-bold uppercase">
          Keahlian Saya
        </Typography>
        <Typography variant="h1" color="blue-gray" className="mb-4">
          Apa yang Saya Lakukan
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full !text-gray-500 lg:w-10/12"
        >
          Saya tidak hanya seorang desainer; saya adalah seorang kreator
          pengalaman digital. Merancang desain yang immersive bukan hanya
          pekerjaan, tetapi panggilan hidup saya. Temukan di bawah bagaimana
          saya dapat membantu Anda.
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
        {KEAHLIAN.map((props, idx) => (
          <SkillCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default Skills;
