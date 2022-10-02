import {
  Box,
  Flex,
  Heading,
  Text,
  Image,
  Button,
  Link,
} from "@chakra-ui/react";

export default function HomeBanner() {
  return (
    <Flex
      justify="center"
      align="center"
      gap={40}
      ml="-432px"
      w="1350px"
      // h="1000px"
      bgColor="#d44325"
    >
      <Box py={150} ml="200px" textAlign="justify" minW="500px">
        <Text color="white" fontWeight="bold">
          HUBSPOT CRM PLATFORM
        </Text>
        <Heading pb="20px" fontSize="55px" color="white">
          Powerful,not overpowering
        </Heading>
        <Text pb="30px" color="white" fontWeight="bold">
          Finally, a CRM platform that's both powerful and easy to use. Create
          delightful customer experiences. Have a delightful time doing it.
        </Text>
        <Button
          as={Link}
          href="https://www.hubspot.com/products/get-started?hubs_content=www.hubspot.com%2F&hubs_content-cta=homepage-hero-cta&__hstc=185665590.02de52fc46b9876a7c8be911774ae1f4.1664300299276.1664300299276.1664300299276.1&__hssc=185665590.5557.1664732078943&__hsfp=4080244219&_ga=2.123069320.2062048943.1664300300-1540596056.1664300300"
          _hover={{ textDecoration: "none" }}
          mb="20px"
          p="30px 50px"
        >
          Start Free or Get Demo
        </Button>
        <Text pb="30px" color="white" fontWeight="bold">
          Get started with free tools, or get more with our premium software.
        </Text>
      </Box>
      <Image
        src="https://www.hubspot.com/hubfs/SUI-Homepage-Header-Desktop@2x.png"
        w="1000px"
        h="500px"
        // ml="-50px  "
      />
    </Flex>
  );
}
