"use client";

import { Box } from "@chakra-ui/react";
import { HeroSection, ProblemSection } from "@/components/home";
import WhyConcerningSection from "@/components/home/WhyConcerningSection";
import SolutionSection from "@/components/home/SolutionSection";
import OurSolutionSection from "@/components/home/OurSolutionSection";

export default function Home() {
  return (
    <Box>
      <HeroSection />
      <ProblemSection />
      <WhyConcerningSection />
      <OurSolutionSection />
    </Box>
  );
}
