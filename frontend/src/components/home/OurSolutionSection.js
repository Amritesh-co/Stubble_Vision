"use client";

import {
  Box,
  Heading,
  Text,
  Stack,
  SimpleGrid,
  HStack,
  Icon,
  Divider,
} from "@chakra-ui/react";
import { FiMap, FiActivity, FiTrendingUp } from "react-icons/fi";
import AnimatedSection from "@/components/common/AnimatedSection";

export default function OurSolutionSection() {
  return (
    <AnimatedSection direction="left">
      <Box py={24} px={{ base: 6, md: 20 }} bg="gray.50">
        <Stack
          spacing={10}
          maxW="1000px"
          mx="auto"
          borderLeft="4px solid"
          borderColor="green.600"
          pl={{ base: 4, md: 8 }}
        >
          {/* SECTION LABEL */}
          <Text
            textTransform="uppercase"
            letterSpacing="wide"
            fontWeight="semibold"
            color="green.700"
          >
            Data-Driven Mitigation
          </Text>

          <Heading color="green.900" fontSize={{ base: "2xl", md: "3xl" }}>
            Our Solution
          </Heading>

          <Divider borderColor="green.200" />

          {/* INTRO */}
          <Text fontSize="lg" color="gray.700" lineHeight="tall">
            Stubble Vision addresses agricultural air pollution at its source by
            integrating satellite-based fire detection with burn severity
            estimation. Rather than reacting to degraded air quality in urban
            regions, the system enables upstream monitoring and targeted
            intervention before pollutants accumulate over cities.
          </Text>

          {/* SOLUTION PILLARS */}
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
            
            {/* PILLAR 1 */}
            <Box bg="white" p={6} borderRadius="md" shadow="sm">
              <HStack spacing={3} mb={3}>
                <Icon as={FiMap} boxSize={6} color="green.600" />
                <Heading fontSize="md" color="green.800">
                  Fire Detection
                </Heading>
              </HStack>

              <Text color="gray.600" lineHeight="tall">
                Satellite fire products are used to identify agricultural
                burning events across Punjab and Haryana in near real time,
                capturing their spatial distribution and temporal frequency.
              </Text>
            </Box>

            {/* PILLAR 2 */}
            <Box bg="white" p={6} borderRadius="md" shadow="sm">
              <HStack spacing={3} mb={3}>
                <Icon as={FiActivity} boxSize={6} color="orange.500" />
                <Heading fontSize="md" color="orange.700">
                  Severity Estimation
                </Heading>
              </HStack>

              <Text color="gray.600" lineHeight="tall">
                Pre- and post-fire satellite imagery is analyzed using vegetation
                indices to estimate burn severity, distinguishing low-impact
                residue fires from high-intensity events.
              </Text>
            </Box>

            {/* PILLAR 3 */}
            <Box bg="white" p={6} borderRadius="md" shadow="sm">
              <HStack spacing={3} mb={3}>
                <Icon as={FiTrendingUp} boxSize={6} color="red.500" />
                <Heading fontSize="md" color="red.600">
                  Actionable Insights
                </Heading>
              </HStack>

              <Text color="gray.600" lineHeight="tall">
                Severity-weighted fire data is aggregated into interactive maps
                and dashboards, allowing stakeholders to identify hotspots,
                track trends, and assess mitigation effectiveness.
              </Text>
            </Box>

          </SimpleGrid>

          {/* CLOSING */}
          <Divider borderColor="green.200" />

          <Text fontSize="lg" color="gray.800" fontWeight="medium">
            By focusing on <strong>where fires occur</strong>,{" "}
            <strong>how severe they are</strong>, and{" "}
            <strong>when intervention is most effective</strong>, Stubble Vision
            transforms satellite observations into practical intelligence for
            reducing seasonal air pollution and protecting public health.
          </Text>
        </Stack>
      </Box>
    </AnimatedSection>
  );
}
