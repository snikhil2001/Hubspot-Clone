import { Text, Flex, Button, Box } from "@chakra-ui/react";

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
      <Button>Learn More</Button>
    </Flex>
  );
}
