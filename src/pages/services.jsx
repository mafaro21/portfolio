import React from "react";
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
import { ArrowBackIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/footer";

export default function Services() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
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
              mb={{ base: 6, md: 3 }}
              mt={{ base: 0, md: 3 }}
              borderRadius={{ base: "0", md: "10px" }}
            >
              <Box pt={5}>
                <ArrowBackIcon
                  w={6}
                  h={6}
                  _hover={{ backgroundColor: "#35ffa8", borderRadius: "15px" }}
                  onClick={goBack}
                />
              </Box>

              <Center pt={2}>
                <Text fontSize={"xl"} fontWeight={"600"} as={"u"}>
                  Services I Provide
                </Text>
              </Center>

              <Box mt={8} px={3}>
                <Text fontSize={{ base: "md", lg: "lg" }}>
                  <Box>
                    From simple portfolio sites to complex web applications, I
                    build fast, responsive websites using modern technologies
                    like HTML5, CSS3, JavaScript with frameworks like React and
                    Node.
                  </Box>

                  <Box mt={4}>
                    Comprehensive database services, including custom
                    development, efficient restructuring, and ongoing
                    maintenance of MySQL and other relational databases. I
                    ensure data integrity, optimize performance, and implement
                    scalable solutions to meet your evolving business needs.
                  </Box>

                  <Box mt={4}>
                    Assistance of hosting already built platforms and ensuring
                    they are online and well maintained
                  </Box>

                  <Box mt={4}>
                    UI/UX revamp and rebranding services to enhance the visual
                    appeal and functionality of your platform. I focus on
                    modernizing user interfaces, improving user experience, and
                    aligning your design with your brand identity for a fresh,
                    engaging look.
                  </Box>

                  <Box mt={7}>
                    Whether you're starting from scratch or looking to improve
                    an existing project, I can take your vision and turn it into
                    reality. I offer end-to-end development, ensuring smooth
                    progress, enhancements, and optimizations to elevate your
                    project to its full potential.
                  </Box>

                  <Box mt={7}>
                    Every project is unique and comes with its own set of
                    challenges. For more information or to discuss your specific
                    needs, feel free to get in touch.
                  </Box>

                  <Box mt={9}>
                    <Text as={"i"}>Pricing for projects is negotiable</Text>
                  </Box>
                </Text>
              </Box>
            </Box>
          </Flex>
        </Container>
      </Box>

      <Footer />
    </>
  );
}
