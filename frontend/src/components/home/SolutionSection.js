"use client";

import { Box, Heading, Text, Stack, Divider } from "@chakra-ui/react";

export default function SolutionSection() {
  return (
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
          Data-Driven Mitigation Strategy
        </Text>

        <Heading color="green.900" fontSize={{ base: "2xl", md: "3xl" }}>
          Our Solution
        </Heading>

        <Divider borderColor="green.200" />

        {/* Intro */}
        <Text fontSize="lg" color="gray.700" lineHeight="tall">
          Stubble Vision addresses the pollution crisis by targeting one of its
          most influential and preventable contributors — agricultural residue
          burning in Punjab and Haryana. By identifying where, when, and how
          severely burning occurs, the system enables upstream intervention
          before pollutants accumulate over Delhi.
        </Text>

        {/* Point 1 */}
        <Heading fontSize="xl" color="gray.800">
          1. Reducing PM2.5 Transported to Delhi
        </Heading>

        <Text fontSize="lg" color="gray.700" lineHeight="tall">
          Crop residue burning releases massive quantities of fine particulate
          matter (PM2.5) capable of traveling hundreds of kilometers. When fewer
          agricultural fields are burned, less smoke enters the atmosphere and
          north-westerly winds carry lower pollutant concentrations toward
          Delhi.
        </Text>

        <Text fontSize="lg" color="gray.700" lineHeight="tall">
          <strong>Result:</strong> Baseline PM2.5 levels in Delhi decrease even
          before local urban emissions are added, leading to cleaner incoming
          air masses during winter.
        </Text>

        {/* Point 2 */}
        <Heading fontSize="xl" color="gray.800">
          2. Preventing Smog Formation in Winter
        </Heading>

        <Text fontSize="lg" color="gray.700" lineHeight="tall">
          Winter conditions in North India — low wind speeds, temperature
          inversion, and high humidity — make the atmosphere highly susceptible
          to smog formation. Smoke particles from stubble burning act as
          condensation nuclei, accelerating this process.
        </Text>

        <Text fontSize="lg" color="gray.700" lineHeight="tall">
          <strong>Result:</strong> Reducing burning limits smog initiation,
          slows down its formation, and shortens the duration of extreme
          pollution episodes, leading to fewer “severe AQI” days.
        </Text>

        {/* Point 3 */}
        <Heading fontSize="xl" color="gray.800">
          3. Breaking the Pollution Amplification Cycle
        </Heading>

        <Text fontSize="lg" color="gray.700" lineHeight="tall">
          Once dense smog forms, it suppresses sunlight, lowers surface
          temperatures, strengthens temperature inversion, and traps pollutants
          even more efficiently — creating a self-amplifying feedback loop.
        </Text>

        <Text fontSize="lg" color="gray.700" lineHeight="tall">
          <strong>Result:</strong> By cutting emissions early, smog formation is
          delayed or weakened, preventing this feedback loop from fully
          developing and allowing pollution levels to recover faster.
        </Text>

        {/* Point 4 */}
        <Heading fontSize="xl" color="gray.800">
          4. Reducing the Seasonal Pollution Spike
        </Heading>

        <Text fontSize="lg" color="gray.700" lineHeight="tall">
          Delhi’s air pollution load is additive in nature. While vehicular,
          construction, and industrial emissions remain relatively constant,
          stubble burning introduces a sudden and dominant seasonal spike during
          October–November.
        </Text>

        <Text fontSize="lg" color="gray.700" lineHeight="tall">
          <strong>Result:</strong> Removing this spike makes local control
          measures more effective, reduces the need for emergency responses,
          and shifts pollution levels from catastrophic to manageable.
        </Text>

        {/* Point 5 */}
        <Heading fontSize="xl" color="gray.800">
          5. Measurable Health and Visibility Benefits
        </Heading>

        <Text fontSize="lg" color="gray.700" lineHeight="tall">
          Lower PM2.5 concentrations directly translate into reduced respiratory
          and cardiovascular emergencies, improved lung development in
          children, better visibility, and fewer transportation disruptions.
        </Text>

        <Text fontSize="lg" color="gray.700" lineHeight="tall">
          <strong>Result:</strong> Even a 10–20% reduction in stubble burning has
          been shown to produce noticeable improvements in AQI during peak
          winter pollution periods.
        </Text>

        {/* Closing */}
        <Divider borderColor="green.200" />

        <Text fontSize="lg" color="gray.800" fontWeight="medium">
          By addressing a preventable, episodic, and high-impact source of
          pollution upstream, Stubble Vision enables more effective mitigation
          than downstream restrictions alone, benefiting millions of urban
          residents who are otherwise exposed without direct contribution.
        </Text>
      </Stack>
    </Box>
  );
}
