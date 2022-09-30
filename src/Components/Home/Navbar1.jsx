import {
  Flex,
  Link,
  Image,
  Button,
  Box,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Text,
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
            <MenuList minW="50px">
              <MenuItem
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
          <MenuList minW="200px">
            <MenuItem
              _hover={{
                bgColor: "white",
                color: "teal.600",
                textDecoration: "underline",
              }}
            >
              About US
            </MenuItem>
            <MenuItem
              _hover={{
                bgColor: "white",
                color: "teal.600",
                textDecoration: "underline",
              }}
            >
              Career
            </MenuItem>
            <MenuItem
              _hover={{
                bgColor: "white",
                color: "teal.600",
                textDecoration: "underline",
              }}
            >
              Contact Us
            </MenuItem>
            <MenuItem
              _hover={{
                bgColor: "white",
                color: "teal.600",
                textDecoration: "underline",
              }}
            >
              Investor Relations
            </MenuItem>
            <MenuItem
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
