import {
  Box,
  Heading,
  Text,
  Flex,
  Container,
  Divider,
  Image,
} from "@chakra-ui/react";

export default function MarketingHub() {
  return (
    <>
      <Box
        w="1370px"
        h="400px"
        bgColor="#2e475d"
        bgSize="1000px"
        bgImage="url('//cdn2.hubspot.net/hubfs/53/assets/hubspot.com/_style-guide/sword-sprocket/circleLight1.svg')"
        bgPosition="center"
        bgRepeat="no-repeat"
        animation="floatCircle 20s linear infinite"
        p="100px 0px"
        mb="80px"
      >
        <Heading textAlign="center" color="white">
          Get Started With Marketing Hub®
        </Heading>
        <Box pt="50px" w="600px" m="auto">
          <Text fontSize="18px" color="white">
            Start with free tools and upgrade as you grow, or hit the ground
            running with one of our premium editions.
          </Text>
        </Box>
      </Box>
      <Flex w="900px" justify="center" m="auto" gap={10}>
        <Box w="400px">
          <Flex
            align="center"
            justify="center"
            w="400px"
            h="113.89px"
            bgGradient="linear(45deg,#ff5c35, #ff8933)"
            fontSize="25px"
            fontWeight="bold"
            color="white"
            mb="50px"
          >
            <Text>Free Tools</Text>
          </Flex>
          <Box
            w="300px"
            fontSize="17px"
            m="auto"
            fontWeight="bold"
            color="#2E475D"
            mb="50px"
          >
            <Text>Start small by converting website visitors into leads.</Text>
          </Box>
          <Divider />
          <Box mt="20px" ml="30px" textAlign="left">
            <Text>Popular Features:</Text>
          </Box>
          <Box px={5}>
            <Flex pt="10px" align="center" gap={5}>
              <Image
                src="https://cdn-icons-png.flaticon.com/128/8579/8579387.png"
                w="20px"
              />
              <Text color="#2E475D">Email Marketing</Text>
            </Flex>
            <Flex pt="10px" align="center" gap={5}>
              <Image
                src="https://cdn-icons-png.flaticon.com/128/8579/8579387.png"
                w="20px"
              />
              <Text color="#2E475D">Forms</Text>
            </Flex>
            <Flex pt="10px" align="center" gap={5}>
              <Image
                src="https://cdn-icons-png.flaticon.com/128/8579/8579387.png"
                w="20px"
              />
              <Text color="#2E475D">Landing Pages</Text>
            </Flex>
            <Flex pt="10px" align="center" gap={5}>
              <Image
                src="https://cdn-icons-png.flaticon.com/128/8579/8579387.png"
                w="20px"
              />
              <Text color="#2E475D">Contact Management</Text>
            </Flex>
            <Flex pt="10px" align="center" gap={5}>
              <Image
                src="https://cdn-icons-png.flaticon.com/128/8579/8579387.png"
                w="20px"
              />
              <Text color="#2E475D">Live Chat</Text>
            </Flex>
            <Flex pt="10px" align="center" gap={5}>
              <Image
                src="https://cdn-icons-png.flaticon.com/128/8579/8579387.png"
                w="20px"
              />
              <Text color="#2E475D">Facebook, Google, and LinkedIn ads</Text>
            </Flex>
            <Flex pt="10px" align="center" gap={5}>
              <Image
                src="https://cdn-icons-png.flaticon.com/128/8579/8579387.png"
                w="20px"
              />
              <Text color="#2E475D">Traffic & Conversion Analytics</Text>
            </Flex>
          </Box>
        </Box>
        <Box w="400px">
          <Flex
            align="center"
            justify="center"
            w="400px"
            h="113.89px"
            bgGradient="linear(45deg,#ff5c35, #ff8933)"
            fontSize="25px"
            fontWeight="bold"
            color="white"
            mb="50px"
          >
            <Text>Premium Tools</Text>
          </Flex>
          <Box
            w="300px"
            fontSize="17px"
            m="auto"
            fontWeight="bold"
            color="#2E475D"
            mb="50px"
          >
            <Text>
              Run complete inbound marketing campaigns at scale with our
              all-in-one software.
            </Text>
          </Box>
          <Divider />
          <Box mt="20px" ml="30px" textAlign="left">
            <Text>Popular Features:</Text>
          </Box>
          <Box px={5}>
            <Box
              mt="20px"
              mb="10px"
              textAlign="left"
              color="#2E475D"
              fontWeight="bold"
              fontSize="18px"
            >
              <Text>Starter (starting at $45/mo.)</Text>
            </Box>
            <Flex pt="10px" align="center" gap={5}>
              <Image
                src="https://cdn-icons-png.flaticon.com/128/8579/8579387.png"
                w="20px"
              />
              <Text color="#2E475D">Ad retargeting</Text>
            </Flex>
            <Flex pt="10px" align="center" gap={5}>
              <Image
                src="https://cdn-icons-png.flaticon.com/128/8579/8579387.png"
                w="20px"
              />
              <Text color="#2E475D">Marketing Automation</Text>
            </Flex>
            <Flex pt="10px" align="center" gap={5}>
              <Image
                src="https://cdn-icons-png.flaticon.com/128/8579/8579387.png"
                w="20px"
              />
              <Text color="#2E475D">Landing Page Reporting</Text>
            </Flex>
            <Box
              mt="20px"
              mb="10px"
              textAlign="left"
              color="#2E475D"
              fontWeight="bold"
              fontSize="18px"
            >
              <Text>Professional (starting at $800/mo.)</Text>
            </Box>
            <Flex pt="10px" justify="center" w="300px" align="center" gap={5}>
              <Image
                src="https://cdn-icons-png.flaticon.com/128/8579/8579387.png"
                w="20px"
              />
              <Text color="#2E475D">
                Omni-channel marketing automation and custom workflows
              </Text>
            </Flex>
            <Flex pt="10px" align="center" gap={5}>
              <Image
                src="https://cdn-icons-png.flaticon.com/128/8579/8579387.png"
                w="20px"
              />
              <Text color="#2E475D">Blogging</Text>
            </Flex>
            <Flex pt="10px" align="center" gap={5}>
              <Image
                src="https://cdn-icons-png.flaticon.com/128/8579/8579387.png"
                w="20px"
              />
              <Text color="#2E475D">Custom Reporting</Text>
            </Flex>
            <Flex pt="10px" align="center" gap={5}>
              <Image
                src="https://cdn-icons-png.flaticon.com/128/8579/8579387.png"
                w="20px"
              />
              <Text color="#2E475D">Account Based Marketing</Text>
            </Flex>
            <Box
              mt="20px"
              mb="10px"
              textAlign="left"
              color="#2E475D"
              fontWeight="bold"
              fontSize="18px"
            >
              <Text>Enterprise (starting at $3600/mo.)</Text>
            </Box>
            <Flex pt="10px" align="center" gap={5}>
              <Image
                src="https://cdn-icons-png.flaticon.com/128/8579/8579387.png"
                w="20px"
              />
              <Text color="#2E475D">Adaptive Testing</Text>
            </Flex>
            <Flex pt="10px" align="center" gap={5}>
              <Image
                src="https://cdn-icons-png.flaticon.com/128/8579/8579387.png"
                w="20px"
              />
              <Text color="#2E475D">Multi-touch revenue attribution</Text>
            </Flex>
            <Flex pt="10px" align="center" gap={5}>
              <Image
                src="https://cdn-icons-png.flaticon.com/128/8579/8579387.png"
                w="20px"
              />
              <Text color="#2E475D">Sandbox Account</Text>
            </Flex>
          </Box>
        </Box>
      </Flex>
      <Box mt="50px" color="#2E475D" fontSize="14px" fontWeight="500">
        <Text>
          For more detailed information on product packaging and the limits that
          apply, please see our Product and Services Catalog here. Price shown
          in USD and subject to applicable tax.
        </Text>
      </Box>
    </>
  );
}
