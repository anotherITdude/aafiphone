import Image from "@/node_modules/next/image";
import Logo from "../public/logo.svg";
import Container from "@/components/Container";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <Container>
      <Navbar />
      <Hero title="AAF Iphone EN" />
      <Hero title="Section 2" />
      <Hero title="Section 3" />
      <Hero title="Section 4" />
      <Hero title="Section 4" />
      <Hero title="Section 4" />
    </Container>
  );
}
