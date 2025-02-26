import React from "react";
import { Box, VStack, Tooltip, Image } from "@chakra-ui/react";
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
        <VStack position={"fixed"} mt={"30vh"} spacing={"40px"}>
          <Tooltip label="Home">
            <Link to={"/"}>
              <Image
                src={home}
                h={"30px"}
                _hover={{
                  backgroundColor: "#35FF69",
                  padding: "1px",
                  borderRadius: "10px",
                }}
                // borderRadius={"10px"}
                borderBottom={currentPath === "/" ? "#35FF69 3px solid" : null}
              />
            </Link>
          </Tooltip>

          <Tooltip label="Personal Portfolio">
            <Link to={"/personal-portfolio"}>
              <Image
                src={coding}
                h={"30px"}
                _hover={{
                  backgroundColor: "#35FF69",
                  padding: "1px",
                  borderRadius: "10px",
                }}
                borderBottom={
                  currentPath === "/personal-portfolio"
                    ? "#35FF69 3px solid"
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
                  backgroundColor: "#35FF69",
                  padding: "1px",
                  borderRadius: "10px",
                }}
                borderBottom={
                  currentPath === "/professional" ? "#35FF69 3px solid" : null
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
                  backgroundColor: "#35FF69",
                  padding: "1px",
                  borderRadius: "10px",
                }}
                borderBottom={
                  currentPath === "/about" ? "#35FF69 3px solid" : null
                }
              />
            </Link>
          </Tooltip>
        </VStack>
      </Box>
    </>
  );
}
