"use client";

import React from "react";
import { Typography, Card, CardBody } from "@material-tailwind/react";
import {
  BriefcaseIcon,
  LightBulbIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/outline"; // You can adjust the icons library as per your preference

export function WhyChooseDesigner() {
  const [active, setActive] = React.useState(3);

  // Reasons to choose a designer
  const reasons = [
    {
      title: "Keahlian Profesional",
      description:
        "Seorang desainer grafis profesional dapat mengubah ide abstrak menjadi visual yang memukau dan efektif.",
      name: "Keunggulan Desain",
      position: "Pengalaman lebih dari 5 tahun di bidang desain grafis.",
      icon: <BriefcaseIcon className="h-12 w-12 text-blue-gray-500" />, // Icon for professional expertise
    },
    {
      title: "Kreativitas Tak Terbatas",
      description:
        "Desain grafis membawa kreativitas tanpa batas ke dalam setiap proyek, menghasilkan solusi yang unik dan menarik.",
      name: "Inspirasi Kreatif",
      position: "Menangani proyek desain media sosial hingga cetak.",
      icon: <LightBulbIcon className="h-12 w-12 text-blue-gray-500" />, // Icon for creativity
    },
    {
      title: "Komunikasi Visual Efektif",
      description:
        "Menyampaikan pesan dengan desain visual yang jelas dan kuat adalah kunci kesuksesan sebuah proyek.",
      name: "Pesan yang Efektif",
      position: "Membantu klien meningkatkan brand awareness.",
      icon: (
        <ChatBubbleLeftRightIcon className="h-12 w-12 text-blue-gray-500" />
      ), // Icon for effective communication
    },
  ];

  return (
    <section className="py-12 px-8 lg:py-24">
      <div className="container max-w-screen-lg mx-auto">
        <div className="container mx-auto mb-20 text-center">
          <Typography variant="h2" color="blue-gray" className="mb-4">
            Kenapa Harus Pilih Desainer Grafis?
          </Typography>
          <Typography
            variant="lead"
            className="mx-auto w-full px-4 font-normal !text-gray-500 lg:w-8/12"
          >
            Berikut adalah alasan mengapa memilih seorang desainer grafis profesional bisa membuat proyek Anda sukses.
          </Typography>
        </div>
        <Card color="transparent" shadow={false} className="py-8 lg:flex-row">
          <CardBody className="w-full lg:gap-10 h-full lg:!flex justify-between ">
            <div className="w-full mb-10 lg:mb-0">
              <Typography
                variant="h3"
                color="blue-gray"
                className="mb-4 font-bold lg:max-w-xs"
              >
                {reasons[active - 1].title}
              </Typography>
              <Typography className="mb-3 w-full lg:w-8/12 font-normal !text-gray-500">
                {reasons[active - 1].description}
              </Typography>
              <Typography variant="h6" color="blue-gray" className="mb-0.5">
                {reasons[active - 1].name}
              </Typography>
              <Typography
                variant="small"
                className="font-normal mb-5 !text-gray-500"
              >
                {reasons[active - 1].position}
              </Typography>
              <div className="flex items-center gap-4">
                <div
                  className={`cursor-pointer ${
                    active === 1 ? "opacity-100" : "opacity-50"
                  }`}
                  onClick={() => setActive(1)}
                >
                  <BriefcaseIcon className="h-8 w-8 text-blue-gray-500" />
                </div>
                <div className="w-[1px] h-[36px] bg-blue-gray-100"></div>
                <div
                  className={`cursor-pointer ${
                    active === 2 ? "opacity-100" : "opacity-50"
                  }`}
                  onClick={() => setActive(2)}
                >
                  <LightBulbIcon className="h-8 w-8 text-blue-gray-500" />
                </div>
                <div className="w-[1px] h-[36px] bg-blue-gray-100"></div>
                <div
                  className={`cursor-pointer ${
                    active === 3 ? "opacity-100" : "opacity-50"
                  }`}
                  onClick={() => setActive(3)}
                >
                  <ChatBubbleLeftRightIcon className="h-8 w-8 text-blue-gray-500" />
                </div>
              </div>
            </div>
            <div className="h-[21rem] w-full sm:w-[18rem] shrink-0 flex items-center justify-center">
              {/* Display the static icon based on active reason */}
              {reasons[active - 1].icon}
            </div>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}

export default WhyChooseDesigner;
