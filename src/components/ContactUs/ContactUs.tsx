import {
  Topper,
  Box,
  Container,
  Input,
  TextArea,
  Button,
  Heading,
} from "./ContactUs-style";

const ContactUS = () => {
  return (
    <Topper>
      <Box>
        <Heading>Contact US</Heading>
        <Container>
          <span>Name - </span>
          <Input type="text" placeholder="firstname" />
        </Container>

        <Container>
          <span>Email - </span>
          <Input type="email" placeholder="email" />
        </Container>
        <Container>
          <span>Message here - </span>
          <TextArea rows={8} placeholder="Your message here" />
        </Container>
        <Button>Submit</Button>
      </Box>
    </Topper>
  );
};

export default ContactUS;
