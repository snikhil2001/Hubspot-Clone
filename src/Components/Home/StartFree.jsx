import { Box, Button, Flex, Heading, Text, Image } from "@chakra-ui/react";

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
          _hover={{ background: "#ffcec2" }}
          mb="20px"
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
