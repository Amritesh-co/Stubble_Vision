"use client";

import { Box, Heading, Text, Stack, Divider } from "@chakra-ui/react";
import AnimatedSection from "@/components/common/AnimatedSection";


export default function ProblemSection() {
  return (
    
    <AnimatedSection direction="left">
      <Box py={24} px={{ base: 6, md: 20 }} bg="gray.50">
      <Stack
        spacing={8}
        maxW="900px"
        mx="auto"
        borderLeft="4px solid"
        borderColor="green.600"
        pl={{ base: 4, md: 8 }}
      >
        {/* Section Label */}
        <Text
          textTransform="uppercase"
          letterSpacing="wide"
          fontWeight="semibold"
          color="green.700"
        >
          Environmental Challenge
        </Text>

        <Heading color="green.900" fontSize={{ base: "2xl", md: "3xl" }}>
          The Problem
        </Heading>

        <Divider borderColor="green.200" />

        <Text fontSize="lg" color="gray.700" lineHeight="tall">
          Agricultural <strong>stubble burning</strong> is a widespread
          post-harvest practice, particularly in regions with intensive crop
          cycles. Farmers often resort to burning crop residue to quickly clear
          fields for the next sowing season, unintentionally triggering
          large-scale fire events.
        </Text>

        <Text fontSize="lg" color="gray.700" lineHeight="tall">
          These fires release significant amounts of{" "}
          <strong>smoke, carbon dioxide, and fine particulate matter (PM2.5)</strong>{" "}
          into the atmosphere, contributing to severe air pollution, reduced
          visibility, respiratory illnesses, and long-term environmental
          degradation.
        </Text>

        <Text fontSize="lg" color="gray.700" lineHeight="tall">
          Although satellite-based systems can reliably{" "}
          <strong>detect fire occurrences</strong>, most existing solutions stop
          at detection alone. They fail to measure how intense or spatially
          damaging these fires are — information that is critical for assessing
          real environmental impact.
        </Text>

        <Text fontSize="lg" color="gray.700" lineHeight="tall">
          The absence of <strong>burn severity estimation</strong> limits the
          ability of environmental agencies, policymakers, and agricultural
          planners to take informed action, enforce regulations, and design
          sustainable farming and pollution mitigation strategies.
        </Text>
      </Stack>
    </Box>
    </AnimatedSection>

  );
}
