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
              <Link
                href="https://www.hubspot.com/products/sales/schedule-meeting?__hstc=185665590.02de52fc46b9876a7c8be911774ae1f4.1664300299276.1664300299276.1664300299276.1&__hssc=185665590.5557.1664732078943&__hsfp=4080244219&_ga=2.123069320.2062048943.1664300300-1540596056.1664300300&hubs_content=www.hubspot.com/&hubs_content-cta=Free%20Meeting%20Scheduler%20App"
                fontSize="14px"
                color="#b6c7d6"
                pb="20px"
                display="block"
              >
                Free Meeting Schedular App
              </Link>
              <Link
                fontSize="14px"
                color="#b6c7d6"
                pb="20px"
                display="block"
                href="https://www.hubspot.com/products/marketing/social-inbox?__hstc=185665590.02de52fc46b9876a7c8be911774ae1f4.1664300299276.1664300299276.1664300299276.1&__hssc=185665590.5557.1664732078943&__hsfp=4080244219&_ga=2.123069320.2062048943.1664300300-1540596056.1664300300&hubs_content=www.hubspot.com/&hubs_content-cta=Social%20Media%20Tools"
              >
                Social Media Tools
              </Link>
              <Link
                fontSize="14px"
                color="#b6c7d6"
                pb="20px"
                display="block"
                href="https://www.hubspot.com/products/sales/email-tracking?__hstc=185665590.02de52fc46b9876a7c8be911774ae1f4.1664300299276.1664300299276.1664300299276.1&__hssc=185665590.5557.1664732078943&__hsfp=4080244219&_ga=2.123069320.2062048943.1664300300-1540596056.1664300300&hubs_content=www.hubspot.com/&hubs_content-cta=Email%20Tracking%20Software"
              >
                Email Tracking Software
              </Link>
              <Link
                fontSize="14px"
                color="#b6c7d6"
                pb="20px"
                display="block"
                href="https://www.hubspot.com/products/sales/sales-automation?__hstc=185665590.02de52fc46b9876a7c8be911774ae1f4.1664300299276.1664300299276.1664300299276.1&__hssc=185665590.5557.1664732078943&__hsfp=4080244219&_ga=2.123069320.2062048943.1664300300-1540596056.1664300300&hubs_content=www.hubspot.com/&hubs_content-cta=Sales%20Email%20Automation"
              >
                Sales Email Automation
              </Link>
              <Link
                href="https://www.hubspot.com/products/marketing/ads?__hstc=185665590.02de52fc46b9876a7c8be911774ae1f4.1664300299276.1664300299276.1664300299276.1&__hssc=185665590.5557.1664732078943&__hsfp=4080244219&_ga=2.123069320.2062048943.1664300300-1540596056.1664300300&hubs_content=www.hubspot.com/&hubs_content-cta=Ads%20Software"
                fontSize="14px"
                color="#b6c7d6"
                pb="20px"
                display="block"
              >
                Ads Software
              </Link>
              <Link
                href="https://www.hubspot.com/products/marketing/email?__hstc=185665590.02de52fc46b9876a7c8be911774ae1f4.1664300299276.1664300299276.1664300299276.1&__hssc=185665590.5557.1664732078943&__hsfp=4080244219&_ga=2.123069320.2062048943.1664300300-1540596056.1664300300&hubs_content=www.hubspot.com/&hubs_content-cta=Email%20Marketing%20Software"
                fontSize="14px"
                color="#b6c7d6"
                pb="20px"
                display="block"
              >
                Email Marketing Software
              </Link>
              <Link
                href="https://www.hubspot.com/products/crm/lead-management?__hstc=185665590.02de52fc46b9876a7c8be911774ae1f4.1664300299276.1664300299276.1664300299276.1&__hssc=185665590.5557.1664732078943&__hsfp=4080244219&_ga=2.123069320.2062048943.1664300300-1540596056.1664300300&hubs_content=www.hubspot.com/&hubs_content-cta=Lead%20Management%20Software"
                fontSize="14px"
                color="#b6c7d6"
                pb="20px"
                display="block"
              >
                Lead Management Software
              </Link>
              <Link
                href="https://www.hubspot.com/products/crm/pipeline-management?__hstc=185665590.02de52fc46b9876a7c8be911774ae1f4.1664300299276.1664300299276.1664300299276.1&__hssc=185665590.5557.1664732078943&__hsfp=4080244219&_ga=2.123069320.2062048943.1664300300-1540596056.1664300300&hubs_content=www.hubspot.com/&hubs_content-cta=Pipeline%20Management%20Tools"
                fontSize="14px"
                color="#b6c7d6"
                pb="20px"
                display="block"
              >
                Pipeline Management Tools
              </Link>
              <Link
                href="https://www.hubspot.com/products/cms/drag-and-drop-website-builder?__hstc=185665590.02de52fc46b9876a7c8be911774ae1f4.1664300299276.1664300299276.1664300299276.1&__hssc=185665590.5557.1664732078943&__hsfp=4080244219&_ga=2.123069320.2062048943.1664300300-1540596056.1664300300&hubs_content=www.hubspot.com/&hubs_content-cta=Free%20Website%20Builder"
                fontSize="14px"
                color="#b6c7d6"
                pb="20px"
              >
                Free Website Builder
              </Link>
            </Box>
          </Box>
          <Box mt="50px" textAlign="left">
            <Link
              href="https://www.hubspot.com/products/sales/email-templates-sales?__hstc=185665590.02de52fc46b9876a7c8be911774ae1f4.1664300299276.1664300299276.1664300299276.1&__hssc=185665590.5557.1664732078943&__hsfp=4080244219&_ga=2.123069320.2062048943.1664300300-1540596056.1664300300&hubs_content=www.hubspot.com/&hubs_content-cta=Sales%20Email%20Templates"
              fontSize="14px"
              color="#b6c7d6"
              pb="20px"
              display="block"
            >
              Sales Email Templates
            </Link>
            <Link
              href="https://www.hubspot.com/products/service/help-desk?__hstc=185665590.02de52fc46b9876a7c8be911774ae1f4.1664300299276.1664300299276.1664300299276.1&__hssc=185665590.5557.1664732078943&__hsfp=4080244219&_ga=2.123069320.2062048943.1664300300-1540596056.1664300300&hubs_content=www.hubspot.com/&hubs_content-cta=Help%20Desk%20Software"
              fontSize="14px"
              color="#b6c7d6"
              pb="20px"
              display="block"
            >
              Help Desk Software
            </Link>
            <Link
              href="https://www.hubspot.com/products/marketing/forms?__hstc=185665590.02de52fc46b9876a7c8be911774ae1f4.1664300299276.1664300299276.1664300299276.1&__hssc=185665590.5557.1664732078943&__hsfp=4080244219&_ga=2.123069320.2062048943.1664300300-1540596056.1664300300&hubs_content=www.hubspot.com/&hubs_content-cta=Free%20Online%20Form%20Builder"
              fontSize="14px"
              color="#b6c7d6"
              pb="20px"
              display="block"
            >
              Free Online Form Builder
            </Link>
            <Link
              href="https://www.hubspot.com/products/crm/chatbot-builder?__hstc=185665590.02de52fc46b9876a7c8be911774ae1f4.1664300299276.1664300299276.1664300299276.1&__hssc=185665590.5557.1664732078943&__hsfp=4080244219&_ga=2.123069320.2062048943.1664300300-1540596056.1664300300&hubs_content=www.hubspot.com/&hubs_content-cta=Free%20Chatbot%20Builder"
              fontSize="14px"
              color="#b6c7d6"
              pb="20px"
              display="block"
            >
              Free Chatbot Builder
            </Link>
            <Link
              href="https://www.hubspot.com/products/crm/live-chat?__hstc=185665590.02de52fc46b9876a7c8be911774ae1f4.1664300299276.1664300299276.1664300299276.1&__hssc=185665590.5557.1664732078943&__hsfp=4080244219&_ga=2.123069320.2062048943.1664300300-1540596056.1664300300&hubs_content=www.hubspot.com/&hubs_content-cta=Free%20Live%20Chat%20Software"
              fontSize="14px"
              color="#b6c7d6"
              pb="20px"
              display="block"
            >
              Free Live Chat Software
            </Link>
            <Link
              href="https://www.hubspot.com/products/marketing/analytics?__hstc=185665590.02de52fc46b9876a7c8be911774ae1f4.1664300299276.1664300299276.1664300299276.1&__hssc=185665590.5557.1664732078943&__hsfp=4080244219&_ga=2.123069320.2062048943.1664300300-1540596056.1664300300&hubs_content=www.hubspot.com/&hubs_content-cta=Marketing%20Analytics"
              fontSize="14px"
              color="#b6c7d6"
              pb="20px"
              display="block"
            >
              Marketing Analytics
            </Link>
            <Link
              href="https://www.hubspot.com/products/marketing/landing-pages?__hstc=185665590.02de52fc46b9876a7c8be911774ae1f4.1664300299276.1664300299276.1664300299276.1&__hssc=185665590.5557.1664732078943&__hsfp=4080244219&_ga=2.123069320.2062048943.1664300300-1540596056.1664300300&hubs_content=www.hubspot.com/&hubs_content-cta=Free%20Landing%20Page%20Builder"
              fontSize="14px"
              color="#b6c7d6"
              pb="20px"
              display="block"
            >
              Free Landing Page Builder
            </Link>
            <Link
              href="https://www.hubspot.com/products/cms/web-hosting?__hstc=185665590.02de52fc46b9876a7c8be911774ae1f4.1664300299276.1664300299276.1664300299276.1&__hssc=185665590.5557.1664732078943&__hsfp=4080244219&_ga=2.123069320.2062048943.1664300300-1540596056.1664300300&hubs_content=www.hubspot.com/&hubs_content-cta=Free%20Web%20Hosting"
              fontSize="14px"
              color="#b6c7d6"
              pb="20px"
              display="block"
            >
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
          <Link
            href="https://website.grader.com/?__hstc=20629287.02de52fc46b9876a7c8be911774ae1f4.1664300299276.1664726847073.1664732078943.29&__hssc=20629287.5.5585558555855584e+23.1664732078943&__hsfp=4080244219&_ga=2.123069320.2062048943.1664300300-1540596056.1664300300"
            fontSize="14px"
            color="#b6c7d6"
            pb="20px"
            display="block"
          >
            Website Grader
          </Link>
          <Link
            fontSize="14px"
            color="#b6c7d6"
            pb="20px"
            display="block"
            href="https://www.hubspot.com/make-my-persona?__hstc=185665590.02de52fc46b9876a7c8be911774ae1f4.1664300299276.1664300299276.1664300299276.1&__hssc=185665590.5557.1664732078943&__hsfp=4080244219&_ga=2.123069320.2062048943.1664300300-1540596056.1664300300"
          >
            Make my persona
          </Link>
          <Link
            href="https://www.hubspot.com/email-signature-generator?__hstc=185665590.02de52fc46b9876a7c8be911774ae1f4.1664300299276.1664300299276.1664300299276.1&__hssc=185665590.5557.1664732078943&__hsfp=4080244219&_ga=2.123069320.2062048943.1664300300-1540596056.1664300300"
            fontSize="14px"
            color="#b6c7d6"
            pb="20px"
            display="block"
          >
            Email Signature Generator
          </Link>
          <Link
            href="https://www.hubspot.com/blog-topic-generator?__hstc=185665590.02de52fc46b9876a7c8be911774ae1f4.1664300299276.1664300299276.1664300299276.1&__hssc=185665590.5557.1664732078943&__hsfp=4080244219&_ga=2.123069320.2062048943.1664300300-1540596056.1664300300"
            fontSize="14px"
            color="#b6c7d6"
            pb="20px"
            display="block"
          >
            Blog Ideas Generator
          </Link>
          <Link
            href="https://www.hubspot.com/invoice-template-generator?__hstc=185665590.02de52fc46b9876a7c8be911774ae1f4.1664300299276.1664300299276.1664300299276.1&__hssc=185665590.5557.1664732078943&__hsfp=4080244219&_ga=2.123069320.2062048943.1664300300-1540596056.1664300300"
            fontSize="14px"
            color="#b6c7d6"
            pb="20px"
            display="block"
          >
            Invoice Template Generator
          </Link>
          <Link
            href="https://www.hubspot.com/marketing-plan-template-generator?__hstc=185665590.02de52fc46b9876a7c8be911774ae1f4.1664300299276.1664300299276.1664300299276.1&__hssc=185665590.5557.1664732078943&__hsfp=4080244219&_ga=2.123069320.2062048943.1664300300-1540596056.1664300300"
            fontSize="14px"
            color="#b6c7d6"
            pb="20px"
            display="block"
          >
            Marketing Plan Generator
          </Link>
          <Link
            href="https://www.hubspot.com/business-templates?__hstc=185665590.02de52fc46b9876a7c8be911774ae1f4.1664300299276.1664300299276.1664300299276.1&__hssc=185665590.5557.1664732078943&__hsfp=4080244219&_ga=2.123069320.2062048943.1664300300-1540596056.1664300300"
            fontSize="14px"
            color="#b6c7d6"
            pb="20px"
            display="block"
          >
            Free Business Templates
          </Link>
          <Link
            href="https://www.hubspot.com/industry-data?__hstc=185665590.02de52fc46b9876a7c8be911774ae1f4.1664300299276.1664300299276.1664300299276.1&__hssc=185665590.5557.1664732078943&__hsfp=4080244219&_ga=2.123069320.2062048943.1664300300-1540596056.1664300300"
            fontSize="14px"
            color="#b6c7d6"
            pb="20px"
            display="block"
          >
            Industry Benchmark Data{" "}
          </Link>
          <Link
            href="https://www.hubspot.com/comparisons?__hstc=185665590.02de52fc46b9876a7c8be911774ae1f4.1664300299276.1664300299276.1664300299276.1&__hssc=185665590.5557.1664732078943&__hsfp=4080244219&_ga=2.123069320.2062048943.1664300300-1540596056.1664300300&hubs_content=www.hubspot.com/&hubs_content-cta=Software%20Comparisons%20Library"
            fontSize="14px"
            color="#b6c7d6"
            pb="20px"
            display="block"
          >
            Software Comparisons
          </Link>
          <Link
            fontSize="14px"
            color="#b6c7d6"
            pb="20px"
            display="block"
            href="https://www.hubspot.com/comparisons?__hstc=185665590.02de52fc46b9876a7c8be911774ae1f4.1664300299276.1664300299276.1664300299276.1&__hssc=185665590.5557.1664732078943&__hsfp=4080244219&_ga=2.123069320.2062048943.1664300300-1540596056.1664300300&hubs_content=www.hubspot.com/&hubs_content-cta=Software%20Comparisons%20Library"
          >
            Library
          </Link>
          <Link
            href="https://ecosystem.hubspot.com/marketplace/website?__hstc=185665590.02de52fc46b9876a7c8be911774ae1f4.1664300299276.1664300299276.1664300299276.1&__hssc=185665590.5557.1664732078943&__hsfp=4080244219&_ga=2.186575786.2062048943.1664300300-1540596056.1664300300"
            fontSize="14px"
            color="#b6c7d6"
            pb="20px"
            display="block"
          >
            Website Themes & Templates
          </Link>
        </Box>
        <Box textAlign="left">
          <Heading fontSize="18px" color="white" pb="30px">
            Company
          </Heading>
          <Link
            href="https://www.hubspot.com/our-story?__hstc=185665590.02de52fc46b9876a7c8be911774ae1f4.1664300299276.1664300299276.1664300299276.1&__hssc=185665590.5557.1664732078943&__hsfp=4080244219&_ga=2.123069320.2062048943.1664300300-1540596056.1664300300"
            fontSize="14px"
            color="#b6c7d6"
            pb="20px"
            display="block"
          >
            About US
          </Link>
          <Link
            href="https://www.hubspot.com/careers?__hstc=185665590.02de52fc46b9876a7c8be911774ae1f4.1664300299276.1664300299276.1664300299276.1&__hssc=185665590.5557.1664732078943&__hsfp=4080244219&_ga=2.123069320.2062048943.1664300300-1540596056.1664300300"
            fontSize="14px"
            color="#b6c7d6"
            pb="20px"
            display="block"
          >
            Careers
          </Link>
          <Link
            href="https://www.hubspot.com/company/management?__hstc=185665590.02de52fc46b9876a7c8be911774ae1f4.1664300299276.1664300299276.1664300299276.1&__hssc=185665590.5557.1664732078943&__hsfp=4080244219&_ga=2.123069320.2062048943.1664300300-1540596056.1664300300"
            fontSize="14px"
            color="#b6c7d6"
            pb="20px"
            display="block"
          >
            Management Team
          </Link>
          <Link
            href="https://www.hubspot.com/company/board-of-directors?__hstc=185665590.02de52fc46b9876a7c8be911774ae1f4.1664300299276.1664300299276.1664300299276.1&__hssc=185665590.5557.1664732078943&__hsfp=4080244219&_ga=2.123069320.2062048943.1664300300-1540596056.1664300300"
            fontSize="14px"
            color="#b6c7d6"
            pb="20px"
            display="block"
          >
            Board Of Directors
          </Link>
          <Link
            href="https://ir.hubspot.com/?__hstc=185665590.02de52fc46b9876a7c8be911774ae1f4.1664300299276.1664300299276.1664300299276.1&__hssc=185665590.5557.1664732078943&__hsfp=4080244219&_ga=2.123733769.2062048943.1664300300-1540596056.1664300300"
            fontSize="14px"
            color="#b6c7d6"
            pb="20px"
            display="block"
          >
            Investor Relations
          </Link>
          <Link
            href="https://blog.hubspot.com/?__hstc=185665590.02de52fc46b9876a7c8be911774ae1f4.1664300299276.1664300299276.1664300299276.1&__hssc=185665590.5557.1664732078943&__hsfp=4080244219&_ga=2.123733769.2062048943.1664300300-1540596056.1664300300"
            fontSize="14px"
            color="#b6c7d6"
            pb="20px"
            display="block"
          >
            Blog
          </Link>
        </Box>
        <Box>
          <Box pb="100px">
            <Heading fontSize="18px" color="white" pb="30px">
              Customers
            </Heading>
            <Link
              href="https://help.hubspot.com/?__hstc=185665590.02de52fc46b9876a7c8be911774ae1f4.1664300299276.1664300299276.1664300299276.1&__hssc=185665590.5557.1664732078943&__hsfp=4080244219&_ga=2.123612168.2062048943.1664300300-1540596056.1664300300"
              fontSize="14px"
              color="#b6c7d6"
              pb="20px"
              display="block"
            >
              Customer Support
            </Link>
            <Link
              href="https://www.hubspot.com/hubspot-user-groups?__hstc=185665590.02de52fc46b9876a7c8be911774ae1f4.1664300299276.1664300299276.1664300299276.1&__hssc=185665590.5557.1664732078943&__hsfp=4080244219&_ga=2.123069320.2062048943.1664300300-1540596056.1664300300"
              fontSize="14px"
              color="#b6c7d6"
              pb="20px"
              display="block"
            >
              Join a Local User Group
            </Link>
          </Box>
          <Box>
            <Heading fontSize="18px" color="white" pb="30px">
              Partners
            </Heading>
            <Link
              href="https://www.hubspot.com/partners?__hstc=185665590.02de52fc46b9876a7c8be911774ae1f4.1664300299276.1664300299276.1664300299276.1&__hssc=185665590.5557.1664732078943&__hsfp=4080244219&_ga=2.123069320.2062048943.1664300300-1540596056.1664300300"
              fontSize="14px"
              color="#b6c7d6"
              pb="20px"
              display="block"
            >
              All Partner Programs
            </Link>
            <Link
              href="https://www.hubspot.com/partners/solutions?__hstc=185665590.02de52fc46b9876a7c8be911774ae1f4.1664300299276.1664300299276.1664300299276.1&__hssc=185665590.5557.1664732078943&__hsfp=4080244219&_ga=2.123069320.2062048943.1664300300-1540596056.1664300300"
              fontSize="14px"
              color="#b6c7d6"
              pb="20px"
              display="block"
            >
              Solution Partner Program
            </Link>
            <Link
              href="https://www.hubspot.com/partners/app?__hstc=185665590.02de52fc46b9876a7c8be911774ae1f4.1664300299276.1664300299276.1664300299276.1&__hssc=185665590.5557.1664732078943&__hsfp=4080244219&_ga=2.123069320.2062048943.1664300300-1540596056.1664300300"
              fontSize="14px"
              color="#b6c7d6"
              pb="20px"
              display="block"
            >
              App Partner Program
            </Link>
            <Link
              href="https://www.hubspot.com/startups/partners?__hstc=185665590.02de52fc46b9876a7c8be911774ae1f4.1664300299276.1664300299276.1664300299276.1&__hssc=185665590.5557.1664732078943&__hsfp=4080244219&_ga=2.123069320.2062048943.1664300300-1540596056.1664300300"
              fontSize="14px"
              color="#b6c7d6"
              pb="20px"
              display="block"
            >
              Hubspot for Startups
            </Link>
            <Link
              href="https://www.hubspot.com/partners/affiliates?__hstc=185665590.02de52fc46b9876a7c8be911774ae1f4.1664300299276.1664300299276.1664300299276.1&__hssc=185665590.5557.1664732078943&__hsfp=4080244219&_ga=2.123069320.2062048943.1664300300-1540596056.1664300300"
              fontSize="14px"
              color="#b6c7d6"
              pb="20px"
              display="block"
            >
              Affiliate Program
            </Link>
          </Box>
        </Box>
      </Flex>
      <Flex align="center" justify="space-between">
        <Divider w="350px" orientation="horizontal" />
        <Flex align="center" gap={6}>
          <Link href="https://www.facebook.com/hubspot?__hstc=185665590.02de52fc46b9876a7c8be911774ae1f4.1664300299276.1664300299276.1664300299276.1&__hssc=185665590.5557.1664732078943&__hsfp=4080244219&_ga=2.123069320.2062048943.1664300300-1540596056.1664300300">
            <Image
              src="https://cdn-icons-png.flaticon.com/128/3128/3128304.png"
              w="40px"
            />
          </Link>
          <Link href="https://www.instagram.com/hubspot/?__hstc=185665590.02de52fc46b9876a7c8be911774ae1f4.1664300299276.1664300299276.1664300299276.1&__hssc=185665590.5557.1664732078943&__hsfp=4080244219&_ga=2.123069320.2062048943.1664300300-1540596056.1664300300">
            <Image
              src="https://cdn-icons-png.flaticon.com/128/207/207082.png"
              w="40px"
            />
          </Link>
          <Link href="https://youtube.com/user/HubSpot?__hstc=185665590.02de52fc46b9876a7c8be911774ae1f4.1664300299276.1664300299276.1664300299276.1&__hssc=185665590.5557.1664732078943&__hsfp=4080244219&_ga=2.123069320.2062048943.1664300300-1540596056.1664300300">
            <Image
              src="https://cdn-icons-png.flaticon.com/128/747/747627.png"
              w="40px"
            />
          </Link>
          <Link href="https://twitter.com/HubSpot?__hstc=185665590.02de52fc46b9876a7c8be911774ae1f4.1664300299276.1664300299276.1664300299276.1&__hssc=185665590.5557.1664732078943&__hsfp=4080244219&_ga=2.123069320.2062048943.1664300300-1540596056.1664300300">
            <Image
              src="https://cdn-icons-png.flaticon.com/128/4926/4926492.png"
              w="40px"
            />
          </Link>
          <Link href="https://www.linkedin.com/company/hubspot?__hstc=185665590.02de52fc46b9876a7c8be911774ae1f4.1664300299276.1664300299276.1664300299276.1&__hssc=185665590.5557.1664732078943&__hsfp=4080244219&_ga=2.123069320.2062048943.1664300300-1540596056.1664300300">
            <Image
              src="https://cdn-icons-png.flaticon.com/128/4926/4926502.png"
              w="40px"
            />
          </Link>
          <Link href="https://medium.com/@HubSpot?__hstc=185665590.02de52fc46b9876a7c8be911774ae1f4.1664300299276.1664300299276.1664300299276.1&__hssc=185665590.5557.1664732078943&__hsfp=4080244219&_ga=2.123069320.2062048943.1664300300-1540596056.1664300300">
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
