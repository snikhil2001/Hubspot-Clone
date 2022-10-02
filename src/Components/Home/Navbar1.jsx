import {
  Flex,
  Link,
  Image,
  Box,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { ChevronDownIcon, Search2Icon } from "@chakra-ui/icons";
import { NavLink } from "react-router-dom";

export default function Navbar1() {
  return (
    <Flex
      // bgColor="red"
      mx={-300}
      w="1000px"
      justify="space-between"
      py={4}
      align="center"
    >
      <Flex gap={8}>
        <Flex gap={1}>
          <Image
            src="https://cdn-icons-png.flaticon.com/128/3626/3626814.png"
            h="20px"
            w="20px"
          />
          <Menu>
            <MenuButton
              _hover={{ color: "blue", textDecoration: "underline" }}
              fontSize="14px"
              as={Link}
            >
              Language
              <ChevronDownIcon color="blue" />
            </MenuButton>
            <MenuList bgColor="white" zIndex={20} minW="50px">
              <MenuItem
                as={Link}
                _hover={{
                  bgColor: "white",
                  color: "teal.600",
                  textDecoration: "underline",
                }}
              >
                Deustch
              </MenuItem>
              <MenuItem
                _hover={{
                  bgColor: "white",
                  color: "teal.600",
                  textDecoration: "underline",
                }}
              >
                English
              </MenuItem>
              <MenuItem
                _hover={{
                  bgColor: "white",
                  color: "teal.600",
                  textDecoration: "underline",
                }}
              >
                Spanish
              </MenuItem>
              <MenuItem
                _hover={{
                  bgColor: "white",
                  color: "teal.600",
                  textDecoration: "underline",
                }}
              >
                Portugese
              </MenuItem>
              <MenuItem
                _hover={{
                  bgColor: "white",
                  color: "teal.600",
                  textDecoration: "underline",
                }}
              >
                French
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>
        <Flex gap={2}>
          <Image
            src="https://cdn-icons-png.flaticon.com/128/709/709722.png"
            w="20px"
            h="20px"
            mt="1px"
          />
          <Link
            fontSize="14px"
            _hover={{ color: "blue", textDecoration: "underline" }}
            href="https://offers.hubspot.com/contact-sales?__hstc=185665590.02de52fc46b9876a7c8be911774ae1f4.1664300299276.1664300299276.1664300299276.1&__hssc=185665590.5557.1664732078943&__hsfp=4080244219&hubs_signup-url=www.hubspot.com%2F&hubs_signup-cta=homepage-nav-contact-sales&_ga=2.90719257.2062048943.1664300300-1540596056.1664300300"
          >
            Contact Sales
          </Link>
        </Flex>
      </Flex>
      <Flex gap={7}>
        <Box>
          <Search2Icon mb="1" color="teal.400" />
        </Box>
        <Box
          fontSize="14px"
          fontWeight="500"
          _hover={{ color: "teal.600", textDecoration: "underline" }}
        >
          <NavLink to="/login">Log in</NavLink>
        </Box>
        <Box mt="-2px">
          <Link
            _hover={{ color: "teal.500", textDecoration: "underline" }}
            fontWeight="500"
            fontSize="14px"
            href="https://help.hubspot.com/?__hstc=185665590.02de52fc46b9876a7c8be911774ae1f4.1664300299276.1664300299276.1664300299276.1&__hssc=185665590.5557.1664732078943&__hsfp=4080244219&_ga=2.84943642.2062048943.1664300300-1540596056.1664300300"
          >
            Customer Support
          </Link>
        </Box>
        <Menu>
          <MenuButton
            fontWeight="500"
            _hover={{ color: "blue", textDecoration: "underline" }}
            fontSize="14px"
            as={Link}
          >
            About
            <ChevronDownIcon color="blue" />
          </MenuButton>
          <MenuList minW="200px" bgColor="white" zIndex={20}>
            <MenuItem
              as={Link}
              href="https://www.hubspot.com/our-story?__hstc=185665590.02de52fc46b9876a7c8be911774ae1f4.1664300299276.1664300299276.1664300299276.1&__hssc=185665590.5557.1664732078943&__hsfp=4080244219&_ga=2.123069320.2062048943.1664300300-1540596056.1664300300"
              _hover={{
                bgColor: "white",
                color: "teal.600",
                textDecoration: "underline",
              }}
            >
              About US
            </MenuItem>
            <MenuItem
              as={Link}
              href="https://www.hubspot.com/careers?__hstc=185665590.02de52fc46b9876a7c8be911774ae1f4.1664300299276.1664300299276.1664300299276.1&__hssc=185665590.5557.1664732078943&__hsfp=4080244219&_ga=2.123069320.2062048943.1664300300-1540596056.1664300300"
              _hover={{
                bgColor: "white",
                color: "teal.600",
                textDecoration: "underline",
              }}
            >
              Career
            </MenuItem>
            <MenuItem
              as={Link}
              href="https://www.hubspot.com/company/contact?__hstc=185665590.02de52fc46b9876a7c8be911774ae1f4.1664300299276.1664300299276.1664300299276.1&__hssc=185665590.5557.1664732078943&__hsfp=4080244219&_ga=2.123069320.2062048943.1664300300-1540596056.1664300300"
              _hover={{
                bgColor: "white",
                color: "teal.600",
                textDecoration: "underline",
              }}
            >
              Contact Us
            </MenuItem>
            <MenuItem
              as={Link}
              href="https://ir.hubspot.com/?__hstc=185665590.02de52fc46b9876a7c8be911774ae1f4.1664300299276.1664300299276.1664300299276.1&__hssc=185665590.5557.1664732078943&__hsfp=4080244219&_ga=2.85813146.2062048943.1664300300-1540596056.1664300300"
              _hover={{
                bgColor: "white",
                color: "teal.600",
                textDecoration: "underline",
              }}
            >
              Investor Relations
            </MenuItem>
            <MenuItem
              as={Link}
              href="https://www.hubspot.com/company/management?__hstc=185665590.02de52fc46b9876a7c8be911774ae1f4.1664300299276.1664300299276.1664300299276.1&__hssc=185665590.5557.1664732078943&__hsfp=4080244219&_ga=2.123069320.2062048943.1664300300-1540596056.1664300300"
              _hover={{
                bgColor: "white",
                color: "teal.600",
                textDecoration: "underline",
              }}
            >
              Management Team
            </MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </Flex>
  );
}
