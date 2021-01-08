import React from "react";
import { Container } from "../components/Container";
import { CTA } from "../components/CTA";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import { Hero } from "../components/Hero";
import { NavButton } from "../components/NavButton";

const RPS = () => (
  <Container height="100vh">
    <NavButton />
    <Hero title={"Work in Progress"} />
    <DarkModeSwitch />

    <CTA />
  </Container>
);

export default RPS;
