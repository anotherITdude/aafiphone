import Container from "@/components/Container";
import Hero from "@/components/Hero";
import HowToEnter from "@/components/HowToEnter";
import LuckyWinner from "@/components/LuckyWinner";
import RegisterSection from "@/components/RegisterSection";
import WinIphone from "@/components/WinIphone";

export default function Home() {
  return (
    <Container>
      {/* <Navbar /> */}
      <Hero title="AAF Iphone EN" />
      <LuckyWinner />
      <WinIphone />
      <HowToEnter />
      {/* <Hero title="Section 2" />
      <Hero title="Section 3" />
      <Hero title="Section 4" /> */}
      {/* <RegisterSection title="" /> */}
      {/* <Hero title="Section 4" /> */}
    </Container>
  );
}
