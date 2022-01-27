import { Accordion } from "react-bootstrap";
import THinkImage from "../../Assests/thinking.png";
import Footer from "../Footer/Footer";
import { Topper, ImageBox, AccordianBox, FaltuSpace } from "./Faq-style";

const Faq = () => {
  return (
    <div style={{ backgroundColor: "white" }}>
      <Topper>
        <h1>Frequntly Asked Questions</h1>
        <ImageBox>
          <img src={THinkImage} />
        </ImageBox>
        <hr />
        <AccordianBox>
          <Accordion defaultActiveKey="0" flush>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <h3>About the App </h3>
              </Accordion.Header>
              <Accordion.Body>
                <h5>
                  This is a reted to promote best blogs in the market by
                  supplying them in a ubscription baisis
                </h5>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                <h3> Plans queries </h3>
              </Accordion.Header>
              <Accordion.Body>
                There are three plans to choose from
                <b>
                  <i> Premium </i>
                </b>
                ,
                <b>
                  <i> Basic </i>
                </b>
                ,
                <b>
                  <i> Standard </i>
                </b>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                <h3> Subscription related queries </h3>
              </Accordion.Header>
              <Accordion.Body>
                Drop your queries on <b>2018pcecsgourav59@poornima.org </b> for
                better assitance
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </AccordianBox>
        <FaltuSpace />
      </Topper>
      <div style={{ marginTop: "35rem" }}>
        <Footer />
      </div>
    </div>
  );
};

export default Faq;
