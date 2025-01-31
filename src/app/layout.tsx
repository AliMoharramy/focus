import type { Metadata } from "next";
import { Chewy, Geist, Geist_Mono, Rubik_Spray_Paint } from "next/font/google";
import "./globals.css";
import { useContext } from "react";
import ToastProvider from "./components/toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const rubikSpray = Rubik_Spray_Paint({
  weight: "400",
  variable: "--font-rubic-paint",
  subsets: ["latin"],
});
const chewy = Chewy({
  weight: "400",
  variable: "--font-chewy",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${chewy.variable} ${geistMono.variable} ${rubikSpray.variable} antialiased`}
      >
        <ToastProvider>{children}</ToastProvider>
      </body>
    </html>
  );
}
