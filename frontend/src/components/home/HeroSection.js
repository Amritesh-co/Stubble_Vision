"use client";

import { Box, Heading, Text, Button, Stack } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

export default function HeroSection() {
  return (
    <MotionBox
      minH="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bgGradient="linear(to-br, green.900, orange.700)"
      color="white"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Stack spacing={6} textAlign="center" maxW="900px" px={6}>
        <Heading fontSize={{ base: "3xl", md: "5xl" }} fontWeight="bold">
          Stubble Vision
        </Heading>

        <Text fontSize={{ base: "md", md: "xl" }} opacity={0.95}>
          Monitoring agricultural fire activity and assessing environmental
          impact using satellite imagery and artificial intelligence.
        </Text>

        <Text fontSize={{ base: "sm", md: "lg" }} opacity={0.8}>
          Bridging agriculture, air quality, and climate science.
        </Text>

        <Button size="lg" colorScheme="orange">
          Explore Insights
        </Button>
      </Stack>
    </MotionBox>
  );
}
