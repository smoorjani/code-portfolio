import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Button,
  Link as ChakraLink,
  Menu,
  MenuButton,
  MenuGroup,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import React from "react";

export const NavButton = () => {
  return (
    <Menu placement="auto">
      <MenuButton
        mt={2}
        px={4}
        py={2}
        transition="all 0.2s"
        borderRadius="md"
        // borderWidth="1px"
        _focus={{ outline: 0, boxShadow: "outline" }}
        as={Button}
      >
        <ChevronDownIcon />
      </MenuButton>
      <MenuList>
        <MenuItem>
          <ChakraLink href="/" flexGrow={1} mr={2}>
            Home
          </ChakraLink>
        </MenuItem>
        <MenuItem>
          <ChakraLink href="/about" flexGrow={1} mr={2}>
            About
          </ChakraLink>
        </MenuItem>
        <MenuGroup title="Games">
          <MenuItem>
            <ChakraLink href="/dino" flexGrow={1} mr={2}>
              Dino
            </ChakraLink>
          </MenuItem>
          <MenuItem>
            <ChakraLink href="/rps" flexGrow={1} mr={2}>
              RPS
            </ChakraLink>
          </MenuItem>
        </MenuGroup>
      </MenuList>
    </Menu>
  );
};
