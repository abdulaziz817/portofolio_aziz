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

export function ContactForm() {
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
          Siap untuk memulai? Jangan ragu untuk menghubungi kami melalui formulir kontak ini, dan mari kita mulai perjalanan menuju inovasi dan kesuksesan.
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
                Isi formulir ini dan tim kami akan menghubungi Anda dalam waktu 24 jam.
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
              <form action="#">
                <div className="mb-8 grid gap-4 lg:grid-cols-2">
                  {/* @ts-ignore */}
                  <Input
                    color="gray"
                    size="lg"
                    variant="static"
                    label="Nama Depan"
                    name="first-name"
                    placeholder="contoh: Aziz"
                    containerProps={{
                      className: "!min-w-full mb-3 md:mb-0",
                    }}
                  />
                  {/* @ts-ignore */}
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
                {/* @ts-ignore */}
                <Input
                  color="gray"
                  size="lg"
                  variant="static"
                  label="Email"
                  name="email"
                  placeholder="zizzzdul817@gmail.com"
                  containerProps={{
                    className: "!min-w-full mb-8",
                  }}
                />
              <Typography variant="lead" className="!text-blue-gray-500 text-sm mb-2">
  Apa yang Anda minati?
</Typography>
<div className="-ml-3 mb-14">
  {/* @ts-ignore */}
  <Radio color="gray" name="type" label="Desain Tipografi" defaultChecked />
  {/* @ts-ignore */}
  <Radio color="gray" name="type" label="Desain Iklan" />
  {/* @ts-ignore */}
  <Radio color="gray" name="type" label="Desain Ilustrasi" />
  {/* @ts-ignore */}
  <Radio color="gray" name="type" label="Desain Web" />
  {/* @ts-ignore */}
  <Radio color="gray" name="type" label="Desain Motion Graphics" />
  {/* @ts-ignore */}
  <Radio color="gray" name="type" label="Desain Paket" />
  {/* @ts-ignore */}
  <Radio color="gray" name="type" label="Desain Multimedia" />
  {/* @ts-ignore */}
  <Radio color="gray" name="type" label="Desain Pameran" />
    {/* @ts-ignore */}
  <Radio color="gray" name="type" label="Kursus Desain" />
    {/* @ts-ignore */}
  <Radio color="gray" name="type" label="Lainnya" />
</div>

                {/* @ts-ignore */}
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
                  <Button className="w-full md:w-fit" color="gray" size="md">
                    Kirim Pesan
                  </Button>
                </div>
              </form>
            </div>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}

export default ContactForm;
