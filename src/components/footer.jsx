import { Box, Center, Image } from "@chakra-ui/react";
import React from "react";
import mafa from "../img/mafa.png";

export default function Footer() {
  return (
    <Box pb={{ base: 14, lg: 0 }} bottom={0}>
      <Center bg={"#0E103D"} color={"white"} p={5}>
        <Image src={mafa} h={"20px"} mx={2} /> 2025
      </Center>
    </Box>
  );
}
