import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/react.svg";
import { ColorModeSwitch } from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

export const NavBar = () => {
  return (
    <HStack padding="10px">
      <Image src={logo} />
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};
