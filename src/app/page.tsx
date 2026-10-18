import Topbar from "@/components/Topbar";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Packages from "@/components/Packages";
import FlashSale from "@/components/FlashSale";
import Phones from "@/components/Phones";
import Process from "@/components/Process";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

export default function Home() {
  return (
    <>
      <a className="skip" href="#main">
        Bỏ qua tới nội dung
      </a>

      <Topbar />
      <Header />

      <main id="main">
        <Hero />
        <Packages />
        <FlashSale />
        <Phones />
        <Process />
        <Faq />
      </main>

      <Footer />

      <FloatingButtons />
    </>
  );
}
