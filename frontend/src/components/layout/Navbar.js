"use client";

import NextLink from "next/link";
import {
  Box,
  Flex,
  Heading,
  HStack,
  Link,
  Button,
} from "@chakra-ui/react";

export default function Navbar() {
  return (
    <Box
      as="nav"
      w="100%"
      px={{ base: 6, md: 20 }}
      py={4}
      borderBottom="1px solid"
      borderColor="gray.200"
      bg="white"
      position="sticky"
      top={0}
      zIndex={1000}
    >
      <Flex align="center" justify="space-between">

        {/* LEFT: PROJECT NAME */}
        <Heading size="md" color="green.700" fontWeight="bold">
          <Link as={NextLink} href="/" _hover={{ textDecoration: "none" }}>
            Stubble Vision
          </Link>
        </Heading>

        {/* RIGHT: NAV LINKS */}
        <HStack spacing={8}>
          <Link as={NextLink} href="/">
            Home
          </Link>

          <Link as={NextLink} href="/dashboard">
            Dashboard
          </Link>

          <Link as={NextLink} href="/map">
            Map
          </Link>

          <Link as={NextLink} href="/theory">
            Theory
          </Link>

          <Button
            as={NextLink}
            href="/team"
            size="sm"
            colorScheme="green"
          >
            Meet the Team
          </Button>
        </HStack>

      </Flex>
    </Box>
  );
}
