import { Heading, SimpleGrid, Box, Text, Image } from "@chakra-ui/react";

export default function Features() {
  return (
    <Box
      ml="-432px"
      h="1000px"
      w="1350px"
      bgGradient="linear(45deg,#0fbfbf,#4fb06d)"
      py={100}
    >
      <Box pb="30px" w="720px" m="auto">
        <Heading color="white">
          Learn and grow with award-winning support and a thriving community
          behind you.
        </Heading>
      </Box>
      <Box w="650px" m="auto">
        <Text color="white">
          You don't have to go it alone. Master the inbound methodology and get
          the most out of your tools with HubSpot's legendary customer support
          team and a community of thousands of marketing and sales pros just
          like you. 150 HubSpot user groups HubSpot Blogs 7M monthly visits
        </Text>
      </Box>
      <SimpleGrid pt="100px" w="1200px" m="auto" columns={4}>
        <Box
          p="20px"
          w="300px"
          textAlign="center"
          borderBottom="1px solid white"
          borderRight="1px solid white"
        >
          <Image
            w="44px"
            h="33px"
            m="auto"
            mb="20px"
            src="https://www.hubspot.com/hubfs/assets/hubspot.com/parrotdad/homepage/homepage_community_agency.svg"
          />
          <Heading mb="20px" fontSize="45px" color="white">
            150+
          </Heading>
          <Heading fontSize="20px" color="white">
            Hubspot user groups
          </Heading>
        </Box>
        <Box
          p="20px"
          w="300px"
          textAlign="center"
          borderBottom="1px solid white"
          borderRight="1px solid white"
        >
          <Image
            w="69px"
            h="33px"
            m="auto"
            mb="20px"
            src="https://www.hubspot.com/hubfs/assets/hubspot.com/parrotdad/homepage/homepage_community_blog.svg"
          />
          <Heading mb="20px" fontSize="45px" color="white">
            7M+
          </Heading>
          <Heading fontSize="20px" color="white">
            monthly visits
          </Heading>
        </Box>
        <Box
          p="20px"
          w="300px"
          textAlign="center"
          borderBottom="1px solid white"
          borderRight="1px solid white"
        >
          <Image
            w="107px"
            h="33px"
            m="auto"
            mb="20px"
            src="https://www.hubspot.com/hubfs/assets/hubspot.com/parrotdad/homepage/homepage_community_academy.svg"
          />
          <Heading mb="20px" fontSize="45px" color="white">
            453K+
          </Heading>
          <Heading fontSize="20px" color="white">
            certified professionals
          </Heading>
        </Box>
        <Box
          p="20px"
          w="300px"
          textAlign="center"
          borderBottom="1px solid white"
        >
          <Image
            w="107px"
            h="33px"
            m="auto"
            mb="20px"
            src="https://www.hubspot.com/hubfs/assets/hubspot.com/parrotdad/homepage/homepage_community_inbound.svg"
          />
          <Heading mb="20px" fontSize="45px" color="white">
            70K
          </Heading>
          <Heading fontSize="20px" color="white">
            registered attendees
          </Heading>
        </Box>
        <Box
          p="20px"
          w="300px"
          textAlign="center"
          borderRight="1px solid white"
        >
          <Image
            w="150px"
            h="39.89px"
            m="auto"
            mb="20px"
            src="https://cdn2.hubspot.net/hubfs/53/HubSpot-App-Marketplace-White.png"
          />
          <Heading mb="20px" fontSize="45px" color="white">
            1160+
          </Heading>
          <Heading fontSize="20px" color="white">
            integrations
          </Heading>
        </Box>
        <Box
          p="20px"
          w="300px"
          textAlign="center"
          borderRight="1px solid white"
        >
          <Image
            w="33px"
            h="33px"
            m="auto"
            mb="20px"
            src="https://www.hubspot.com/hubfs/assets/hubspot.com/parrotdad/homepage/homepage_community_globe.svg"
          />
          <Heading mb="20px" fontSize="45px" color="white">
            6
          </Heading>
          <Heading fontSize="20px" color="white">
            languages
          </Heading>
        </Box>
        <Box
          p="20px"
          w="300px"
          textAlign="center"
          borderRight="1px solid white"
        >
          <Image
            w="34px"
            h="33px"
            m="auto"
            mb="20px"
            src="https://www.hubspot.com/hubfs/assets/hubspot.com/parrotdad/homepage/homepage_community_followers.svg"
          />
          <Heading mb="20px" fontSize="45px" color="white">
            3.1M+
          </Heading>
          <Heading fontSize="20px" color="white">
            social followers
          </Heading>
        </Box>
        <Box p="20px" w="300px" textAlign="center">
          <Image
            w="25px"
            h="20px"
            m="auto"
            mb="20px"
            src="https://cdn2.hubspot.net/hubfs/53/Lists.svg"
          />
          <Heading mb="20px" fontSize="45px" color="white">
            150,000
          </Heading>
          <Heading fontSize="20px" color="white">
            customers
          </Heading>
        </Box>
      </SimpleGrid>
    </Box>
  );
}
