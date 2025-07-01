import "./globals.css";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";
import Head from "next/head";

export const metadata = {
  title: "Ahmed Mahmoud | MERN Stack Developer in Egypt",
  description:
    "Hi, I'm Ahmed Mahmoud, a MERN Stack developer based in Egypt. I build modern, high-performance web applications using React.js, Node.js, MongoDB, and Express. Explore my portfolio, projects, and contact info.",
  keywords: [
    "Ahmed Mahmoud",
    "MERN",
    "Next.js",
    "React",
    "Node.js",
    "MongoDB",
    "Portfolio",
    "Web Developer",
    "Frontend",
    "Backend",
    "Egypt",
    "أحمد محمود محمد عبدالفتاح",
    "كفر العلو",
    "مبرمج كفر العلو",
    "مبرمج",
    "مطور ويب",
    "ريأكت",
    "جافاسكريبت",
  ],
  authors: [{ name: "Ahmed Mahmoud" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    url: "https://ahmed-ma7moud.vercel.app",
    title: "Ahmed Mahmoud | MERN Stack Developer in Egypt",
    description:
      "Hi, I'm Ahmed Mahmoud, a MERN Stack developer based in Egypt. I build modern, high-performance web applications using React.js, Node.js, MongoDB, and Express. Explore my portfolio, projects, and contact info.",
    images: [
      {
        url: "https://res.cloudinary.com/test-image-upload-2/image/upload/v1751332129/thumbnail_ud6vgd.jpg",
        width: 1200,
        height: 630,
        alt: "Ahmed Mahmoud Portfolio Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    url: "https://ahmed-ma7moud.vercel.app",
    title: "Ahmed Mahmoud | MERN Stack Developer in Egypt",
    description:
      "Hi, I'm Ahmed Mahmoud, a MERN Stack developer based in Egypt. I build modern web applications using React.js, Node.js, MongoDB, and Express.",
    images: [
      {
        url: "https://res.cloudinary.com/test-image-upload-2/image/upload/v1751332129/thumbnail_ud6vgd.jpg",
        width: 1200,
        height: 630,
        alt: "Ahmed Mahmoud Portfolio Preview",
      },
    ],
  },
  metadataBase: new URL("https://ahmed-ma7moud.vercel.app"),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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
