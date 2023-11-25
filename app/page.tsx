import Container from "@/components/Container";
import Hero from "@/components/Hero";
import LuckyWinner from "@/components/LuckyWinner";
import RegisterSection from "@/components/RegisterSection";

export default function Home() {
  return (
    <Container>
      {/* <Navbar /> */}
      <Hero title="AAF Iphone EN" />
      <LuckyWinner />
      {/* <Hero title="Section 2" />
      <Hero title="Section 3" />
      <Hero title="Section 4" /> */}
      {/* <RegisterSection title="" /> */}
      {/* <Hero title="Section 4" /> */}
    </Container>
  );
}
