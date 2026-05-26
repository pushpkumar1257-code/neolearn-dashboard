import "./globals.css";
import Sidebar from "../components/sidebar";

export const metadata = {
  title: "NeoLearn Dashboard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#0a0a0a] text-white">

        <main className="flex min-h-screen">

          <Sidebar />

          <section className="flex-1 p-6 overflow-hidden">
            {children}
          </section>

        </main>

      </body>
    </html>
  );
}