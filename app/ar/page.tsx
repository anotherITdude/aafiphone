import Container from "@/components/Container";
import Hero from "@/components/Hero";
import HowToEnter from "@/components/HowToEnter";
import LuckyWinner from "@/components/LuckyWinner";
import RegisterSection from "@/components/RegisterSection";
import WinIphone from "@/components/WinIphone";
import Terms from "@/components/Terms";

export default function Home() {
  return (
    <Container>
      <Hero />
      <LuckyWinner />
      <WinIphone />
      <HowToEnter />
      <RegisterSection />
      <Terms />
    </Container>
  );
}
