import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Box, Flex, Heading, Link, Image, Text } from "@chakra-ui/react";

export default function Navbar2Hub(props) {
  const { src, heading, text } = props;
  return (
    <Box boxShadow="xs" pl={20} pt="20px" w="300px" h="auto">
      <Flex py={3} gap={2}>
        <Image src={src} w="20px" />
        <Heading fontWeight="700" color="#2e475d" fontSize="18px">
          {heading}
        </Heading>
      </Flex>
      <Text>
        {text} {"."} <Link color="#0b8484">Free & Premium Plans</Link>{" "}
        <ArrowForwardIcon />
      </Text>
    </Box>
  );
}
