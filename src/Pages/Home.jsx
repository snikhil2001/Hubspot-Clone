// import AllRoutes from "../Components/AllRoutes";
import Navbar1 from "../Components/Home/Navbar1";
import Navbar2 from "../Components/Home/Navbar2";
import { Container } from "@chakra-ui/react";
import LearnMore from "../Components/Home/LearnMore";
import HomeBanner from "../Components/Home/HomeBanner";
import Membership from "../Components/Home/Membership";

export default function Home() {
  return (
    <Container>
      <Navbar1 />
      <Navbar2 />
      <LearnMore />
      <HomeBanner />
      <Membership />
    </Container>
  );
}
