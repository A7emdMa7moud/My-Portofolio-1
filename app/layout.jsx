import "./globals.css";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";
import Head from "next/head";
import Analytics from "./_components/Analytics";
import Script from "next/script";
import PWARegister from "./_components/PWARegister";

export const metadata = {
  other: {
    "google-site-verification": "HJUTSK_upvniaoLeqQivyeooW95vrxgJjR8JlpdcMmc",
    "google-adsense-account": "ca-pub-7025460416385128",
  },
  alternates: {
    canonical: "https://ahmed-ma7moud.vercel.app",
  },
  title: "Ahmed Mahmoud | MERN Stack Developer in Egypt",
  description:
    "Hi, I'm Ahmed Mahmoud, a MERN Stack developer based in Egypt. I build modern, high-performance web applications using React.js, Node.js, MongoDB, and Express. Explore my portfolio, projects, and contact info.",
  keywords: [
    "Mern Stack Developer",
    "Ahmed Mahmoud",
    "Mohamed",
    "Trika",
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
    "مطور ويب",
    "ريأكت",
    "جافاسكريبت",
  ],
  authors: [{ name: "Ahmed Mahmoud" }],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
    other: [
      {
        rel: "icon",
        url: "/favicon.ico",
      },
    ],
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
      <Head>
        <link rel="manifest" href="/manifest.webmanifest" />
        <link rel="apple-touch-icon" href="/photos/Logo-2.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="theme-color" content="#C778DD" />
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7025460416385128"
          crossOrigin="anonymous"
        ></Script>
        <Script
          async
          custom-element="amp-auto-ads"
          src="https://cdn.ampproject.org/v0/amp-auto-ads-0.1.js"
        ></Script>
      </Head>
      <body
        className={`antialiased font-fireCode bg-background text-gray container`}
      >
        <amp-auto-ads
          type="adsense"
          data-ad-client="ca-pub-7025460416385128"
        ></amp-auto-ads>
        <Analytics />
        <PWARegister />
        <Navbar />
        <main className="min-h-dvh pt-[10rem]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
