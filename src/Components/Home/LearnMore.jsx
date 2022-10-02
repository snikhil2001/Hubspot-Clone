import { Link, Text, Flex, Button, Box } from "@chakra-ui/react";

export default function LearnMore() {
  return (
    <Flex
      justify="center"
      align="center"
      ml="-450px"
      bgColor="#b7ecec"
      w="1400px"
      h="80px"
      gap={10}
      py="55px"
    >
      <Box w="900px">
        <Text fontSize="20px">
          HubSpot was named a Leader in the Gartner® Magic Quadrant™ for B2B
          Marketing Automation Platforms for the second year.
        </Text>
      </Box>
      <Button
        as={Link}
        href="https://offers.hubspot.com/b2b-marketing-automation-magic-quadrant-report?hubs_signup-cta=promo-banner-website&hubs_signup-url=www.hubspot.com&__hstc=185665590.02de52fc46b9876a7c8be911774ae1f4.1664300299276.1664300299276.1664300299276.1&__hssc=185665590.5557.1664732078943&__hsfp=4080244219&_ga=2.194375342.2062048943.1664300300-1540596056.1664300300"
      >
        Learn More
      </Button>
    </Flex>
  );
}
