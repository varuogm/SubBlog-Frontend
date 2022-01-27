import styled from "styled-components";
import personONe from "./../../Assests/govind.png";
import personThird from "./../../Assests/vishwas.png";
import personSecond from "./../../Assests/PostMalone.jpg";

import {
  TestimonialBody,
  AllTesttemonials,
  Testimonial,
  TestimonialBodyParagraph,
  Testimonialfooter,
  TestimonialfooterImage,
  TestimonialfooterH4,
} from "./Testemonials-style";

const Testemonials = () => {
  return (
    <AllTesttemonials>
      <Testimonial>
        <TestimonialBody>
          <TestimonialBodyParagraph>
            Life changing thing . loved it, subbed it, shared it.
          </TestimonialBodyParagraph>
          <i className="fas fa-quote-right"></i>
        </TestimonialBody>
        <Testimonialfooter>
          <TestimonialfooterImage src={personONe} alt="user" />
          <h3>Govind singhal</h3>
          <TestimonialfooterH4>Singhal pvt ltd</TestimonialfooterH4>
        </Testimonialfooter>
      </Testimonial>

      <Testimonial>
        <TestimonialBody>
          <TestimonialBodyParagraph>
            I've been dancin' goes and poppin' pillies Man, I feel just like a
            <b> rockstar </b> (ayy, ayy) All my brothers got that gas And they
            always be smokin' like a Rasta.
          </TestimonialBodyParagraph>
          <i className="fas fa-quote-right"></i>
        </TestimonialBody>
        <Testimonialfooter>
          <TestimonialfooterImage src={personSecond} alt="user" />
          <h3>Post Malone</h3>
          <TestimonialfooterH4>Rapper </TestimonialfooterH4>
        </Testimonialfooter>
      </Testimonial>
      <Testimonial>
        <TestimonialBody>
          <TestimonialBodyParagraph>
            Only one word <b> Rapchik </b> idea. blogging is good and getting
            something out of it more good.
          </TestimonialBodyParagraph>
          <i className="fas fa-quote-right"></i>
        </TestimonialBody>
        <Testimonialfooter>
          <TestimonialfooterImage src={personThird} alt="user" />
          <h3>Vishwas Patel</h3>
          <TestimonialfooterH4> ML architect </TestimonialfooterH4>
        </Testimonialfooter>
      </Testimonial>
    </AllTesttemonials>
  );
};

export default Testemonials;
