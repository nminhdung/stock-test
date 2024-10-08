import { Inter } from "next/font/google";
import "./globals.css";
import ThemProviders from "./ThemProviders";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning lang="en" className='dark' style={{ colorScheme: 'dark' }}>
      <body >
        {/* {children} */}
        <ThemProviders>{children}</ThemProviders>
      </body>
    </html>
  );
}
