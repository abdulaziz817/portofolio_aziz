/* eslint-disable @next/next/next-script-for-ga */
import "./globals.css";
import { Roboto } from "next/font/google";
import { Layout, FixedPlugin } from "@/components";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  display: "swap",
});

export const metadata = {
  title: "Abdul Aziz",
  description: "Portofolio",
};

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <head>
        <script
          // defer
          // data-site="YOUR_LOGO_URL_HERE"
          // src="https://api.nepcha.com/js/nepcha-analytics.js"
        ></script>
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
        {/* If you want the logo as a favicon, ensure the correct path */}
        <link rel="icon" href="/image/logo.png" type="image/png" />
      </head>
      <body className={roboto.className}>
        <Layout>
          {children}
          <FixedPlugin />
        </Layout>
      </body>
    </html>
  );
}