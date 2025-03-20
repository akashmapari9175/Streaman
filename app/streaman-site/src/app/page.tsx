// import Image from "next/image";
import Hero from "@/components/LandingPage/Hero";
import Features from "@/components/LandingPage/Features";
import ScreenshotDisplay from "@/components/LandingPage/ScreenShotsDisplay";
import GitCollaboration from "@/components/LandingPage/GitCollaboration";
import TrustedBy from "@/components/LandingPage/TrustedBy";
import Testimonials from "@/components/LandingPage/Testimonials";
import FAQ from "@/components/LandingPage/FAQ";

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <ScreenshotDisplay src="/Screenshot.png" alt="Bruno API Client UI" />
      <GitCollaboration />
      <TrustedBy />
      <Testimonials />
      <FAQ />
    </main>
  );
}
