import type { Metadata } from "next";
import { Inter, Orbitron } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"], 
  variable: '--font-inter',
  display: 'swap',
});

const orbitron = Orbitron({ 
  subsets: ["latin"], 
  variable: '--font-orbitron',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Junior | Desarrollador Full Stack",
  description: "Portafolio de Junior - Desarrollador especializado en Flutter, React y soluciones innovadoras",
  keywords: ["desarrollador", "Flutter", "React", "Next.js", "Costa Rica"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.variable} ${orbitron.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}