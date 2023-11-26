import Container from "@/components/Container";
import Hero from "@/components/Hero";
import HowToEnter from "@/components/HowToEnter";
import LuckyWinner from "@/components/LuckyWinner";
import RegisterSection from "@/components/RegisterSection";
import WinIphone from "@/components/WinIphone";

export default function Home() {
  return (
    <Container>
      <Hero title="AAF Iphone EN" />
      <LuckyWinner />
      <WinIphone />
      <HowToEnter />
      <RegisterSection title="" />
    </Container>
  );
}
