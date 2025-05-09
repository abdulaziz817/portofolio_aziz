"use client";

import {
  Typography,
  Card,
  CardBody,
  Radio,
  Input,
  Textarea,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { EnvelopeIcon, PhoneIcon, TicketIcon } from "@heroicons/react/24/solid";
import jsPDF from "jspdf";
import "jspdf-autotable";
import { useState } from "react";

// Store to track email submission counts
const emailSubmissionCount = {};

export function ContactForm() {
  const [downloadStatus, setDownloadStatus] = useState(null); // State for download status
  const [selectedInterests, setSelectedInterests] = useState([]); // Track selected interests
  const [submissionError, setSubmissionError] = useState(null); // State for error messages

  const handleInterestChange = (e) => {
    const value = e.target.value;
    if (selectedInterests.includes(value)) {
      // Jika minat sudah dipilih, hapus dari array
      setSelectedInterests((prev) =>
        prev.filter((interest) => interest !== value)
      );
    } else if (selectedInterests.length < 2) {
      // Tambah minat jika kurang dari 2 yang dipilih
      setSelectedInterests((prev) => [...prev, value]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmissionError(null); // Clear previous error messages

    const formData = new FormData(e.target);
    const firstName = formData.get("first-name");
    const lastName = formData.get("last-name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const address = formData.get("address");
    const message = formData.get("message");

    // Validate all fields are filled
    if (!firstName || !lastName || !email || !phone || !address || !message) {
      setSubmissionError("Semua kolom harus diisi.");
      return;
    }

    // Validate email ends with @gmail.com
    if (!email.endsWith("@gmail.com")) {
      setSubmissionError("Email harus menggunakan domain @gmail.com.");
      return;
    }
    // Limit form submissions to 2 times for the same email
    if (!emailSubmissionCount[email]) {
      emailSubmissionCount[email] = 0;
    }

    if (emailSubmissionCount[email] >= 2) {
      setSubmissionError(
        "Anda hanya bisa mengirimkan formulir dua kali dengan email yang sama."
      );
      return;
    }

    emailSubmissionCount[email] += 1;

    // Ensure no more than 2 interests are selected
    if (selectedInterests.length > 2) {
      setSubmissionError("Anda hanya dapat memilih maksimal 2 minat.");
      return;
    }

    // Create a PDF document
    const doc = new jsPDF("portrait", "pt", "a4");

    // Set a background color
    doc.setFillColor(230, 230, 250); // Light lavender
    doc.rect(
      0,
      0,
      doc.internal.pageSize.width,
      doc.internal.pageSize.height,
      "F"
    );

    // Add header
    doc.setFontSize(26);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(50, 50, 255); // Deep blue
    doc.text("Pengiriman Formulir", doc.internal.pageSize.getWidth() / 2, 50, {
      align: "center",
    });

    // Add some branding
    doc.setFontSize(16);
    doc.setTextColor(120);
    doc.setFont("courier", "normal");
    doc.text(
      "Di Desain oleh Abdul Aziz",
      doc.internal.pageSize.getWidth() / 2,
      70,
      {
        align: "center",
      }
    );

    // Add a logo or placeholder image (optional)
    doc.addImage("https://via.placeholder.com/150", "JPEG", 40, 40, 100, 100);

    // Create a custom header background with some shapes
    doc.setFillColor(100, 100, 250); // Light blue
    doc.roundedRect(
      30,
      120,
      doc.internal.pageSize.getWidth() - 60,
      40,
      10,
      10,
      "F"
    );

    // Contact information section
    doc.setFontSize(18);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(255, 255, 255); // White text
    doc.text("Informasi Pengguna", 40, 145);

    doc.setFontSize(14);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(50, 50, 50);
    doc.text(`Nama Depan: ${firstName}`, 40, 200);
    doc.text(`Nama Belakang: ${lastName}`, 40, 230);
    doc.text(`Email: ${email}`, 40, 260);
    doc.text(`Telepon: ${phone}`, 40, 290); // Add phone number
    doc.text(`Alamat: ${address}`, 40, 320); // Add address
    doc.text(`Pesan: ${message}`, 40, 350);

    // Section for interests
    doc.setFontSize(18);
    doc.setFont("helvetica", "bold");
    doc.setFillColor(230, 230, 250); // Light lavender background
    doc.rect(30, 380, doc.internal.pageSize.getWidth() - 60, 30, "F");
    doc.setTextColor(50, 50, 255); // Deep blue text
    doc.text("Minat Pengguna", 40, 400);

    // List of interests
    doc.setFontSize(14);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(0, 0, 0);
    doc.text(`Yang di Minati: ${selectedInterests.join(", ")}`, 40, 430);

    // Divider line to separate sections
    doc.setDrawColor(150);
    doc.setLineWidth(1);
    doc.line(40, 460, doc.internal.pageSize.getWidth() - 40, 460);

    // Footer section
    doc.setFontSize(12);
    doc.setTextColor(100, 100, 100);
    doc.setFont("courier", "italic");
    doc.text(
      "Terima kasih atas kiriman Anda! Kami akan segera menghubungi Anda.",
      40,
      490
    );

    // Save the PDF
    const pdfOutput = doc.output("blob");

    // Create a link to download the PDF
    const link = document.createElement("a");
    link.href = URL.createObjectURL(pdfOutput);
    link.download = "Pengiriman Registrasi";

    document.body.appendChild(link);

    setTimeout(() => {
      link.click();
      document.body.removeChild(link);

      // Set download status to success after the delay
      setDownloadStatus("success");

      setTimeout(() => {
        setDownloadStatus(null);
      }, 1000);
    }, 1000);

    // Handle WhatsApp API link (optional)
    const phoneNumber = "087782535212";
    const messageToSend = encodeURIComponent(
      "Saya ingin mengirimkan PDF kontak."
    );
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${messageToSend}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="px-8 py-16">
      <div className="container mx-auto mb-20 text-center">
        <Typography variant="h1" color="blue-gray" className="mb-4">
          Hubungi Kami
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full lg:w-5/12 !text-gray-500"
        >
          Siap untuk memulai? Jangan ragu untuk menghubungi kami melalui
          formulir kontak ini, dan mari kita mulai perjalanan menuju inovasi dan
          kesuksesan.
        </Typography>
      </div>
      <div>
        <Card shadow={true} className="container mx-auto border border-gray/50">
          <CardBody className="grid grid-cols-1 lg:grid-cols-7 md:gap-10">
            <div className="w-full col-span-3 rounded-lg h-full py-8 p-5 md:p-16 bg-gray-900">
              <Typography variant="h4" color="white" className="mb-2">
                Informasi Kontak
              </Typography>
              <Typography
                variant="lead"
                className="mx-auto mb-8 text-base !text-gray-500"
              >
                Isi formulir ini dan tim kami akan menghubungi Anda dalam waktu
                24 jam.
              </Typography>
              <div className="flex gap-5">
                <PhoneIcon className="h-6 w-6 text-white" />
                <Typography variant="h6" color="white" className="mb-2">
                  +62 877 8253 5212
                </Typography>
              </div>
              <div className="flex my-2 gap-5">
                <EnvelopeIcon className="h-6 w-6 text-white" />
                <Typography variant="h6" color="white" className="mb-2">
                  zizzzdul817@gmail.com
                </Typography>
              </div>
              <div className="flex mb-10 gap-5">
                <TicketIcon className="h-6 w-6 text-white" />
                <Typography variant="h6" color="white" className="mb-2">
                  Buka Tiket Dukungan
                </Typography>
              </div>
              <div className="flex items-center gap-5">
                <IconButton variant="text" color="white">
                  <i className="fa-brands fa-facebook text-lg" />
                </IconButton>
                <IconButton variant="text" color="white">
                  <i className="fa-brands fa-instagram text-lg" />
                </IconButton>
                <IconButton variant="text" color="white">
                  <i className="fa-brands fa-github text-lg" />
                </IconButton>
              </div>
            </div>
            <div className="w-full mt-8 md:mt-0 md:px-10 col-span-4 h-full p-5">
              <form onSubmit={handleSubmit}>
                <div className="mb-8 grid gap-4 lg:grid-cols-2">
                  <Input
                    color="gray"
                    size="lg"
                    variant="static"
                    label="Nama Depan"
                    name="first-name"
                    placeholder="contoh: Abdul"
                    containerProps={{
                      className: "!min-w-full mb-3 md:mb-0",
                    }}
                  />
                  <Input
                    color="gray"
                    size="lg"
                    variant="static"
                    label="Nama Belakang"
                    name="last-name"
                    placeholder="contoh: Aziz"
                    containerProps={{
                      className: "!min-w-full",
                    }}
                  />
                </div>
                <div className="mb-8 grid gap-4 lg:grid-cols-2">
                  <Input
                    color="gray"
                    size="lg"
                    variant="static"
                    label="Email"
                    name="email"
                    placeholder="zizzzdul817@gmail.com"
                    containerProps={{
                      className: "!min-w-full mb-3 md:mb-0",
                    }}
                  />
                  <Input
                    color="gray"
                    size="lg"
                    variant="static"
                    label="Telepon"
                    name="phone"
                    placeholder="contoh: +62 877 8253 5212"
                    containerProps={{
                      className: "!min-w-full",
                    }}
                  />
                </div>
                <Input
                  color="gray"
                  size="lg"
                  variant="static"
                  label="Alamat"
                  name="address" // New field
                  placeholder="contoh: Jalan Mawar No. 123"
                  containerProps={{
                    className: "!min-w-full mb-8",
                  }}
                />
                <Typography
                  variant="lead"
                  className="!text-blue-gray-500 text-sm mb-2"
                >
                  Apa yang Anda minati?
                </Typography>
                <div className="-ml-3 mb-14">
                  <Radio
                    color="gray"
                    name="type"
                    label="Desain Tipografi"
                    value="Desain Tipografi"
                    onChange={handleInterestChange}
                  />
                  <Radio
                    color="gray"
                    name="type"
                    label="Desain Iklan"
                    value="Desain Iklan"
                    onChange={handleInterestChange}
                  />
                  <Radio
                    color="gray"
                    name="type"
                    label="Desain Ilustrasi"
                    value="Desain Ilustrasi"
                    onChange={handleInterestChange}
                  />
                  <Radio
                    color="gray"
                    name="type"
                    label="Desain Web"
                    value="Desain Web"
                    onChange={handleInterestChange}
                  />
                  <Radio
                    color="gray"
                    name="type"
                    label="Desain Motion Graphics"
                    value="Desain Motion Graphics"
                    onChange={handleInterestChange}
                  />
                  <Radio
                    color="gray"
                    name="type"
                    label="Desain Paket"
                    value="Desain Paket"
                    onChange={handleInterestChange}
                  />
                  <Radio
                    color="gray"
                    name="type"
                    label="Desain Multimedia"
                    value="Desain Multimedia"
                    onChange={handleInterestChange}
                  />
                  <Radio
                    color="gray"
                    name="type"
                    label="Desain Pameran"
                    value="Desain Pameran"
                    onChange={handleInterestChange}
                  />
                  <Radio
                    color="gray"
                    name="type"
                    label="Kursus Desain"
                    value="Kursus Desain"
                    onChange={handleInterestChange}
                  />
                  <Radio
                    color="gray"
                    name="type"
                    label="Editing Vidio"
                    value="Editing Vidio"
                    onChange={handleInterestChange}
                  />
                  <Radio
                    color="gray"
                    name="type"
                    label="Fotografi"
                    value="Fotografi"
                    onChange={handleInterestChange}
                  />
                  <Radio
                    color="gray"
                    name="type"
                    label="Lainnya"
                    value="Lainnya"
                    onChange={handleInterestChange}
                  />
                </div>
                <Textarea
                  color="gray"
                  size="lg"
                  variant="static"
                  label="Pesan Anda"
                  name="message"
                  containerProps={{
                    className: "!min-w-full mb-8",
                  }}
                />
                <div className="w-full flex justify-end">
                  <Button
                    className="w-full md:w-fit"
                    color="gray"
                    size="md"
                    type="submit"
                  >
                  Unduh & Kirim Form
                  </Button>
                </div>
              </form>
            </div>
          </CardBody>
        </Card>

        {downloadStatus === "success" && (
  <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2 bg-green-600 text-white p-4 rounded-md shadow-lg animate-bounce transition duration-700 ease-in-out">
    🎉 Form berhasil diunduh! Ayo segera kirimkan... 📄
  </div>
)}
{submissionError && (
  <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2 bg-red-600 text-white p-4 rounded-md shadow-lg transition-transform transform translate-y-10 ease-in-out duration-300">
    ❌ Pengiriman gagal karena: {submissionError}
  </div>
)}

      </div>
    </section>
  );
}

export default ContactForm;
