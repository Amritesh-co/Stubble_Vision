import { Box, Text } from '@chakra-ui/react';

export default function DefinitionBox({ term, children }) {
  return (
    <Box
      bg="green.50"
      borderLeft="4px solid"
      borderColor="green.400"
      px={4}
      py={3}
      my={4}
    >
      <Text fontSize="sm">
        <strong>{term}:</strong> {children}
      </Text>
    </Box>
  );
}
