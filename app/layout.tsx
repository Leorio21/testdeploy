import type { Metadata } from "next";
import { League_Spartan } from "next/font/google";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "./globals.css";
import AuthWrapper from "./Components/Auth/AuthWrapper/AuthWrapper";
import Providers from "./Providers";

export const metadata: Metadata = {
  title: "Mon App",
  description: "Mon App",
};

const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  variable: "--font--leagueSpartan",
  fallback: ["Arial", "sans serif"],
  preload: true,
  adjustFontFallback: false,
  display: "swap",
});

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="fr">
      <body className={leagueSpartan.variable}>
        <AuthWrapper>
          <Providers>
            <ReactQueryDevtools initialIsOpen={false} />
            {children}
          </Providers>
        </AuthWrapper>
      </body>
    </html>
  );
};

export default RootLayout;
