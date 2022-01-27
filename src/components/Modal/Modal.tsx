import axios from "axios";
import React, { useContext, useState } from "react";
import { Modal, InputGroup, Button, FormControl } from "react-bootstrap";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context";

interface ModalProps {
  text: string;
  variant: "primary" | "secondary" | "danger";
  isSignupFlow: boolean;
}

const ErrorMessage = styled.p`
  color: red;
`;

const ModalComponent = ({ text, variant, isSignupFlow }: ModalProps) => {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const navigate = useNavigate();

  const [state, setState] = useContext(UserContext);

  const handleclick = async () => {
    let response;
    if (isSignupFlow) {
      const { data: signUpData } = await axios.post(
        "https://subblog-backend.herokuapp.com/auth/signup",
        { email, password }
      );

      response = signUpData;
      console.log(signUpData);
    } else {
      const { data: loginData } = await axios.post(
        "https://subblog-backend.herokuapp.com/auth/login",
        { email, password }
      );
      response = loginData;
      console.log(loginData);
    }

    if (response.errors.length) {
      return setErrorMsg(response.errors[0].msg);
    }
    setState({
      data: {
        id: response.data.user.id,
        email: response.data.user.email,
        stripeCustomerId: response.data.user.stripeCustomerId,
      },
      loading: false,
      error: null,
    });

    localStorage.setItem("token", response.data.token);
    axios.defaults.headers.common[
      "authorization"
    ] = `Bearer ${response.data.token}`;

    navigate("/articles");
  };

  return (
    <>
      <Button onClick={handleShow} variant={variant}>
        {text}
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title> {text}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <InputGroup className="mb-3">
            <InputGroup.Text>Email</InputGroup.Text>
            <FormControl
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Text>password </InputGroup.Text>
            <FormControl
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </InputGroup>
          {errorMsg && <ErrorMessage>{errorMsg}</ErrorMessage>}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleclick}>
            {text}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalComponent;
