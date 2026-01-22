'use client';

import { motion } from 'framer-motion';
import { Box } from '@chakra-ui/react';

const MotionBox = motion(Box);

export default function SlideInSection({ children }) {
  return (
    <MotionBox
      initial={{ opacity: 0, x: -60 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.6,
        ease: 'easeOut',
      }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </MotionBox>
  );
}
