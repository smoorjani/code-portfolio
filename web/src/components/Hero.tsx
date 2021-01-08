import { Flex, Heading } from "@chakra-ui/react";

interface HeroProps {
  title?: string;
  width?: number;
}

export const Hero: React.FC<HeroProps> = ({ title, width }) => (
  <Flex
    justifyContent="center"
    alignItems="center"
    height="100vh"
    width={width}
  >
    <Heading fontSize="10vw">{title}</Heading>
  </Flex>
);

Hero.defaultProps = {
  title: "samraj moorjani",
};
