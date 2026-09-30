import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bytespace-peach.vercel.app"),
  title: {
    default: "ByteSpace - Get Access to Hundreds Courses Available",
    template: "%s | ByteSpace",
  },
  description:
    "Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bytespace-peach.vercel.app",
    siteName: "ByteSpace",
    title: "ByteSpace - Get Access to Hundreds Courses Available",
    description:
      "Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.",
  },
  twitter: {
    card: "summary_large_image",
    title: "ByteSpace - Get Access to Hundreds Courses Available",
    description:
      "Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} h-full antialiased`}>
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://cdn.fontshare.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700&display=swap"
        />
      </head>
      <body className="bg-brand selection:bg-accent flex min-h-full flex-col font-sans text-white selection:text-black">
        {children}
      </body>
    </html>
  );
}
