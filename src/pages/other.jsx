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
  Button,
  VStack,
  Tooltip,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { React, useState, useRef } from "react";
import privacycure from "../img/privacycure.bmp";
import twitclone from "../img/twitclone.png";
import mafa from "../img/mafa.png";
import coding from "../img/coding.png";
import briefcase from "../img/briefcase.png";
import user from "../img/user.png";
import home from "../img/home.png";

import github from "../img/svg/github.svg";
import linkedin from "../img/svg/linkedin.svg";
import email from "../img/svg/email.svg";
import zustand from "../img/svg/zustand.svg";
import { Link } from "react-router-dom";

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
import flask from "../img/png/flask.png";

import Sidebar from "../components/sidebar";
import Bottombar from "../components/bottombar";
import Footer from "../components/footer";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

export default function Other() {
  const ref = useRef(null);
  const [selectedCard, setSelectedCard] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const proj = [
    {
      id: 1,
      title: "Privacy Cure",
      desc: "Privacy Cure is a website dedicated to supporting Data Protection Officers (DPOs) and privacy professionals. The website provides in-depth resources, tools, and insights to help DPOs manage data compliance, stay updated on regulatory changes, and adopt best practices in data protection.",
      link: "https://privacycure.com",
      stack: html,
      stack2: css,
      stack3: nodejs,
      stack4: flask,
      features:
        "downloading the data protection act and the regulations, processing and sending emails when potential client fill in the contact form",
      img: privacycure,
      height: "300px",
    },
  ];

  const handleExpand = (item) => {
    setSelectedCard(item);
    onOpen(); // Opens the modal
  };

  const settings = {
    dots: true, // Show dots for navigation
    infinite: true, // Infinite looping
    speed: 500, // Transition speed
    slidesToShow: 1, // Number of slides to show
    slidesToScroll: 1, // Number of slides to scroll
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
              <Center mt={5}>
                <Image src={mafa} h={"60px"} mx={2} />
              </Center>

              <Flex justifyContent={"space-between"}>
                <Box px={3} pt={5}>
                  <Text fontWeight={"700"} fontSize={"2xl"}>
                    Mafaro Mushonga
                  </Text>
                  <Text fontWeight={"700"} fontSize={"xl"} mt={"2"}>
                    Web Developer
                  </Text>
                  <Text fontWeight={"700"} fontSize={"xl"}>
                    Data Protection Officer
                  </Text>
                </Box>

                <Box>
                  <Flex px={3} pt={5}>
                    <Link to={"https://github.com/mafaro21"} target="_blank">
                      <Image
                        src={github}
                        height={{ base: "30px", md: "36px" }}
                        mr={3}
                        _hover={{
                          boxShadow: "0px 0px 10px #35FF69",
                          borderRadius: "10px",
                        }}
                      />
                    </Link>
                    <Link to={"mailto:mafaro2105@gmail.com"} target="_blank">
                      <Image
                        src={email}
                        height={{ base: "34px", md: "43px" }}
                        mr={3}
                        _hover={{
                          boxShadow: "0px 0px 10px #35FF69",
                          borderRadius: "10px",
                        }}
                      />
                    </Link>

                    <Link
                      to={"https://linkedin.com/in/mafaro-mushonga-b8a68a231"}
                      target="_blank"
                    >
                      <Image
                        src={linkedin}
                        height={{ base: "34px", md: "38px" }}
                        _hover={{
                          boxShadow: "0px 0px 10px #35FF69",
                          borderRadius: "10px",
                        }}
                      />
                    </Link>
                  </Flex>
                </Box>
              </Flex>

              <Box mt={6} px={3}>
                <Text fontSize={{ base: "md", lg: "lg" }}>
                  Hi I'm Mafaro, a dedicated web developer and certified &
                  registered data protection officer based in Harare, Zimbabwe
                  specializing in front-end development. My expertise lies in
                  building responsive web applications using JavaScript, with a
                  strong focus on React and Node. Additionally, I have
                  experience working with cloud technologies, particularly
                  Microsoft Azure.
                </Text>
              </Box>

              <Box mb={5}>
                {/* <Center pt={7}>
                  <Text fontSize={"xl"} fontWeight={"600"} as={"u"}>
                    Professional Projects / Gigs
                  </Text>
                </Center>

                {proj.map((item, index) => (
                  <Box mt={5}>
                    <Text
                      color={"black"}
                      fontSize={"xl"}
                      as={"b"}
                      _hover={{ color: "green" }}
                    >
                      <Link to={item.link} target="_blank">
                        {item.title}
                        <ExternalLinkIcon ml={2} mb={1} />
                      </Link>
                    </Text>
                    <Flex
                      fontSize={"18px"}
                      mt={2}
                      direction={{ base: "column", md: "row" }}
                    >
                      <Image
                        src={item.img}
                        w={{ base: "100%", md: "60%" }}
                        borderRadius={"14px"}
                        h={{ base: item.smallHeight, md: item.height }}
                        onClick={() => handleExpand(item)}
                        boxShadow={"3px 3px #0f7171"}
                        cursor="pointer"
                      />
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
                ))} */}

                <Center pt={7}>
                  <Text fontSize={"xl"} fontWeight={"600"} as={"u"}>
                    Personal Portfolio
                  </Text>
                </Center>

                <Box mt={5}>
                  <Text color={"black"} fontSize={"xl"} as={"b"}>
                    Twitclone
                  </Text>
                  <Flex
                    fontSize={"18px"}
                    mt={2}
                    direction={{ base: "column", md: "row" }}
                  >
                    <Box
                      src={twitclone}
                      w={{ base: "100%", md: "60%" }}
                      borderRadius={"14px"}
                      // boxShadow={"3px 3px #0f7171"}
                    >
                      <LazyLoadImage
                        loading="lazy"
                        src={twitclone}
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
                        <ListItem color={"black"}>
                          TwitClone is a social media web application inspired
                          by Twitter. It is designed to help people connect with
                          friends and family, allowing users to share updates
                          and stay informed about each other's lives.
                        </ListItem>
                        <ListItem mt={3} color={"black"}>
                          Features: real-time interactions such as
                          following/unfollowing, tweeting, liking, retweeting
                        </ListItem>
                      </UnorderedList>

                      <HStack spacing={1} mt={2} ml={4}>
                        <Image src={reactLogo} height={"30px"} />
                        <Image src={expressjs} height={"30px"} />
                        <Image src={nodejs} height={"30px"} />
                        <Image src={mongodb} height={"30px"} />
                      </HStack>
                    </Box>
                  </Flex>
                  <Divider orientation="horizontal" mt={8} color={"black"} />
                </Box>

                <Center>
                  <Link to={"/personal-portfolio"}>
                    <Button
                      w={"50vw"}
                      variant={"outline"}
                      colorScheme="whatsapp"
                      _hover={{ backgroundColor: "#35FF69" }}
                    >
                      See More <ExternalLinkIcon ml={1} />
                    </Button>
                  </Link>
                </Center>

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
                          <Flex
                            direction={{ base: "column", md: "row" }}
                            mt={5}
                          >
                            <Image
                              src={selectedCard.img}
                              w="100%"
                              borderRadius="10px"
                              border={"1px solid grey"}
                            />
                            <Box w="100%" pl={{ base: 0, md: 5 }}>
                              <UnorderedList mt={{ base: 5, md: 1 }}>
                                <ListItem
                                  fontSize={{ base: "18px", md: "20px" }}
                                >
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
            </Box>
          </Flex>
        </Container>
      </Box>

      <Footer />
    </>
  );
}
