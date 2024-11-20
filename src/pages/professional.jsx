import { React, useState } from "react";
import Bottombar from "../components/bottombar";
import {
  Box,
  Container,
  Flex,
  useDisclosure,
  Center,
  UnorderedList,
  ListItem,
  HStack,
  Divider,
  Image,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import Sidebar from "../components/sidebar";
import { Link, useNavigate } from "react-router-dom";
import { ArrowBackIcon, ExternalLinkIcon } from "@chakra-ui/icons";

import html from "../img/png/html.png";
import css from "../img/png/css.png";
import privacycure from "../img/privacycure.bmp";
import nodejs from "../img/png/nodejs.png";
import flask from "../img/png/flask.png";
import Footer from "../components/footer";

export default function Professional() {
  const [selectedCard, setSelectedCard] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  const proj = [
    {
      id: 1,
      title: "Privacy Cure",
      desc: "Privacy Cure is an informational web platform designed to showcase the Data Protection Officer (DPO) services offered. It provides a clear and concise overview of the company's expertise in data compliance, including CDPA assessment, employee training, and breach response. The site is tailored to help businesses understand their obligations under regulations like CDPA and CDPR, ensuring they stay compliant while protecting customer trust.",
      link: "https://privacycure.com",
      stack: html,
      stack2: css,
      stack3: nodejs,
      stack4: flask,
      features:
        "downloading relevant documents related to data protection (CDPA, CDPR), processing and sending emails when potential clients fill in the contact form",
      img: privacycure,
      height: "300px",
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
                  Professional Projects
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
