"use client";

import { motion } from "framer-motion";
import { Box } from "@chakra-ui/react";

const MotionBox = motion(Box);

export default function AnimatedSection({
  children,
  direction = "left", // "left" | "right"
}) {
  const offset = direction === "left" ? -100 : 100;

  return (
    <MotionBox
      initial={{ opacity: 0, x: offset }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </MotionBox>
  );
}
