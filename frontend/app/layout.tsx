import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { ErrorSuppressor } from "../components/ErrorSuppressor";

export const metadata: Metadata = {
  title: "Production Delta FHE",
  description: "Encrypted production difference tracking system",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`production-delta-bg text-foreground antialiased`}>
        <ErrorSuppressor />
        <div className="fixed inset-0 w-full h-full production-delta-bg z-[-20] min-w-[850px]"></div>
        <Providers>
          <main className="flex flex-col max-w-screen-lg mx-auto pb-20 min-w-[850px]">
            <nav className="flex w-full px-3 md:px-0 h-fit py-10 justify-between items-center">
              <div className="flex items-center gap-4">
                <div className="w-15 h-15 bg-white rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🔒</span>
                </div>
                <h1 className="text-2xl font-bold text-white">Production Delta FHE</h1>
              </div>
              <ConnectButton />
            </nav>
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}

