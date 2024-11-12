import "./globals.css";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "Rick and Morty App",
  description: "Visualize personagens de Rick and Morty",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <Navbar />
        <main className="container mx-auto px-4 py-8">{children}</main>
      </body>
    </html>
  );
}
