import { Typography, Button } from "@material-tailwind/react";

const LINKS = ["Beranda", "Tentang Kami", "Blog", "Layanan"];
const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  const handleSubscribe = () => {
    // Redirect to WhatsApp chat
    window.location.href = "https://wa.me/6287782535212";
  };

  return (
    <footer className="mt-10 px-8 pt-20">
      <div className="container mx-auto">
        <div className="mt-16 flex flex-wrap items-center justify-center gap-y-4 border-t border-gray-200 py-6 md:justify-between">
          <Typography className="text-center font-normal !text-gray-700">
            &copy; {CURRENT_YEAR} Jangan disalin oleh{" "}
            <a
              href="https://wa.me/6287782535212"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Abdul Aziz
            </a>
            .
          </Typography>
          <ul className="flex gap-8 items-center">
            {LINKS.map((link) => (
              <li key={link}>
                <Typography
                  as="a"
                  href="#"
                  variant="small"
                  className="font-normal text-gray-700 hover:text-gray-900 transition-colors"
                >
                  {link}
                </Typography>
              </li>
            ))}
            <Button color="gray" onClick={handleSubscribe}>
              Berlangganan
            </Button>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
