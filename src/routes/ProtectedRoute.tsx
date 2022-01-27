import React, { useContext } from "react";
import { Spinner } from "react-bootstrap";
import { Outlet, Navigate } from "react-router-dom";
import { UserContext } from "../context";
import styled from "styled-components";

const SpinnerConatiner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProtectedRoute = () => {
  const [state] = useContext(UserContext);
  if (state.loading)
    return (
      <SpinnerConatiner>
        <Spinner animation="border" variant="danger" />
      </SpinnerConatiner>
    );

  return state.data ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoute;
