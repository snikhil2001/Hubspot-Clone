import { Box, Flex, Heading, SimpleGrid, Text, Image } from "@chakra-ui/react";

export default function CustomerCount() {
  return (
    <Flex
      w="1350px"
      m="auto"
      ml="-432px"
      justify="center"
      align="center"
      py={100}
      gap={10}
    >
      <Box textAlign="left">
        <Heading color="#2E475D" pb="20px" fontSize="35px" fontWeight="bold">
          150,000+
        </Heading>
        <Box w="400px">
          <Text fontSize="20px">
            customers in over{" "}
            <Text display="inline" color="#2E475D">
              120
            </Text>{" "}
            countries growing their businesses with HubSpot
          </Text>
        </Box>
      </Box>
      <SimpleGrid gap={8} columns={4}>
        <Box>
          <Image
            src="https://f.hubspotusercontent00.net/hubfs/53/1200px-WWF_logo_svg%20(1).png"
            w="110"
            h="65.22"
          />
        </Box>
        <Box>
          <Image
            mt="10px"
            src="https://f.hubspotusercontent00.net/hubfs/53/trello-logo-blue%20(1).png"
            w="110"
            h="33.88"
          />
        </Box>
        <Box>
          <Image
            src="https://www.hubspot.com/hubfs/Reddit%20Logo%20for%20HS%20website%20(1).png"
            w="110"
            h="49.3"
          />
        </Box>
        <Box>
          <Image
            src="https://www.hubspot.com/hubfs/WW%20Logo%20for%20HS%20Website%20(2).png"
            w="110"
            h="49.3"
          />
        </Box>
        <Box>
          <Image
            mt="25px"
            src="https://f.hubspotusercontent00.net/hubfs/53/soundcloud.png"
            w="110"
            h="13.16"
          />
        </Box>
        <Box>
          <Image
            src="https://www.hubspot.com/hubfs/Momentive%20Logo%20for%20HS%20website.png"
            w="110"
            h="49.3"
          />
        </Box>
        <Box>
          <Image
            src="https://www.hubspot.com/hubfs/DoorDash%20Logo%20for%20HS%20Website-1.png"
            w="110"
            h="49.3"
          />
        </Box>
        <Box>
          <Image
            src="https://www.hubspot.com/hubfs/Eventbrite%20Logo%20for%20HS%20Website-1.png"
            w="110"
            h="49.3"
          />
        </Box>
      </SimpleGrid>
    </Flex>
  );
}
