import { Box, OrderedList, ListItem } from '@chakra-ui/react';

export default function AlgorithmBlock({ steps }) {
  return (
    <Box
      bg="gray.100"
      p={5}
      my={6}
      borderRadius="md"
      fontFamily="mono"
    >
      <OrderedList spacing={2}>
        {steps.map((step, index) => (
          <ListItem key={index}>{step}</ListItem>
        ))}
      </OrderedList>
    </Box>
  );
}
