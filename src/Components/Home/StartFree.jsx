import {
  Box,
  Button,
  Flex,
  Heading,
  Text,
  Image,
  Link,
} from "@chakra-ui/react";

export default function StartFree() {
  return (
    <Flex
      align="center"
      justify="center"
      gap={200}
      w="1350px"
      ml="-432px"
      py={100}
    >
      <Box textAlign="left">
        <Heading color="#2E475D" pb="40px">
          Start Growing With Hubspot Today
        </Heading>
        <Box pb="30px" w="600px">
          <Text>
            With tools to make every part of your process more human and a
            support team excited to help you, getting started with inbound has
            never been easier.
          </Text>
        </Box>
        <Button
          p="40px 70px"
          fontSize="20px"
          bgColor="#ff5c35"
          color="white"
          _hover={{ background: "#ffcec2", textDecoration: "none" }}
          mb="20px"
          as={Link}
          href="https://www.hubspot.com/products/get-started?hubs_content=www.hubspot.com%2F&hubs_content-cta=homepage-hero-cta&__hstc=185665590.02de52fc46b9876a7c8be911774ae1f4.1664300299276.1664300299276.1664300299276.1&__hssc=185665590.5557.1664732078943&__hsfp=4080244219&_ga=2.123069320.2062048943.1664300300-1540596056.1664300300"
        >
          Start Free or Get Demo
        </Button>
        <Text color="#2E475D">
          Get started with free tools, or get more with our premium software.
        </Text>
      </Box>
      <Image
        w="350px"
        h="430px"
        src="https://www.hubspot.com/hubfs/CSOL/module-assets/_cta_contentblock_headshots_headshot_1.png"
      />
    </Flex>
  );
}
