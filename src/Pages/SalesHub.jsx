import { Box, Heading, Text, Flex, Divider, Image } from "@chakra-ui/react";

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
          Get Started With Sales Hub®
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
            <Text>
              Free sales CRM tools for the individual salesperson to connect
              with more leads and close more deals.
            </Text>
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
              <Text color="#2E475D">Contact, deal & task management</Text>
            </Flex>
            <Flex pt="10px" align="center" gap={5}>
              <Image
                src="https://cdn-icons-png.flaticon.com/128/8579/8579387.png"
                w="20px"
              />
              <Text color="#2E475D">Email tracking / notifications</Text>
            </Flex>
            <Flex pt="10px" align="center" gap={5}>
              <Image
                src="https://cdn-icons-png.flaticon.com/128/8579/8579387.png"
                w="20px"
              />
              <Text color="#2E475D">Email templates & scheduling</Text>
            </Flex>
            <Flex pt="10px" align="center" gap={5}>
              <Image
                src="https://cdn-icons-png.flaticon.com/128/8579/8579387.png"
                w="20px"
              />
              <Text color="#2E475D">Document sharing</Text>
            </Flex>
            <Flex pt="10px" align="center" gap={5}>
              <Image
                src="https://cdn-icons-png.flaticon.com/128/8579/8579387.png"
                w="20px"
              />
              <Text color="#2E475D">Gmail & Outlook integration</Text>
            </Flex>
            <Flex pt="10px" align="center" gap={5}>
              <Image
                src="https://cdn-icons-png.flaticon.com/128/8579/8579387.png"
                w="20px"
              />
              <Text color="#2E475D">Meeting scheduling</Text>
            </Flex>
            <Flex pt="10px" align="center" gap={5}>
              <Image
                src="https://cdn-icons-png.flaticon.com/128/8579/8579387.png"
                w="20px"
              />
              <Text color="#2E475D">Quotes</Text>
            </Flex>
            <Flex pt="10px" align="center" gap={5}>
              <Image
                src="https://cdn-icons-png.flaticon.com/128/8579/8579387.png"
                w="20px"
              />
              <Text color="#2E475D">Live Chat</Text>
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
            <Text>Premium Edition</Text>
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
              A full suite of sales CRM tools for your whole team to shorten
              deal cycles and increase close rates.
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
              <Text color="#2E475D">Simple automation</Text>
            </Flex>
            <Flex pt="10px" align="center" gap={5}>
              <Image
                src="https://cdn-icons-png.flaticon.com/128/8579/8579387.png"
                w="20px"
              />
              <Text color="#2E475D">Goals</Text>
            </Flex>
            <Flex pt="10px" align="center" gap={5}>
              <Image
                src="https://cdn-icons-png.flaticon.com/128/8579/8579387.png"
                w="20px"
              />
              <Text color="#2E475D">Rep productivity performance</Text>
            </Flex>
            <Box
              mt="20px"
              mb="10px"
              textAlign="left"
              color="#2E475D"
              fontWeight="bold"
              fontSize="18px"
            >
              <Text>Professional (starting at $450/mo.)</Text>
            </Box>
            <Flex pt="10px" justify="center" w="300px" align="center" gap={5}>
              <Image
                src="https://cdn-icons-png.flaticon.com/128/8579/8579387.png"
                w="20px"
              />
              <Text color="#2E475D">
                Deal stage, task, and lead rotation automation
              </Text>
            </Flex>
            <Flex pt="10px" align="center" gap={5}>
              <Image
                src="https://cdn-icons-png.flaticon.com/128/8579/8579387.png"
                w="20px"
              />
              <Text color="#2E475D">Sequences</Text>
            </Flex>
            <Flex pt="10px" align="center" gap={5}>
              <Image
                src="https://cdn-icons-png.flaticon.com/128/8579/8579387.png"
                w="20px"
              />
              <Text color="#2E475D">Custom Reporting</Text>
            </Flex>

            <Box
              mt="20px"
              mb="10px"
              textAlign="left"
              color="#2E475D"
              fontWeight="bold"
              fontSize="18px"
            >
              <Text>Enterprise (starting at $1200/mo.)</Text>
            </Box>
            <Flex pt="10px" align="center" gap={5}>
              <Image
                src="https://cdn-icons-png.flaticon.com/128/8579/8579387.png"
                w="20px"
              />
              <Text color="#2E475D">Custom objects</Text>
            </Flex>
            <Flex pt="10px" align="center" gap={5}>
              <Image
                src="https://cdn-icons-png.flaticon.com/128/8579/8579387.png"
                w="20px"
              />
              <Text color="#2E475D">Predictive lead scoring</Text>
            </Flex>
            <Flex pt="10px" align="center" gap={5}>
              <Image
                src="https://cdn-icons-png.flaticon.com/128/8579/8579387.png"
                w="20px"
              />
              <Text color="#2E475D">Playbooks</Text>
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
