"use client";

import { useState } from "react"; // Import useState for managing state
import Image from "next/image";
import { Input, Button, Typography } from "@material-tailwind/react";

function Hero() {
  const [email, setEmail] = useState(""); // State to hold the email input

  const handleEmailChange = (e) => {
    setEmail(e.target.value); // Update email state on input change
  };

  const handleOfferClick = () => {
    // Validate the email
    if (email.endsWith("@gmail.com")) {
      // Create the mailto link
      const mailtoLink = `mailto:zizzzdul817@gmail.com?subject=Penawaran&body=Email dari: ${email}`;
      window.location.href = mailtoLink; // Redirect to the mailto link
    } else {
      alert("Email harus berakhiran @gmail.com"); // Alert if email is invalid
    }
  };

  const handleTermsClick = () => {
    // Create a download link for the PDF
    const pdfUrl = "/image/penawaran.pdf"; // URL to your PDF file
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Syarat dan Ketentuan.pdf"; // Name of the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link); // Remove the link after triggering download
  };

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
              <Input 
                color="gray" 
                label="Masukkan email Anda" 
                size="lg" 
                value={email} // Bind input value to state
                onChange={handleEmailChange} // Handle input change
              />
              <Button color="gray" className="w-full px-4 md:w-[12rem]" onClick={handleOfferClick}>
                penawaran
              </Button>
            </div>
          </div>
          <Typography variant="small" className="font-normal !text-gray-500">
            Baca selengkapnya{" "}
            <a 
              href="#" 
              onClick={handleTermsClick} // Change here
              className="font-medium underline transition-colors cursor-pointer"
            >
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
