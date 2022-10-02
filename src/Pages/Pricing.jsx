import Navbar1 from "../Components/Home/Navbar1";
import Navbar2 from "../Components/Home/Navbar2";
import { Container } from "@chakra-ui/react";
import GrowBetter from "../Components/Pricing/GrowBetter";
import Footer from "../Components/Home/Footer";

export default function Pricing() {
  return (
    <Container>
      <Navbar1 />
      <Navbar2 />
      <GrowBetter />
      <Footer />
    </Container>
  );
}
