import { Flex, Link as ChakraLink, Text } from "@chakra-ui/react";
import React from "react";
import { Container } from "../components/Container";
import { CTA } from "../components/CTA";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import { Hero } from "../components/Hero";
import { Main } from "../components/Main";

const Index = () => (
  <Container height="100vh">
    <Hero />
    <Main>
      <Flex alignSelf="center">
        <Text fontSize="3xl" mr={8}>
          <ChakraLink href="/about" flexGrow={1} mr={2}>
            about
          </ChakraLink>
        </Text>
        <Text fontSize="3xl" mr={8}>
          <ChakraLink href="/dino" flexGrow={1} mr={2}>
            dino
          </ChakraLink>
        </Text>
        <Text fontSize="3xl">
          <ChakraLink href="/rps" flexGrow={1} mr={2}>
            rps
          </ChakraLink>
        </Text>
      </Flex>
    </Main>

    <DarkModeSwitch />

    <CTA />
  </Container>
);

export default Index;
