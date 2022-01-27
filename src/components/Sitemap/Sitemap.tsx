import { Accordion } from "react-bootstrap";
import Oops from "../../Assests/thinking.png";

import Footer from "../Footer/Footer";
import { Topper, ImageBox } from "./Sitemap-style";

let COops = "https://i.makeagif.com/media/10-09-2016/itxWvM.gif";

const Faq = () => {
  return (
    <div
    // style={{
    //   display: "flex",
    //   alignItems: "center",
    //   backgroundColor: "white",
    // }}
    >
      <Topper>
        <h1>OOps Map is under construction .come back later</h1>
        <ImageBox>
          <img
            style={{ height: "20rem", width: "35rem", marginLeft: "-7rem" }}
            src={COops}
          />
        </ImageBox>
      </Topper>
      <div style={{ marginTop: "25rem" }}>
        <Footer />
      </div>
    </div>
  );
};

export default Faq;
