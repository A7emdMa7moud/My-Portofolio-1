import "./globals.css";
import Navbar from "./_components/Navbar";
import SideLinks from "./_components/SideLinks";
import Footer from "./_components/Footer";
import Head from "next/head";

export const metadata = {
  title: "Ahmed Mahmoud",
  description: "MERN Stack Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta name="apple-mobile-web-app-title" content="Ahmed.Dev" />
      </Head>
      <body
        className={`antialiased font-fireCode bg-background text-gray container`}
      >
        <Navbar />
        <SideLinks />
        <main className="min-h-dvh pt-[10rem]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
