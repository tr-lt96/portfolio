import "./globals.css";
import {fontPrimary} from "@/_utils/fonts";

export const metadata = {
  title: `Luke's portfolio`,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${fontPrimary.className} min-h-screen`}>{children}</body>
    </html>
  );
}
