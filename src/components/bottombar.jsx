import { Box, HStack, Image } from "@chakra-ui/react";
import React from "react";
import coding from "../img/coding.png";
import briefcase from "../img/briefcase.png";
import service from "../img/service.png";
import home from "../img/home.png";
import { Link, useLocation } from "react-router-dom";
import Footer from "./footer";

export default function Bottombar() {
  const location = useLocation();

  const currentPath = location.pathname;

  return (
    <>
      <Box
        position={"relative"}
        zIndex={100}
        display={{ base: "block", md: "block", lg: "none" }}
      >
        <HStack
          position={"fixed"}
          spacing={"65"}
          bottom={0}
          p={4}
          backgroundColor={"white"}
          w={"100vw"}
          justify={"center"}
          borderTop={"grey solid 1px"}
        >
          <Box>
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
          </Box>

          <Box>
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
          </Box>

          {/* <Box>
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
          </Box> */}

          <Box>
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
                  currentPath === "/services" ? "#35FF69 3px solid" : null
                }
              />
            </Link>
          </Box>
        </HStack>
        {/* </Center> */}
      </Box>
    </>
  );
}
