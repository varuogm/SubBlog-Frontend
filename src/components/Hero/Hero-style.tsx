import styled from "styled-components";

export const HeroComponent = styled.header`
  padding: 5rem 0;
  height: 60vh;
  background-size: cover;
  background-position: bottom;
  background-image: url("https://images.unsplash.com/photo-1454942901704-3c44c11b2ad1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=160");
  background-color: white;
`;

export const HeaderComponent = styled.div`
  background-color: rgb(100 137 176);

  padding: 3rem;
  color: white;
  width: 32.5rem;
`;

export const Heading = styled.h1`
  font-size: 5rem;
  text-shadow: -2px 2px 20px #524e4e;
`;

export const SubHeading = styled.h3`
  margin: 1rem 0;
  font-weight: 400;
`;

export const ButtonSpace = styled.div`
  display: flex;
  margin: 1rem 0;
  gap: 1rem;
`;
