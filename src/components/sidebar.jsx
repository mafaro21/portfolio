import React from "react";

import {
  Box,
  VStack,
  Tooltip,
  Image,
  HStack,
  Text,
  Button,
} from "@chakra-ui/react";

import coding from "../img/coding.png";
import briefcase from "../img/briefcase.png";
import service from "../img/service.png";
import home from "../img/home.png";

import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <>
      <Box
        p={9}
        mr={4}
        position={"relative"}
        display={{ base: "none", md: "none", lg: "block" }}
      >
        {/* New Portfolio Announcement */}
        <Box
          position="fixed"
          bottom="30px"
          left="50%"
          transform="translateX(-50%)"
          zIndex={101}
          w="calc(100% - 40px)"
          maxW="420px"
          color="white"
          borderRadius="12px"
          px={4}
          py={3}
          boxShadow="0 6px 24px rgba(0,0,0,0.18)"
          background="linear-gradient(110deg, #a35a2a 0%, #7d421f 55%, #3a2418 100%)"
        >
          <HStack justify="space-between" spacing={3}>
            <Text fontSize="xs" fontWeight="medium" lineHeight="short" flex="1">
              A new version of my portfolio is here
            </Text>

            <Button
              as={Link}
              to="https://mafaro-dev.vercel.app"
              size="xs"
              bg="#f4c27a"
              color="#3a2418"
              fontWeight="bold"
              borderRadius="7px"
              px={3}
              flexShrink={0}
              _hover={{
                bg: "#ffd99f",
              }}
            >
              Check it out!
            </Button>
          </HStack>
        </Box>

        {/* Sidebar Navigation */}
        <VStack position={"fixed"} mt={"30vh"} spacing={"40px"}>
          <Tooltip label="Home">
            <Link to={"/"}>
              <Image
                src={home}
                h={"30px"}
                _hover={{
                  backgroundColor: "#35ffa8",
                  padding: "1px",
                  borderRadius: "10px",
                }}
                borderBottom={currentPath === "/" ? "#35ffa8 3px solid" : null}
              />
            </Link>
          </Tooltip>

          <Tooltip label="Personal Portfolio">
            <Link to={"/personal-portfolio"}>
              <Image
                src={coding}
                h={"30px"}
                _hover={{
                  backgroundColor: "#35ffa8",
                  padding: "1px",
                  borderRadius: "10px",
                }}
                borderBottom={
                  currentPath === "/personal-portfolio"
                    ? "#35ffa8 3px solid"
                    : null
                }
              />
            </Link>
          </Tooltip>

          <Tooltip label="Professional Projects">
            <Link to={"/professional"}>
              <Image
                src={briefcase}
                h={"30px"}
                _hover={{
                  backgroundColor: "#35ffa8",
                  padding: "1px",
                  borderRadius: "10px",
                }}
                borderBottom={
                  currentPath === "/professional" ? "#35ffa8 3px solid" : null
                }
              />
            </Link>
          </Tooltip>

          <Tooltip label="Services">
            <Link to={"/services"}>
              <Image
                src={service}
                h={"30px"}
                _hover={{
                  backgroundColor: "#35ffa8",
                  padding: "1px",
                  borderRadius: "10px",
                }}
                borderBottom={
                  currentPath === "/services" ? "#35ffa8 3px solid" : null
                }
              />
            </Link>
          </Tooltip>
        </VStack>
      </Box>
    </>
  );
}
