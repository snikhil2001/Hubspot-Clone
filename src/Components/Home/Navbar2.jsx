import { ArrowForwardIcon, ChevronDownIcon } from "@chakra-ui/icons";
import {
  Flex,
  Image,
  Text,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  Box,
  Heading,
  SimpleGrid,
  Button,
  Link,
} from "@chakra-ui/react";

import { NavLink } from "react-router-dom";

import Navbar2Hub from "./Navbar2Hub";

const navbarhub = [
  {
    heading: "Marketing Hub",
    image: "https://cdn-icons-png.flaticon.com/128/3649/3649458.png",
    text: "Marketing Automation Software",
  },
  {
    heading: "Sales Hub",
    image: "https://cdn-icons-png.flaticon.com/128/7422/7422064.png",
    text: "Sales CRM Software",
  },
  {
    heading: "Service Hub",
    image: "https://cdn-icons-png.flaticon.com/128/7854/7854899.png",
    text: "Customer Service Software",
  },
  {
    heading: "CMS Hub",
    image: "https://cdn-icons-png.flaticon.com/128/7465/7465712.png",
    text: "Content Management Software",
  },
  {
    heading: "Operations Hub",
    image: "https://cdn-icons-png.flaticon.com/128/2956/2956958.png",
    text: "Operations Software",
  },
];

export default function Navbar2() {
  return (
    <Flex
      position="sticky"
      top="0"
      zIndex="10"
      bgColor="white"
      ml="-430px"
      w="1350px"
      py={10}
      px={20}
      justify="space-between"
      align="center"
    >
      <Flex justify="space-between" w="550px" align="center">
        <NavLink to="/">
          <Image
            src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI2LjMuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAzMzguNjU5NjEgOTYiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDMzOC42NTk2MSA5NiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxnPgoJPHBvbHlnb24gZmlsbD0iIzIxMzM0MyIgcG9pbnRzPSIzNi42NzcyNSw1NC4zMzIxOSAxMS44MDkxOCw1NC4zMzIxOSAxMS44MDkxOCw4MC41Mjg1OSAwLDgwLjUyODU5IDAsMTUuODkwODMgMTEuODA5MTgsMTUuODkwODMgCgkJMTEuODA5MTgsNDIuOTcxMDMgMzYuNjc3MjUsNDIuOTcxMDMgMzYuNjc3MjUsMTUuODkwODMgNDguNDgzNzgsMTUuODkwODMgNDguNDgzNzgsODAuNTI4NTkgMzYuNjc3MjUsODAuNTI4NTkgCSIvPgoJPHBhdGggZmlsbD0iIzIxMzM0MyIgZD0iTTg2LjI2OTM2LDU5LjYzNjM0YzAsNS4zODM0NC00LjM4NTMxLDkuNzYzNzUtOS43Njc1NSw5Ljc2Mzc1Yy01LjM4MzY4LDAtOS43NjYxNi00LjM4MDMxLTkuNzY2MTYtOS43NjM3NQoJCXYtMjcuNjg0OUg1NS41NTMzOXYyNy42ODQ5YzAsMTEuNTUwMjUsOS4zOTc2NCwyMC45NDU1OCwyMC45NDg0MiwyMC45NDU1OGMxMS41NDg0MiwwLDIwLjk0NjA1LTkuMzk1MzMsMjAuOTQ2MDUtMjAuOTQ1NTgKCQl2LTI3LjY4NDloLTExLjE3ODVWNTkuNjM2MzR6Ii8+Cgk8cGF0aCBmaWxsPSIjMjEzMzQzIiBkPSJNMTY5LjI0NTU2LDM0LjgwMTljMC01LjY3NjIxLDMuNzU2OTktNy40NzYxNSw3Ljg3MDI1LTcuNDc2MTVjMy4zMTIwMSwwLDcuNjk0NzIsMi41MjA2OSwxMC41NTQyNCw1LjU4MzYxCgkJbDcuMzMzMjUtOC42NDQ0Yy0zLjY2NDUxLTQuOTUxMi0xMS4wODc5MS04LjM3NDEzLTE3LjE3MDc1LTguMzc0MTNjLTEyLjE2NzMxLDAtMjAuOTMzODUsNy4xMTQyNC0yMC45MzM4NSwxOC45MTEwNgoJCWMwLDIxLjg4MDQ2LDI2Ljc0ODIsMTQuOTQ0NzksMjYuNzQ4MiwyNy4xOTQwNGMwLDMuNzc3NTMtMy42NjYzOCw3LjExMjM2LTcuODY5MzQsNy4xMTIzNgoJCWMtNi42MjE3LDAtOC43Njk2MS0zLjI0MTc0LTExLjgwOTg2LTYuNjY0bC04LjE0MTgyLDguNDYyNzJjNS4xOTEyMiw2LjM5MzczLDExLjYzMDA4LDkuNjM3MzYsMTkuMzIzNjUsOS42MzczNgoJCWMxMS41Mzk0OSwwLDIwLjg0MzI1LTcuMjA0MDUsMjAuODQzMjUtMTguNDYxNDlDMTk1Ljk5MjgsMzcuNzcxNDgsMTY5LjI0NTU2LDQ1LjMzNjI3LDE2OS4yNDU1NiwzNC44MDE5eiIvPgoJPHBhdGggZmlsbD0iIzIxMzM0MyIgZD0iTTMzNC43MjA0OSw3MC4yMDI3OGMtNi42MTY5NywwLTguNDk1MDYtMi44NjA5Ni04LjQ5NTA2LTcuMjQ1OThWNDMuNTQ2NThoMTAuMjg0ODJ2LTkuODM4OTJoLTEwLjI4NDgyCgkJVjIwLjczNTE1bC0xMS4zNTc3OSw1LjA5ODI2djM5LjUzOTMxYzAsMTAuMTA5Myw2Ljk3NDY0LDE1LjIwOTIsMTYuNTQyNjYsMTUuMjA5MmMxLjQzMTIxLDAsMy40MDEyMS0wLjA5MjQ4LDQuNDc1NjgtMC4zNTc2NgoJCWwyLjc3MzYyLTEwLjE5NzA2QzMzNy40MDc3NSw3MC4xMTM1NywzMzUuOTc3MDIsNzAuMjAyNzgsMzM0LjcyMDQ5LDcwLjIwMjc4eiIvPgoJPHBhdGggZmlsbD0iIzIxMzM0MyIgZD0iTTEyOC44OTMyMywzMi4yNzUzM2MtNS41NDY3MywwLTkuNDE4MjksMS42MTAwMi0xMy4xNTczNiw1LjI4MDAzVjE2LjI3Njg1aC0xMS4yMTgwOXYzOS40MzU0NgoJCWMwLDE0Ljc2MDQsMTAuNjcxNjEsMjQuODY5NjMsMjIuNjYyMzYsMjQuODY5NjNjMTMuMzI5MDYsMCwyNS4wMDc3Ny0xMC4yODg5OSwyNS4wMDc3Ny0yNC4xNTIzMgoJCUMxNTIuMTg3OTEsNDIuNzQxOTEsMTQxLjQxODY5LDMyLjI3NTMzLDEyOC44OTMyMywzMi4yNzUzM3ogTTEyOC44MjM1LDY5LjI5MTczYy03LjAyNzU0LDAtMTIuNzIzNzQtNS42OTY0Mi0xMi43MjM3NC0xMi43MjM1MwoJCWMwLTcuMDI2ODksNS42OTYyLTEyLjcyMzUzLDEyLjcyMzc0LTEyLjcyMzUzYzcuMDI2NjcsMCwxMi43MjMzMSw1LjY5NjY0LDEyLjcyMzMxLDEyLjcyMzUzCgkJQzE0MS41NDY4MSw2My41OTUzLDEzNS44NTAxNyw2OS4yOTE3MywxMjguODIzNSw2OS4yOTE3M3oiLz4KCTxwYXRoIGZpbGw9IiMyMTMzNDMiIGQ9Ik0yNTAuNjgzNDYsNTUuODQ3MjRjMC0xMy44NjMzMy0xMS42Nzg3My0yNC4xNTIzMi0yNS4wMDc3OC0yNC4xNTIzMgoJCWMtMTEuOTkwNzUsMC0yMi42NjIzNSwxMC4xMDkyMi0yMi42NjIzNSwyNC44Njk2M1Y5NmgxMS4yMTgwOVY3NC43MjE0OWMzLjczOTA2LDMuNjcwMDEsNy42MTA2Myw1LjI4MDAzLDEzLjE1NzM1LDUuMjgwMDMKCQlDMjM5LjkxNDIyLDgwLjAwMTUyLDI1MC42ODM0Niw2OS41MzQ5NCwyNTAuNjgzNDYsNTUuODQ3MjR6IE0yNDAuMDQyMzQsNTUuNzA4NjVjMCw3LjAyNjg5LTUuNjk2NjQsMTIuNzIzNTMtMTIuNzIzMzEsMTIuNzIzNTMKCQljLTcuMDI3NTQsMC0xMi43MjM3NC01LjY5NjY0LTEyLjcyMzc0LTEyLjcyMzUzYzAtNy4wMjcxLDUuNjk2Mi0xMi43MjM1MywxMi43MjM3NC0xMi43MjM1MwoJCUMyMzQuMzQ1Nyw0Mi45ODUxMywyNDAuMDQyMzQsNDguNjgxNTUsMjQwLjA0MjM0LDU1LjcwODY1eiIvPgoJPHBhdGggZmlsbD0iI0ZGNUMzNSIgZD0iTTI4Ni45MzI0NiwzMS4xNTE1NFYxOS44ODMxMmMyLjk0MTE2LTEuMzg5NTEsNS4wMDIwMS00LjM2NTA4LDUuMDAyMDEtNy44MTg1di0wLjI2MDM4CgkJYzAtNC43NjU1Ny0zLjg5OTQ0LTguNjY0OC04LjY2NDgzLTguNjY0OGgtMC4yNjAxNmMtNC43NjU3OCwwLTguNjY1MjIsMy44OTkyMy04LjY2NTIyLDguNjY0OHYwLjI2MDM4CgkJYzAsMy40NTM0MSwyLjA2MTI4LDYuNDI5NDIsNS4wMDI0MSw3LjgxODcydjExLjI2ODQyYy00LjM3OTI0LDAuNjc2NTYtOC4zODA2NSwyLjQ4MjY5LTExLjY4MjE5LDUuMTQwNzlsLTMwLjkzODg3LTI0LjA2NzU2CgkJYzAuMjAzNTEtMC43ODM3NywwLjM0NjQ1LTEuNTkxMjksMC4zNDczMi0yLjQzODY4YzAuMDA2OTctNS4zOTc5MS00LjM2MzEzLTkuNzc5MzMtOS43NjEyNS05Ljc4NjMxCgkJYy01LjM5ODEzLTAuMDA2NzUtOS43Nzk1Niw0LjM2MzU2LTkuNzg2NTMsOS43NjE0N2MtMC4wMDY1Myw1LjM5NzkxLDQuMzYzNTYsOS43NzkzMyw5Ljc2MTY5LDkuNzg2MDkKCQljMS43NTkyOCwwLjAwMjE4LDMuMzg3MzktMC40OTc0NSw0LjgxNDYxLTEuMzA5MTFsMzAuNDM0NjUsMjMuNjc1NzljLTIuNTg4NTksMy45MDY4NS00LjEwNDI1LDguNTg2OC00LjEwNDI1LDEzLjYyNDUyCgkJYzAsNS4yNzQ1OCwxLjY2NjAyLDEwLjE1MjgxLDQuNDgyMDksMTQuMTY1NzdsLTkuMjU1NzQsOS4yNTU3NGMtMC43MzE2OS0wLjIxOTQyLTEuNDkxMjctMC4zNzMwNC0yLjI5NDg2LTAuMzczMDQKCQljLTQuNDM1NDcsMC04LjAzMTYsMy41OTU5Mi04LjAzMTYsOC4wMzE2czMuNTk2MTMsOC4wMzE2LDguMDMxNiw4LjAzMTZjNC40MzU5LDAsOC4wMzE1OS0zLjU5NTkyLDguMDMxNTktOC4wMzE2CgkJYzAtMC44MDMxNi0wLjE1MzM4LTEuNTYyOTYtMC4zNzMwMi0yLjI5NDY1bDkuMTU1NDktOS4xNTUyOGM0LjE1NTcsMy4xNzI1NSw5LjMzMDY5LDUuMDc4MDMsMTQuOTYyODMsNS4wNzgwMwoJCWMxMy42NDU0NSwwLDI0LjcwNzUyLTExLjA2MjI5LDI0LjcwNzUyLTI0LjcwODE3QzMwNy44NDc3NSw0My4xODU4NywyOTguNzcyODYsMzIuOTgwMzMsMjg2LjkzMjQ2LDMxLjE1MTU0eiBNMjgzLjE0MDIzLDY4LjIwNjI4CgkJYy02Ljk5NjE1LDAtMTIuNjY4NC01LjY3MTM3LTEyLjY2ODQtMTIuNjY3NTNjMC02Ljk5NTk0LDUuNjcyMjQtMTIuNjY3NTMsMTIuNjY4NC0xMi42Njc1MwoJCWM2Ljk5NTMsMCwxMi42Njc1NCw1LjY3MTU4LDEyLjY2NzU0LDEyLjY2NzUzQzI5NS44MDc3Nyw2Mi41MzQ5MiwyOTAuMTM1NTMsNjguMjA2MjgsMjgzLjE0MDIzLDY4LjIwNjI4eiIvPgo8L2c+Cjwvc3ZnPgo="
            w="110px"
          />
        </NavLink>

        <Popover trigger="hover">
          <PopoverTrigger>
            <Flex
              justifyContent="center"
              align="center"
              fontSize="18px"
              fontWeight="500"
              // pb="20px"
              // _hover={{ borderBottom: "5px solid #2e475d " }}
            >
              <Text _hover={{ color: "#2e475d", textDecoration: "underline" }}>
                Software
              </Text>
              <ChevronDownIcon />
            </Flex>
          </PopoverTrigger>
          <PopoverContent w="1000px">
            <Box>
              <Heading color="#2e475d" pb="20px" fontSize="20px">
                The Hubspot CRM Platform
              </Heading>

              <Text pb="20px" color="#2e475d" fontWeight="400">
                All of HubSpot's marketing, sales CRM, customer service, CMS,
                and operations software on one platform.
              </Text>
              <Flex gap={1} justify="center">
                <Flex boxShadow="xs" align="center" gap={1} p="20px 80px">
                  <Link color="#0b8484">Free Hubstop CRM </Link>
                  <ArrowForwardIcon />
                </Flex>
                <Flex boxShadow="xs" align="center" gap={1} p="20px 80px">
                  <Link color="#0b8484">Overview of All Products</Link>
                  <ArrowForwardIcon />
                </Flex>
              </Flex>
            </Box>
            <PopoverBody>
              <SimpleGrid gap={10} columns={3}>
                {navbarhub.map((el) => {
                  return (
                    <Navbar2Hub
                      text={el.text}
                      heading={el.heading}
                      src={el.image}
                    />
                  );
                })}
              </SimpleGrid>
            </PopoverBody>
          </PopoverContent>
        </Popover>
        <NavLink to="/pricing" style={{ fontSize: "18px", fontWeight: "500" }}>
          Pricing
        </NavLink>
        <Popover trigger="hover">
          <PopoverTrigger>
            <Flex
              justifyContent="center"
              align="center"
              fontSize="18px"
              fontWeight="500"
              // pb="20px"
              // _hover={{ borderBottom: "5px solid #2e475d " }}
            >
              <Text _hover={{ color: "#2e475d", textDecoration: "underline" }}>
                Resources
              </Text>
              <ChevronDownIcon />
            </Flex>
          </PopoverTrigger>
          <PopoverContent w="800px">
            <PopoverBody>
              <SimpleGrid pl="50px" columns={2}>
                <Box textAlign="left" w="400px">
                  <Flex align="center" gap={2}>
                    <Image
                      h="20px"
                      w="20px"
                      src="https://53.fs1.hubspotusercontent-na1.net/hubfs/53/WBZ-1165%20Global%20Nav%20Redesign/1-icon.svg"
                    />
                    <Heading fontSize="20px" color="#2e475d">
                      Education
                    </Heading>
                  </Flex>
                  <Box py={5}>
                    <Link
                      mb="5px"
                      fontWeight="bold"
                      color="teal"
                      display="block"
                    >
                      Blog
                    </Link>
                    <Link
                      mb="5px"
                      fontWeight="bold"
                      color="teal"
                      display="block"
                    >
                      Ebooks,Guides,More
                    </Link>
                    <Link
                      mb="5px"
                      fontWeight="bold"
                      color="teal"
                      display="block"
                    >
                      Free Courses & Certifications
                    </Link>
                    <Link
                      mb="5px"
                      fontWeight="bold"
                      color="teal"
                      display="block"
                    >
                      Inbound Methodology
                    </Link>
                  </Box>
                </Box>
                <Box textAlign="left">
                  <Flex align="center" gap={2}>
                    <Image
                      h="20px"
                      w="20px"
                      src="https://53.fs1.hubspotusercontent-na1.net/hubfs/53/WBZ-1165%20Global%20Nav%20Redesign/3-icon.svg"
                    />
                    <Heading fontSize="20px" color="#2e475d">
                      Services
                    </Heading>
                  </Flex>
                  <Box py={5}>
                    <Link
                      mb="5px"
                      fontWeight="bold"
                      color="teal"
                      display="block"
                    >
                      Onboarding & Consulting Services
                    </Link>
                    <Link
                      mb="5px"
                      fontWeight="bold"
                      color="teal"
                      display="block"
                    >
                      Hire a Service Provider
                    </Link>
                  </Box>
                </Box>
                <Box textAlign="left">
                  <Flex align="center" gap={2}>
                    <Image
                      h="20px"
                      w="20px"
                      src="https://53.fs1.hubspotusercontent-na1.net/hubfs/53/WBZ-1165%20Global%20Nav%20Redesign/2-icon.svg"
                    />
                    <Heading fontSize="20px" color="#2e475d">
                      Why Hubspot?
                    </Heading>
                  </Flex>
                  <Box py={5}>
                    <Link
                      mb="5px"
                      fontWeight="bold"
                      color="teal"
                      display="block"
                    >
                      Case Studies
                    </Link>
                    <Link
                      mb="5px"
                      fontWeight="bold"
                      color="teal"
                      display="block"
                    >
                      Why Choose Hubspot ?
                    </Link>
                  </Box>
                </Box>
                <Box textAlign="left">
                  <Flex align="center" gap={2}>
                    <Image
                      h="20px"
                      w="20px"
                      src="https://53.fs1.hubspotusercontent-na1.net/hubfs/53/WBZ-1165%20Global%20Nav%20Redesign/4-icon.svg"
                    />
                    <Heading fontSize="20px" color="#2e475d">
                      User Resources
                    </Heading>
                  </Flex>
                  <Box py={5}>
                    <Link
                      mb="5px"
                      fontWeight="bold"
                      color="teal"
                      display="block"
                    >
                      Partner Programs
                    </Link>
                    <Link
                      mb="5px"
                      fontWeight="bold"
                      color="teal"
                      display="block"
                    >
                      Developer Tools
                    </Link>
                    <Link
                      mb="5px"
                      fontWeight="bold"
                      color="teal"
                      display="block"
                    >
                      Community
                    </Link>
                    <Link
                      mb="5px"
                      fontWeight="bold"
                      color="teal"
                      display="block"
                    >
                      Hubspot Ecosystem
                    </Link>
                  </Box>
                </Box>
              </SimpleGrid>
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </Flex>
      <Button
        as={Link}
        href="https://www.hubspot.com/products/get-started?__hstc=185665590.02de52fc46b9876a7c8be911774ae1f4.1664300299276.1664300299276.1664300299276.1&__hssc=185665590.5557.1664732078943&__hsfp=4080244219&_ga=2.123069320.2062048943.1664300300-1540596056.1664300300&hubs_content=www.hubspot.com/&hubs_content-cta=Start%20free%20or%20get%20a%20demo"
        _hover={{ bgColor: "#ffcec2", textDecoration: "none" }}
        color="white"
        bgColor="#ff5c35"
      >
        Start Free or Get Demo
      </Button>
    </Flex>
  );
}
