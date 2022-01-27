import { Image1, Image2, Image3, Image4 } from "./Footer-style";

import Boy1 from "./../../Assests/varo.jpeg";
import Boy2 from "./../../Assests/varo2.jpeg";
import girl1 from "./../../Assests/G1.png";
import girl2 from "./../../Assests/G2.png";

const Footer = () => {
  return (
    <div style={{ marginTop: "3rem" }}>
      <footer className="site-footer">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <h6>About</h6>
              <p className="text-justify">
                <i> SubBlog </i> is an initiative to help the upcoming
                programmers with the useful code blogs.
              </p>
              <p className="text-justify">
                NO BS! straight the best blogs for the topic you search.
              </p>
            </div>

            <div className="col-xs-6 col-md-3">
              <h6>Support</h6>
              <ul className="footer-links">
                <li>
                  <a href="https://sub-blog-frontend.vercel.app/faq/"> FAQs</a>
                </li>
                <li>
                  <a href="https://sub-blog-frontend.vercel.app/contact-us">Contact Us</a>
                </li>
                <li>
                  <a href="https://sub-blog-frontend.vercel.app/sitemap">Sitemap</a>
                </li>
              </ul>
            </div>
            <div
              style={{
                height: "5rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              className="col-xs-6 col-md-3"
            >
              {/* <Image1 src="https://lh3.googleusercontent.com/a-/AOh14GixiRxtibXCRVzg0OwS15tyf1ahrHXCUt8B4547tg=s128-c0x00000000-cc-rp-mo-ba4" />
              <Image2 src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZJ8Nhf5KnVxjO08AXl_nt8ltt55FNbQlXTVfA_4gtn6lWCDVGwoHKR-Ph7Wkv12glgzs&usqp=CAU" />
              <Image3 src="https://miro.medium.com/max/3150/0*pTFflDsAmKg4jQ7o" />
              <Image4 src="https://miro.medium.com/max/3150/0*pTFflDsAmKg4jQ7o" /> */}
              <Image1 src={Boy1} />
              <Image2 src={girl1} />
              <Image3 src={Boy2} />
              <Image4 src={girl2} />
              <p style={{ position: "absolute", left: "81rem" }}>
                420+ happy customers
              </p>
            </div>
          </div>
          <hr />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-sm-6 col-xs-12">
              <p className="copyright-text">
                Copyright &copy; 2021 All Rights Reserved by
                <a href="https://twitter.com/varougm"> Varuogm</a>.
              </p>
            </div>

            <div
              style={{ display: "flex", gap: "2rem" }}
              className="col-md-4 col-sm-6 col-xs-12"
            >
              <a className="Github" href="https://github.com/varuogm">
                Github
              </a>

              <a className="twitter" href="https://twitter.com/Varougm">
                Twitter
              </a>

              <a
                className="linkedin"
                href="https://www.linkedin.com/in/gourav-majee-724b37188"
              >
                Linkedin
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
