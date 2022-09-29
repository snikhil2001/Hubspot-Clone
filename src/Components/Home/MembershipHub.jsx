import {
  Box,
  Text,
  Button,
  Flex,
  Heading,
  Divider,
  Image,
} from "@chakra-ui/react";

export default function MembershipHub(props) {
  const { src, heading, text, link1, link2, link3 } = props;
  return (
    <Box textAlign="center" boxShadow="md" p="20px 40px" w="400px">
      <Flex gap={3} justify="center" align="center" pb="30px">
        <Image w="30px" h="30px" src={src} />
        <Heading fontSize="24px">{heading}</Heading>
      </Flex>
      <Box textAlign="center" pb="60px" w="300px" m="auto">
        <Text>{text}</Text>
      </Box>
      <Divider />
      <Text pt="20px">Popular Features</Text>
      <Box textAlign="center" pt="10px">
        <Flex pt="10px" align="center" gap={2}>
          <Image
            src="https://cdn-icons-png.flaticon.com/128/8579/8579387.png"
            w="20px"
          />
          <Text>{link1}</Text>
        </Flex>
        <Flex pt="10px" align="center" gap={2}>
          <Image
            src="https://cdn-icons-png.flaticon.com/128/8579/8579387.png"
            w="20px"
          />
          <Text>{link2}</Text>
        </Flex>
        <Flex align="center" pt="10px" gap={2}>
          <Image
            src="https://cdn-icons-png.flaticon.com/128/8579/8579387.png"
            w="20px"
          />
          <Text>{link3}</Text>
        </Flex>
      </Box>
      <Button
        _hover={{ background: "#ffebe6" }}
        mt="40px"
        bgColor="#ff5c35"
        color="white"
        p="20px 80px"
      >
        Get Started
      </Button>
    </Box>
  );
}
