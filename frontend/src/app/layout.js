import Navbar from "@/components/layout/Navbar";
import { Providers } from "./providers";

export const metadata = {
  title: "Stubble Vision",
  description: "Fire detection and burn severity assessment",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
