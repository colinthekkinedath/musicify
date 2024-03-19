import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "musicify",
  description: "giving you the best music reccomendations",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* //   <body className={inter.className}>{children}</body> */}

      <body>
        <div className="relative">
          <div className="-z-1 bg-night absolute inset-0">
            <div className="fixed w-screen h-screen pointer-events-none bg-scroll">
              <Image
                src="/bg_circle.png"
                alt={""}
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>

          <div className="relative z-0">{children}</div>
        </div>
      </body>
    </html>
  );
}
