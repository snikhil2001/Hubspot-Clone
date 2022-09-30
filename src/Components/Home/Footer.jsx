import {
  Flex,
  Heading,
  Box,
  Link,
  Divider,
  Center,
  Image,
} from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box
      px={100}
      w="1350px"
      ml="-432px"
      bgColor="#213343"
      justify="space-between"
      py={50}
    >
      <Flex
        // px={100}
        // w="1350px"
        // bgColor="#213343"
        justify="space-between"
        pb="50px"
      >
        <Flex gap={20}>
          <Box>
            <Heading pb="30px" fontSize="18px" color="white">
              Popular Features
            </Heading>
            <Box textAlign="left">
              <Link fontSize="14px" color="#b6c7d6" pb="20px" display="block">
                Free Meeting Schedular App
              </Link>
              <Link fontSize="14px" color="#b6c7d6" pb="20px" display="block">
                Social Media Tools
              </Link>
              <Link fontSize="14px" color="#b6c7d6" pb="20px" display="block">
                Email Tracking Software
              </Link>
              <Link fontSize="14px" color="#b6c7d6" pb="20px" display="block">
                Sales Email Automation
              </Link>
              <Link fontSize="14px" color="#b6c7d6" pb="20px" display="block">
                Ads Software
              </Link>
              <Link fontSize="14px" color="#b6c7d6" pb="20px" display="block">
                Email Marketing Software
              </Link>
              <Link fontSize="14px" color="#b6c7d6" pb="20px" display="block">
                Lead Management Software
              </Link>
              <Link fontSize="14px" color="#b6c7d6" pb="20px" display="block">
                Pipeline Management Tools
              </Link>
              <Link fontSize="14px" color="#b6c7d6" pb="20px">
                Free Website Builder
              </Link>
            </Box>
          </Box>
          <Box mt="50px" textAlign="left">
            <Link fontSize="14px" color="#b6c7d6" pb="20px" display="block">
              Sales Email Templates
            </Link>
            <Link fontSize="14px" color="#b6c7d6" pb="20px" display="block">
              Help Desk Software
            </Link>
            <Link fontSize="14px" color="#b6c7d6" pb="20px" display="block">
              Free Online Form Builder
            </Link>
            <Link fontSize="14px" color="#b6c7d6" pb="20px" display="block">
              Free Chatbot Builder
            </Link>
            <Link fontSize="14px" color="#b6c7d6" pb="20px" display="block">
              Free Live Chat Software
            </Link>
            <Link fontSize="14px" color="#b6c7d6" pb="20px" display="block">
              Marketing Analytics
            </Link>
            <Link fontSize="14px" color="#b6c7d6" pb="20px" display="block">
              Free Landing Page Builder
            </Link>
            <Link fontSize="14px" color="#b6c7d6" pb="20px" display="block">
              Free Web Hosting
            </Link>
          </Box>
        </Flex>
        <Center>
          <Divider orientation="vertical" />
        </Center>
        <Box textAlign="left">
          <Heading fontSize="18px" color="white" pb="30px">
            Free Tools
          </Heading>
          <Link fontSize="14px" color="#b6c7d6" pb="20px" display="block">
            Website Grader
          </Link>
          <Link fontSize="14px" color="#b6c7d6" pb="20px" display="block">
            Make my persona
          </Link>
          <Link fontSize="14px" color="#b6c7d6" pb="20px" display="block">
            Email Signature Generator
          </Link>
          <Link fontSize="14px" color="#b6c7d6" pb="20px" display="block">
            Blog Ideas Generator
          </Link>
          <Link fontSize="14px" color="#b6c7d6" pb="20px" display="block">
            Invoice Template Generator
          </Link>
          <Link fontSize="14px" color="#b6c7d6" pb="20px" display="block">
            Marketing Plan Generator
          </Link>
          <Link fontSize="14px" color="#b6c7d6" pb="20px" display="block">
            Free Business Templates
          </Link>
          <Link fontSize="14px" color="#b6c7d6" pb="20px" display="block">
            Industry Benchmark Data{" "}
          </Link>
          <Link fontSize="14px" color="#b6c7d6" pb="20px" display="block">
            Software Comparisons
          </Link>
          <Link fontSize="14px" color="#b6c7d6" pb="20px" display="block">
            Library
          </Link>
          <Link fontSize="14px" color="#b6c7d6" pb="20px" display="block">
            Website Themes & Templates
          </Link>
        </Box>
        <Box textAlign="left">
          <Heading fontSize="18px" color="white" pb="30px">
            Company
          </Heading>
          <Link fontSize="14px" color="#b6c7d6" pb="20px" display="block">
            About US
          </Link>
          <Link fontSize="14px" color="#b6c7d6" pb="20px" display="block">
            Careers
          </Link>
          <Link fontSize="14px" color="#b6c7d6" pb="20px" display="block">
            Management Team
          </Link>
          <Link fontSize="14px" color="#b6c7d6" pb="20px" display="block">
            Board Of Directors
          </Link>
          <Link fontSize="14px" color="#b6c7d6" pb="20px" display="block">
            Investor Relations
          </Link>
          <Link fontSize="14px" color="#b6c7d6" pb="20px" display="block">
            Blog
          </Link>
        </Box>
        <Box>
          <Box pb="100px">
            <Heading fontSize="18px" color="white" pb="30px">
              Customers
            </Heading>
            <Link fontSize="14px" color="#b6c7d6" pb="20px" display="block">
              Customer Support
            </Link>
            <Link fontSize="14px" color="#b6c7d6" pb="20px" display="block">
              Join a Local User Group
            </Link>
          </Box>
          <Box>
            <Heading fontSize="18px" color="white" pb="30px">
              Partners
            </Heading>
            <Link fontSize="14px" color="#b6c7d6" pb="20px" display="block">
              All Partner Programs
            </Link>
            <Link fontSize="14px" color="#b6c7d6" pb="20px" display="block">
              Solution Partner Program
            </Link>
            <Link fontSize="14px" color="#b6c7d6" pb="20px" display="block">
              App Partner Program
            </Link>
            <Link fontSize="14px" color="#b6c7d6" pb="20px" display="block">
              Hubspot for Startups
            </Link>
            <Link fontSize="14px" color="#b6c7d6" pb="20px" display="block">
              Affiliate Program
            </Link>
          </Box>
        </Box>
      </Flex>
      <Flex align="center" justify="space-between">
        <Divider w="350px" orientation="horizontal" />
        <Flex align="center" gap={6}>
          <Link>
            <Image
              src="https://cdn-icons-png.flaticon.com/128/3128/3128304.png"
              w="40px"
            />
          </Link>
          <Link>
            <Image
              src="https://cdn-icons-png.flaticon.com/128/207/207082.png"
              w="40px"
            />
          </Link>
          <Link>
            <Image
              src="https://cdn-icons-png.flaticon.com/128/747/747627.png"
              w="40px"
            />
          </Link>
          <Link>
            <Image
              src="https://cdn-icons-png.flaticon.com/128/4926/4926492.png"
              w="40px"
            />
          </Link>
          <Link>
            <Image
              src="https://cdn-icons-png.flaticon.com/128/4926/4926502.png"
              w="40px"
            />
          </Link>
          <Link>
            <Image
              src="https://cdn-icons-png.flaticon.com/128/3059/3059989.png  "
              w="40px"
            />
          </Link>
        </Flex>
        <Divider w="350px" orientation="horizontal" />
      </Flex>
    </Box>
  );
}
