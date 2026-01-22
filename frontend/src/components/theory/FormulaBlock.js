import 'katex/dist/katex.min.css';
import { BlockMath } from 'react-katex';
import { Box } from '@chakra-ui/react';

export default function FormulaBlock({ latex }) {
  return (
    <Box
      bg="gray.50"
      p={4}
      my={6}
      borderRadius="md"
      overflowX="auto"
    >
      <BlockMath math={latex} />
    </Box>
  );
}
