import "./globals.css";
import Navbar from "./_components/Navbar";
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
        <meta
          name="description"
          content="MERN Stack Developer portfolio for Ahmed Mahmoud. Modern web apps using Next.js, React, Node.js, MongoDB."
        />
        <meta
          name="keywords"
          content="Ahmed Mahmoud, MERN, Next.js, React, Node.js, MongoDB, Portfolio, Web Developer, Frontend, Backend"
        />
        <meta name="author" content="Ahmed Mahmoud" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#c778dd" />
        <link rel="icon" href="/favicon.ico" />
        {/* Open Graph */}
        <meta
          property="og:title"
          content="Ahmed Mahmoud | MERN Stack Developer"
        />
        <meta
          property="og:description"
          content="Portfolio of Ahmed Mahmoud, MERN Stack Developer."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://your-portfolio-url.com" />
        <meta property="og:image" content="/photos/about-image.png" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Ahmed Mahmoud | MERN Stack Developer"
        />
        <meta
          name="twitter:description"
          content="Portfolio of Ahmed Mahmoud, MERN Stack Developer."
        />
        <meta name="twitter:image" content="/photos/about-image.png" />
      </Head>
      <body
        className={`antialiased font-fireCode bg-background text-gray container`}
      >
        <Navbar />
        <main className="min-h-dvh pt-[10rem]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
