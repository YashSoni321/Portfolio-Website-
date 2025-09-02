import { GoogleTagManager } from "@next/third-parties/google";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import "./css/card.scss";
import "./css/globals.scss";
import ScrollToTop from "./components/helper/scroll-to-top";
const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "Portfolio of Yash Soni - Software Developer",
  description:
    "Portfolio of Yash Soni, a self-taught full stack developer passionate about learning and collaboration.",
  keywords: [
    "Yash Soni",
    "Software Engineer",
    "Full Stack Developer",
    "React Developer",
    "Node.js Developer",
    "Portfolio",
    "Techie Yash",
    "techie Yash",
    "full stack developer",
    "full stack developer portfolio",
    "developer portfolio",
    "web developer",
    "web developer portfolio",
    "software engineer portfolio",
    "software engineer",
    "software developer",
    "software developer portfolio",
    "developer",
    "developer portfolio",
    "web development",
    "web development portfolio",
    "software development",
    "software development portfolio",
    "open source",
    "open source contributions",
    "open source developer",
    "open source portfolio",
    "self-taught developer",
    "self-taught software engineer",
    "freelance developer",
    "freelance software engineer",
    "freelance portfolio",
    "freelance web developer",
    "freelance web development",
    "freelance software development",
    "freelance projects",
    "freelance projects portfolio",
  ],
  openGraph: {
    title: "Yash Soni | Full Stack Developer",
    description:
      "Portfolio of Yash Soni, a passionate software engineer open to collaborations and new opportunities.",
    url: "https://techieyash.com/",
    siteName: "Yash Soni Portfolio",
    images: [
      {
        url: "https://techieyash.com/_next/image?url=%2Fprofile_pic.jpg&w=640&q=75", // Replace with real image
        width: 1200,
        height: 630,
        alt: "Yash Soni Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yash Soni | Full Stack Developer",
    description:
      "Portfolio of Yash Soni, a self-taught developer exploring new challenges.",
    images: [
      "https://techieyash.com/_next/image?url=%2Fprofile_pic.jpg&w=640&q=75",
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://techieyash.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="author" content="Yash Soni" />
        <meta name="robots" content="index, follow" />
        <meta
          name="google-site-verification"
          content="your-verification-code"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Yash Soni",
              jobTitle: "Full Stack Developer",
              url: "https://techieyash.com",
              sameAs: [
                "https://github.com/YashSoni321",
                "https://www.linkedin.com/in/yashsonii/",
              ],
            }),
          }}
        ></script>
      </head>
      <body className={inter.className}>
        <ToastContainer />
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
          <Navbar />
          {children}
          <ScrollToTop />
        </main>
        <Footer />
      </body>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
    </html>
  );
}
