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
        <div className="fixed inset-0 w-full h-full production-delta-bg z-[-20]"></div>
        <Providers>
          <main className="flex flex-col max-w-screen-lg mx-auto pb-8 px-4 sm:px-6 lg:px-8">
            <nav className="flex w-full h-fit py-6 sm:py-10 justify-between items-center">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-12 h-12 sm:w-15 sm:h-15 bg-white rounded-lg flex items-center justify-center shadow-lg">
                  <span className="text-xl sm:text-2xl">🔒</span>
                </div>
                <div>
                  <h1 className="text-xl sm:text-2xl font-bold text-white leading-tight">Production Delta FHE</h1>
                  <p className="text-xs sm:text-sm text-white/80 hidden sm:block">Encrypted Analytics</p>
                </div>
              </div>
              <div className="flex items-center">
                <ConnectButton />
              </div>
            </nav>
            <div className="flex-1">
              {children}
            </div>
          </main>
        </Providers>
      </body>
    </html>
  );
}

