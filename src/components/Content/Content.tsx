import { useState } from "react";
import { Card, Button, Alert } from "react-bootstrap";
import BasicImage from "../../Assests/BASIC.png";
import StandardImage from "../../Assests/Standard.png";
import PremiumImage from "../../Assests/Premium.png";
import Testemonials from "../Testemonails/Testemonials";
import {
  FaltuSpace,
  Pop,
  AllCards,
  StyledH1,
  StyledH12,
  Para,
  AlertContainer,
} from "../Content/Content-style";
// import { motion } from "framer-motion";
// import AnimatedText from "./../Framer-motion/AnimatedText";

const Content = () => {
  const [show, setShow] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({
      top: 5,
      behavior: "smooth",
    });
    setShow(false);
  };
  // const placeholderText = [
  //   {
  //     type: "heading1",
  //     text: " Do you know how many bloggers sleep empty stomach?",
  //   },
  // ];
  // const container = {
  //   visible: {
  //     transition: {
  //       staggerChildren: 0.007,
  //     },
  //   },
  // };

  return (
    <div>
      <FaltuSpace />
      {/* <motion.div
        className="App"
        initial="hidden"
        animate={"visible"}
        variants={container}
      >
        <div className="container">
          {placeholderText.map((item, index) => {
            return <AnimatedText {...item} key={index} />;
          })}
        </div>
      </motion.div> */}

      <h1 style={{ padding: "2rem", color: "black" }}>
        Do you know how many bloggers sleep empty stomach?
      </h1>
      <Pop>
        Open source blogging , free recommendaioons are all cool but at some
        extent . They are not going to fulfill your materialistic needs you need
        some monetizations method to generate reveneue for your hard earned
        written blogs. Dont you??
      </Pop>
      <StyledH1
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "2rem",
          color: "white",
          marginTop: "7rem",
          flexDirection: "column",
        }}
      >
        Introducing Subscption blogs app
      </StyledH1>

      {/* cards */}
      <AllCards>
        <Card
          style={{
            width: "24rem",
          }}
        >
          <Card.Img variant="top" src={BasicImage} />
          <Card.Body
            style={{ display: "flex", flexDirection: "column", gap: "1.1rem" }}
          >
            <Card.Title className="PlanTitle">
              <h1>Basic</h1>
            </Card.Title>
            <Card.Text>
              Start with the Basic plan. not much but honest work.not much to
              boast.sasta cool plan
              <br style={{ paddingBottom: "1.2rem" }} />
              <Para style={{ paddingTop: "1.2rem" }}>
                Includes : Access to{" "}
                <span style={{ color: "blue" }}>Basic</span> articles
              </Para>
            </Card.Text>
            <Button variant="dark" onClick={() => setShow(true)}>
              Buy
            </Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "24rem" }}>
          <Card.Img variant="top" src={StandardImage} />
          <Card.Body
            style={{ display: "flex", flexDirection: "column", gap: "1.1rem" }}
          >
            <Card.Title className="PlanTitle">
              <h1>Standard</h1>
            </Card.Title>
            <Card.Text>
              Pocket friendly cute standard plan.fayde ki baat hai lelo .sabse
              badhiya plans for intermediate users.
              <br style={{ paddingBottom: "1.2rem" }} />
              <Para>
                Includes : Access to articles (
                <span style={{ color: "blue" }}>basic</span> +
                <span style={{ color: "green" }}> standard </span> )
              </Para>
            </Card.Text>
            <Button variant="dark" onClick={() => setShow(true)}>
              Buy
            </Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "24rem" }}>
          <Card.Img variant="top" src={PremiumImage} />
          <Card.Body
            style={{ display: "flex", flexDirection: "column", gap: "1.1rem" }}
          >
            <Card.Title className="PlanTitle">
              <h1> Premium</h1>
            </Card.Title>
            <Card.Text>
              Saving the best for our premium users. everything unlocked. full
              refund no questions asked!!
              <br style={{ paddingBottom: "1.2rem" }} />
              <Para>
                Includes : full access to all articles{" "}
                <span style={{ color: "blue" }}>basic</span> +{" "}
                <span style={{ color: "green" }}> standard </span> +
                <span style={{ color: "red" }}> Premium </span>
              </Para>
            </Card.Text>
            <Button variant="dark" onClick={() => setShow(true)}>
              Buy
            </Button>
          </Card.Body>
        </Card>
      </AllCards>
      <AlertContainer>
        <Alert show={show} variant="success">
          <Alert.Heading>
            You need to Login or Signup first Before Purchasing!
          </Alert.Heading>
          <p
            onClick={scrollToTop}
            style={{
              color: "purple",
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
            }}
          >
            Click me ! I'll take you there 😊
          </p>
        </Alert>

        {!show && <div>Terms and conditions applied</div>}
      </AlertContainer>
      {/* <FaltuSpace /> */}

      <hr
        style={{
          marginTop: "2.5rem",
          borderTop: "3px solid #bbb",
        }}
      />
      <StyledH12>What our valuable customers say</StyledH12>
      <Testemonials />
    </div>
  );
};

export default Content;
