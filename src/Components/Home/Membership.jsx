import { Box, Button, Flex, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import MembershipHub from "./MembershipHub";

const membership = [
  {
    src: "https://cdn-icons-png.flaticon.com/128/3649/3649458.png",
    heading: "Membership Hub",
    text: "Marketing software to help you grow traffic, convert more visitors, and run complete inbound marketing campaigns at scale.",
    link1: "Lead Generation",
    link2: "Marketing Automation",
    link3: "Analytics",
    navigate: "/marketinghub",
  },
  {
    src: "https://cdn-icons-png.flaticon.com/128/7422/7422064.png",
    heading: "Sales Hub",
    text: "Sales CRM software to help you get deeper insights into prospects, automate the tasks you hate, and close more deals faster.",
    link1: "Advanced CRM",
    link2: "Meeting Scheduling",
    link3: "Payments",
    navigate: "/saleshub",
  },
  {
    src: "https://cdn-icons-png.flaticon.com/128/7422/7422064.png",
    heading: "Service Hub",
    text: "Customer service software to help you connect with customers, exceed expectations, and turn them into promoters who grow your business.",
    link1: "Tickets",
    link2: "Customer Feedback",
    link3: "Knowledge Base",
  },

  {
    src: "https://cdn-icons-png.flaticon.com/128/7465/7465712.png",
    heading: "CMS Hub",
    text: "Content management software that’s flexible for marketers, powerful for developers, and gives customers a personalized, secure experience.",
    link1: "Drag and Drop Editor",
    link2: "SEO Recommendations",
    link3: "Website themes",
  },
  {
    src: "https://cdn-icons-png.flaticon.com/128/2956/2956958.png",
    heading: "Operations Hub",
    text: "Operations software that syncs your apps, cleans and curates customer data, and automates processes — so all your systems and teams work better together.",
    link1: "Data Sync",
    link2: "Programmable Automation",
    link3: "Data Quality & Automation",
  },
];

export default function Membership() {
  return (
    <Box py={100} ml="-432px" bgColor="#F6F9F6" w="1350px">
      <Heading textAlign="center">
        The CRM Platform Your Whole Business Will Love
      </Heading>
      <Box fontSize="18px" m="auto" w="800px">
        <Text pt="50px" color="grey">
          HubSpot’s CRM platform has all the tools and integrations you need for
          marketing, sales, content management, and customer service. Each
          product in the platform is powerful alone, but the real magic happens
          when you use them together.
        </Text>
      </Box>
      <Flex pt="40px" justify="center" gap={5}>
        <Button
          p="20px 40px"
          borderRadius="5px"
          bgColor="#ff5c35"
          color="white"
          _hover={{ backgroundColor: "#ffcec2" }}
        >
          Get Free CRM
        </Button>
        <Button
          p="20px 40px"
          borderRadius="5px"
          borderColor="#ff5c35"
          color="#ff5c35"
          _hover={{ backgroundColor: "#ffebe6" }}
        >
          Demo Premium CRM
        </Button>
      </Flex>
      <SimpleGrid m="auto" gap={7} w="1200px" mt="50px" columns={3}>
        {membership.map((el) => {
          return (
            <MembershipHub
              src={el.src}
              heading={el.heading}
              text={el.text}
              link1={el.link1}
              link2={el.link2}
              link3={el.link3}
              navigate={el.navigate}
            />
          );
        })}
      </SimpleGrid>
    </Box>
  );
}
