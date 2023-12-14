import React from "react";
import { Image } from "@chakra-ui/react"
// Chakra imports
import { Flex, useColorModeValue } from "@chakra-ui/react";

// Custom components
import { HorizonLogo } from "components/icons/Icons";
import { HSeparator } from "components/separator/Separator";

export function SidebarBrand() {
  //   Chakra color mode
  let logoColor = useColorModeValue("navy.700", "white");

  return (
    <Flex align='center' direction='column'>
      <Image
        borderRadius="full"
        boxSize="150px"
        src="https://yt3.googleusercontent.com/ytc/APkrFKZ9Y_zjowYjJnoFpHDxC2AUyCXsnPCImaQJUZYv=s900-c-k-c0x00ffffff-no-rj"
        alt="Jdu logo"
      />

    </Flex>
  );
}

export default SidebarBrand;
