import { Box, Heading } from '@chakra-ui/react';

export default function TheorySection({ id, title, children }) {
  return (
    <Box id={id} scrollMarginTop="100px">
      <Heading
        as="h2"
        size="lg"
        mb={4}
        fontFamily="serif"
      >
        {title}
      </Heading>

      <Box
        fontSize="md"
        lineHeight="1.8"
        fontFamily="serif"
        color="gray.800"
      >
        {children}
      </Box>
    </Box>
  );
}
