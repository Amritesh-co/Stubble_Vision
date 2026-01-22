"use client";

import { Box, Heading, Text, Stack, Divider } from "@chakra-ui/react";

export default function WhyConcerningSection() {
  return (
    <Box py={24} px={{ base: 6, md: 20 }} bg="white">
      <Stack
        spacing={8}
        maxW="900px"
        mx="auto"
        borderLeft="4px solid"
        borderColor="orange.500"
        pl={{ base: 4, md: 8 }}
      >
        {/* Section Label */}
        <Text
          textTransform="uppercase"
          letterSpacing="wide"
          fontWeight="semibold"
          color="orange.600"
        >
          Regional Pollution & Urban Impact
        </Text>

        <Heading color="orange.800" fontSize={{ base: "2xl", md: "3xl" }}>
          Why This Is Concerning
        </Heading>

        <Divider borderColor="orange.200" />

        {/* Intro */}
        <Text fontSize="lg" color="gray.700" lineHeight="tall">
          Every year during <strong>October–November</strong>, large-scale
          stubble burning is carried out across agricultural regions of
          <strong> Punjab and Haryana</strong> following the paddy harvest.
          These fires release enormous quantities of{" "}
          <strong>PM2.5, PM10, carbon monoxide, nitrogen oxides,</strong> and{" "}
          <strong>black carbon</strong> into the atmosphere.
        </Text>

        {/* Wind Pattern */}
        <Heading fontSize="xl" color="gray.800">
          1. Role of Wind Patterns
        </Heading>

        <Text fontSize="lg" color="gray.700" lineHeight="tall">
          During early winter, prevailing <strong>north-westerly winds</strong>{" "}
          flow from agricultural regions in Pakistan, Punjab, and Haryana
          directly towards <strong>Delhi–NCR</strong>. These winds act as a
          conveyor belt, transporting dense smoke plumes over hundreds of
          kilometers.
        </Text>

        <Text fontSize="lg" color="gray.700" lineHeight="tall">
          As a result, pollutants generated in rural agricultural fields
          accumulate over Delhi within a matter of days, despite the city being
          geographically distant from the source of emissions.
        </Text>

        {/* Geography */}
        <Heading fontSize="xl" color="gray.800">
          2. Geographic Disadvantage of Delhi
        </Heading>

        <Text fontSize="lg" color="gray.700" lineHeight="tall">
          Delhi lies within the <strong>Indo-Gangetic Plain</strong> and is
          partially surrounded by the <strong>Aravalli range</strong> to the
          south-west, with dense urban sprawl and flat terrain on other sides.
        </Text>

        <Text fontSize="lg" color="gray.700" lineHeight="tall">
          This creates a bowl-like geographic effect where air circulation slows
          down, pollutants fail to disperse efficiently, and smoke becomes
          trapped close to the surface.
        </Text>

        {/* Meteorology */}
        <Heading fontSize="xl" color="gray.800">
          3. Meteorological Conditions
        </Heading>

        <Text fontSize="lg" color="gray.700" lineHeight="tall">
          Winter meteorological conditions further intensify the pollution
          crisis. <strong>Temperature inversion</strong> traps cold air near the
          ground, preventing vertical dispersion of pollutants.
        </Text>

        <Text fontSize="lg" color="gray.700" lineHeight="tall">
          Combined with low wind speeds and high humidity, smoke particles
          transform into persistent <strong>dense smog</strong>, causing
          pollution levels to spike even if emission rates remain unchanged.
        </Text>

        {/* Cumulative Impact */}
        <Heading fontSize="xl" color="gray.800">
          4. Cumulative Impact on Delhi
        </Heading>

        <Text fontSize="lg" color="gray.700" lineHeight="tall">
          While stubble burning is not the sole contributor to air pollution, it
          acts as a critical trigger by combining with urban sources such as
          vehicular emissions, construction dust, industrial activity, and
          seasonal firecracker usage.
        </Text>

        <Text fontSize="lg" color="gray.700" lineHeight="tall">
          This cumulative effect frequently pushes Delhi’s Air Quality Index
          (AQI) into the <strong>“Severe”</strong> category, leading to
          respiratory illnesses, reduced visibility, and long-term public
          health risks for millions of residents.
        </Text>

        {/* Final Emphasis */}
        <Divider borderColor="orange.200" />

        <Text fontSize="lg" color="gray.800" fontWeight="medium">
          The pollution source is regional, but the impact is urban and highly
          concentrated. Its annual recurrence highlights a systemic monitoring
          and mitigation failure — one that demands data-driven, region-aware
          solutions.
        </Text>
      </Stack>
    </Box>
  );
}
