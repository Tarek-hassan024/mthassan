import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Tarek Hassan",
  description: "Academic portfolio website",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-950 text-white">
        {/* Background glow */}
        <div className="pointer-events-none fixed inset-0 -z-10">
          <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-fuchsia-500/20 blur-[100px]" />
          <div className="absolute top-40 left-10 h-[420px] w-[420px] rounded-full bg-cyan-400/15 blur-[110px]" />
          <div className="absolute bottom-0 right-10 h-[420px] w-[420px] rounded-full bg-indigo-500/15 blur-[110px]" />
        </div>

        <Navbar />
        <main className="pb-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
