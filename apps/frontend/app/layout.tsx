import type { Metadata } from "next";
import { Providers } from "@/providers";
import "./globals.css";

export const metadata: Metadata = {
  title: "Trustworthy App Download",
  description:
    "Drive downloads with this sleek app template. One page with all the key info—built for conversion.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
