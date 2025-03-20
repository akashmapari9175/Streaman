import Header from "@/components/Common/Header";
import Footer from "@/components/Common/Footer";
import "./globals.css"; // Ensure global styles are applied

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
