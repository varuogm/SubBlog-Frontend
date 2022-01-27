import { Container } from "react-bootstrap";
import ModalComponent from "../Modal/Modal";
import {
  HeroComponent,
  SubHeading,
  Heading,
  ButtonSpace,
  HeaderComponent,
} from "./Hero-style";
// import { motion } from "framer-motion";
// import AnimatedText from "./../Framer-motion/AnimatedText";

const Hero = () => {
  const placeholderText = [{ type: "heading1", text: "Introducing SubBlog" }];
  const container = {
    visible: {
      transition: {
        staggerChildren: 0.07,
      },
    },
  };

  return (
    <HeroComponent>
      <Container>
        <HeaderComponent>
          <Heading>INtoducing Subblog</Heading>
          <SubHeading>
            Grow ,learn and become succesfull by reading some of the top highly
            blogs from reputed authors
          </SubHeading>
          <ButtonSpace>
            <ModalComponent
              text="Sign Up"
              variant="danger"
              isSignupFlow={true}
            />
            <ModalComponent
              text="Login"
              variant="primary"
              isSignupFlow={false}
            />
          </ButtonSpace>
        </HeaderComponent>
      </Container>
    </HeroComponent>
  );
};

export default Hero;
