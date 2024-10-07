"use client";

import { Typography } from "@material-tailwind/react";

// Data proyek
const PROYEK = [
  {
    img: "/image/blog-1.svg",
    title: "Pengembangan Aplikasi Mobile",
    desc: "Aplikasi mobile yang dirancang untuk membantu pengguna menemukan dan menjelajahi restoran serta kuliner lokal.",
    link: "https://github.com/abdulaziz817?tab=repositories",
  },
  {
    img: "/image/blog2.svg",
    title: "Pengembangan Halaman Landing",
    desc: "Halaman promosi untuk situs web kebugaran dalam kampanye musim panas. Termasuk pengembangan formulir.",
    link: "https://github.com/abdulaziz817?tab=repositories",
  },
  {
    img: "/image/blog3.svg",
    title: "Pengembangan Aplikasi Mobile",
    desc: "Aplikasi mobile yang dirancang untuk membantu pengguna menemukan dan menjelajahi restoran serta kuliner lokal.",
    link: "https://github.com/abdulaziz817?tab=repositories",
  },
  {
    img: "/image/blog4.svg",
    title: "Pengembangan E-commerce",
    desc: "Situs web e-commerce yang menawarkan akses ke gadget dan aksesori terbaru dan terbaik.",
    link: "https://github.com/abdulaziz817?tab=repositories",
  },
  // Tambahkan lebih banyak proyek di sini jika diperlukan
];

// Komponen ProjectCard
export function ProjectCard({ img, title, desc, link }) {
  return (
    <div className="project-card bg-white shadow-md rounded-lg overflow-hidden">
      <img src={img} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        <p className="mt-2 text-gray-600">{desc}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 text-blue-500 hover:underline"
        >
          See Details
        </a>
      </div>
    </div>
  );
}

// Komponen Proyek yang menampilkan ProjectCard
export function Proyek() {
  return (
    <section className="py-28 px-8">
      <div className="container mx-auto mb-20 text-center">
        <Typography variant="h2" color="blue-gray" className="mb-4">
          Proyek Saya
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full px-4 font-normal !text-gray-500 lg:w-6/12"
        >
          Apakah Anda memiliki ide aplikasi mobile yang perlu diwujudkan atau
          situs web yang butuh penyegaran? Saya di sini untuk mewujudkan impian
          digital Anda menjadi kenyataan.
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-x-10 gap-y-20 md:grid-cols-2 xl:grid-cols-4">
        {PROYEK.map((props, idx) => (
          <ProjectCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default Proyek;
