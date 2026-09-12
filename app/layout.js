import "./globals.css";
import Header from "../components/organisms/Header";
import Footer from "../components/organisms/Footer";

export const metadata = {
  title: {
    default: "Pangasinan Heritage",
    template: "%s | Pangasinan Heritage",
  },
  description:
    "Discover the cultural heritage, history, and destinations of Pangasinan.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#f7f4ed] text-[#263238]">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}