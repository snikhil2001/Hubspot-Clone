import { Box, Flex, Heading, Text, Image, Button } from "@chakra-ui/react";

export default function HomeBanner() {
  return (
    <Flex
      justify="center"
      align="center"
      gap={40}
      ml="-450px"
      w="1700px"
      // h="1000px"
      bgColor="#d44325"
    >
      <Box py={150} ml="50px" textAlign="justify" w="580px">
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
        <Button mb="20px" p="30px 50px">
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
        ml="-150px"
      />
    </Flex>
  );
}
