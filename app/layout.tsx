import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { StoreProvider } from "@/lib/store";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "RSG | Rotaidem Simulation Group",
  description: "Premium flight simulation aircraft for Microsoft Flight Simulator 2024. Starting with the iconic Fokker VFW 614.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv">
      <body className="bg-rsg-dark text-white antialiased">
        <StoreProvider>
          <Header />
          <main className="pt-20 min-h-[calc(100vh-80px)]">
            {children}
          </main>
          <Footer />
          <Toaster position="top-center" richColors closeButton />
        </StoreProvider>
      </body>
    </html>
  );
}