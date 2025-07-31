import type { NextConfig } from "next";
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    domains: ["readdy.ai"], // Tashqi domenlar bu yerda aniqlanadi
  },
  typescript: {
    ignoreBuildErrors: true, // Agar TypeScript xatolarini e'tiborsiz qoldirmoqchi bo'lsangiz, kommentariyani olib tashlang
  },
};

export default nextConfig;