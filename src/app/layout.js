import { react } from "react";
import { Inter } from "next/font/google";
import Header from "./components/header";
import Footer from "./components/footer";
import { Bounce, ToastContainer } from "react-toastify";
import { Toaster } from "react-hot-toast";
import "react-toastify/dist/ReactToastify.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "E-Kari - Platform for selling and buying Artworks",
  description:
    "E-Kari is Pakistan's premier online platform for buying and selling physical artworks. Connect with talented artists, explore a diverse collection of paintings and sculptures, and securely purchase authentic pieces. Our user-friendly interface ensures a seamless experience for both buyers and artists. Join us in celebrating Pakistan's rich art scene and fostering a vibrant community of creativity. E-Kari: Where art meets opportunity.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} style={{ padding: `0%`, margin: `0%` }}>
        <nav>
          <Header />
        </nav>
        <main>{children}</main>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
          transition={Bounce}
        />
        <Toaster richColors />
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
