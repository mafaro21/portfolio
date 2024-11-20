import {
  Box,
  Text,
  SimpleGrid,
  Center,
  Container,
  Grid,
  GridItem,
  Flex,
  Image,
  UnorderedList,
  ListItem,
  Divider,
  HStack,
  Tag,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { React, useState, useRef } from "react";
import real from "../img/real1.png";
import twitclone from "../img/twitclone.png";
import py from "../img/py.png";
import sole from "../img/sole.png";
import nssa from "../img/nssa.png";
import wedemy from "../img/wedemy.png";
import ess from "../img/ess.png";
import help from "../img/help.png";

import github from "../img/svg/github.svg";
import linkedin from "../img/svg/linkedin.svg";
import email from "../img/svg/email.svg";
import zustand from "../img/svg/zustand.svg";
import { Link, useNavigate } from "react-router-dom";

import reactLogo from "../img/png/react.png";
import html from "../img/png/html.png";
import postgre from "../img/png/postgre.png";
import python from "../img/png/python.png";
import stripe from "../img/png/stripe.png";
import mysql from "../img/png/mysql1.png";
import php from "../img/png/php.png";
import css from "../img/png/css.png";
import typescript from "../img/png/typescript.png";
import vuejs from "../img/png/vuejs.png";
import nodejs from "../img/png/nodejs.png";
import redux from "../img/png/redux.png";
import mongodb from "../img/png/mongodb.png";
import expressjs from "../img/png/expressjs.png";
import Sidebar from "../components/sidebar";
import Bottombar from "../components/bottombar";
import Footer from "../components/footer";
import mafa from "../img/mafa.png";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

export default function personalProjects() {
  const ref = useRef(null);
  const [selectedCard, setSelectedCard] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  const proj = [
    {
      id: 1,
      title: "Twitclone",
      desc: "TwitClone is a social media web application inspired by Twitter. It is designed to help people connect with friends and family, allowing users to share updates and stay informed about each other's lives.",
      stack: reactLogo,
      stack2: expressjs,
      stack3: nodejs,
      stack4: mongodb,
      features:
        "real-time interactions such as following/unfollowing, tweeting, liking, retweeting",
      img: twitclone,
    },
    {
      id: 2,
      title: "Real Estate",
      desc: "RealEstate is an e-commerce web system designed to help users find houses and apartments for rent or sale. It provides a user-friendly platform for browsing and searching real estate listings, catering to both potential buyers and renters.",
      stack: html,
      stack2: css,
      stack3: php,
      stack4: mysql,
      stack5: stripe,
      features: "adding to cart, contacting agents, posting comments ",
      img: real,
    },
    {
      id: 3,
      title: "filesort",
      desc: "filesort is a versatile program designed to help users organize their digital files efficiently. It automates the process of sorting files based on various criteria, reducing clutter and enhancing productivity.",
      stack: python,
      features:
        "sorting files based on extension & sorting videos based on orientation",
      img: py,
    },
    {
      id: 4,
      title: "Nssa",
      desc: "Nssa is a powerful backend tool designed to compare two Excel files and consolidate their differences into separate, downloadable files for easy analysis and reporting. This program is ideal for users who need to identify and manage discrepancies between datasets efficiently. By producing three distinct files, Nssa ensures comprehensive and organized comparison results, facilitating streamlined data management and decision-making processes.",
      stack: nodejs,
      stack2: expressjs,
      features:
        "automatically consolidate differences into separate excel files",
      img: nssa,
      height: "70px",
      smallHeight: "50px",
    },
    {
      id: 5,
      title: "soleXchange",
      desc: "soleXchange is a modern e-commerce platform dedicated to offering a wide variety of footwear for men, women, and children. It aims to provide customers with an easy and enjoyable online shopping experience, featuring the latest trends and timeless classics.",
      stack: reactLogo,
      stack2: expressjs,
      stack3: nodejs,
      stack4: postgre,
      stack5: redux,
      features: "On Hold",
      img: sole,
    },
    {
      id: 6,
      title: "EmployeeSelfService",
      desc: "EmployeeSelfService is a self-service platform designed for employees, offering easy access to manage personal information, view pay slips, request time off, and handle other HR-related tasks efficiently.",
      stack: reactLogo,
      stack2: expressjs,
      stack3: nodejs,
      stack4: redux,
      stack5: mysql,
      features: "apply for leave/ loan, WIP",
      img: ess,
    },
    {
      id: 7,
      title: "HelpDesk",
      desc: "Helpdesk is an essential system designed to streamline internal support processes within organizations, enabling employees to log support requests, commonly known as tickets. This system enhances communication between staff and administrators, ensuring that issues are resolved efficiently and effectively.",
      stack: reactLogo,
      stack2: nodejs,
      stack3: expressjs,
      stack4: zustand,
      stack5: mysql,
      features: "Logging tickets",
      img: help,
    },
    {
      id: 8,
      title: "Wedemy",
      desc: "Wedemy is an e-learning platform modeled after Udemy.",
      stack: vuejs,
      stack2: typescript,
      features: "On Hold",
      img: wedemy,
    },
  ];

  const handleExpand = (item) => {
    setSelectedCard(item);
    onOpen(); // Opens the modal
  };

  return (
    <>
      <Box minH={"100vh"} bg={{ base: "#e9ffff", lg: "white" }}>
        <Bottombar />
        <Container maxW={{ base: "100vw", lg: "1200px" }}>
          <Flex>
            <Sidebar />

            <Box
              bg={"#e9ffff"}
              p={{ base: 0, lg: 9 }}
              border={{ base: "none", lg: "1px solid #0f7171" }}
              minH={"100vh"}
              mb={{ base: 0, md: 3 }}
              mt={{ base: 0, md: 3 }}
              borderRadius={{ base: "0", md: "10px" }}
            >
              <Box pt={5}>
                <ArrowBackIcon
                  w={6}
                  h={6}
                  _hover={{ backgroundColor: "#35FF69", borderRadius: "15px" }}
                  onClick={goBack}
                />
              </Box>
              <Center pt={2}>
                <Text fontSize={"xl"} fontWeight={"600"} as={"u"}>
                  Personal Portfolio
                </Text>
              </Center>

              {proj.map((item, index) => (
                <Box mt={5} mb={{ base: 2, lg: 0 }}>
                  <Text color={"black"} fontSize={"xl"} as={"b"}>
                    {item.title}
                  </Text>
                  <Flex
                    fontSize={"18px"}
                    mt={2}
                    direction={{ base: "column", md: "row" }}
                  >
                    <Box
                      w={{ base: "100%", md: "60%" }}
                      borderRadius={"14px"}
                      h={{ base: item.smallHeight, md: item.height }}
                      onClick={() => handleExpand(item)}
                      // boxShadow={"3px 3px #0f7171"}
                      cursor="pointer"
                    >
                      <LazyLoadImage
                        loading="lazy"
                        src={item.img}
                        objectFit="cover"
                        placeholderSrc={mafa}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          borderRadius: "14px",
                        }}
                        effect="blur"
                      />
                    </Box>
                    <Box
                      w={{ base: "100%", md: "50%" }}
                      pl={{ base: "0", md: "5" }}
                      mt={{ base: "2", md: "0" }}
                    >
                      <UnorderedList>
                        <ListItem color={"black"}>{item.desc}</ListItem>
                        <ListItem mt={3} color={"black"}>
                          Features: {item.features}
                        </ListItem>
                      </UnorderedList>

                      <HStack spacing={1} mt={2} ml={4}>
                        <Image src={item.stack} height={"30px"} />
                        {item.stack2 && (
                          <Image src={item.stack2} height={"30px"} />
                        )}
                        {item.stack3 && (
                          <Image src={item.stack3} height={"30px"} />
                        )}
                        {item.stack4 && (
                          <Image src={item.stack4} height={"30px"} />
                        )}
                        {item.stack5 && (
                          <Image src={item.stack5} height={"30px"} />
                        )}
                      </HStack>
                    </Box>
                  </Flex>
                  <Divider orientation="horizontal" mt={8} color={"black"} />
                </Box>
              ))}

              {selectedCard && (
                <Modal
                  isOpen={isOpen}
                  onClose={onClose}
                  isCentered
                  borderRadius="10px"
                >
                  <ModalOverlay />
                  <ModalContent
                    borderRadius="10px"
                    border={"1px solid #0f7171"}
                    maxWidth={{ base: "100vw", md: "90%" }}
                  >
                    <ModalCloseButton />
                    <ModalBody p={0} bg={"#b1e1e1"} borderRadius="10px">
                      <Box p={5}>
                        <Center>
                          <Text fontSize="3xl" as="b">
                            {selectedCard.title}
                          </Text>
                        </Center>
                        <Flex direction={{ base: "column", lg: "row" }} mt={5}>
                          <Image
                            src={selectedCard.img}
                            w="100%"
                            borderRadius="10px"
                            height={{
                              base: selectedCard.smallHeight,
                              md: selectedCard.height,
                            }}
                            border={"1px solid grey"}
                          />
                          <Box w="100%" pl={{ base: 0, md: 5 }}>
                            <UnorderedList mt={{ base: 5, md: 1 }}>
                              <ListItem fontSize={{ base: "18px", md: "20px" }}>
                                {selectedCard.desc}
                              </ListItem>
                              <ListItem
                                mt={3}
                                fontSize={{ base: "16px", md: "18px" }}
                              >
                                Features: {selectedCard.features}
                              </ListItem>
                            </UnorderedList>

                            <HStack
                              spacing={1}
                              mt={5}
                              justifyContent={{ base: "center", md: "left" }}
                            >
                              <Image
                                src={selectedCard.stack}
                                height={{ base: "40px", md: "50px" }}
                              />
                              {selectedCard.stack2 && (
                                <Image
                                  src={selectedCard.stack2}
                                  height={{ base: "40px", md: "50px" }}
                                />
                              )}
                              {selectedCard.stack3 && (
                                <Image
                                  src={selectedCard.stack3}
                                  height={{ base: "40px", md: "50px" }}
                                />
                              )}
                              {selectedCard.stack4 && (
                                <Image
                                  src={selectedCard.stack4}
                                  height={{ base: "40px", md: "50px" }}
                                />
                              )}
                              {selectedCard.stack5 && (
                                <Image
                                  src={selectedCard.stack5}
                                  height={{ base: "40px", md: "50px" }}
                                />
                              )}
                            </HStack>
                          </Box>
                        </Flex>
                      </Box>
                    </ModalBody>
                  </ModalContent>
                </Modal>
              )}
            </Box>
          </Flex>
        </Container>
      </Box>

      <Footer />
    </>
  );
}
