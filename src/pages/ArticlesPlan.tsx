import axios from "axios";
import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import { Card, Button } from "react-bootstrap";

import {
  CardsContainer,
  CardHeader,
  PriceCircle,
  PriceText,
} from "./Artilcles-style";

const ArticlesPlan = () => {
  const [prices, setPrices] = useState<any[]>([]);
  useEffect(() => {
    fetchPrices();
  }, []);

  const fetchPrices = async () => {
    const { data: response } = await axios.get(
      "http://localhost:8000/subs/prices"
    );
    console.log(response);
    setPrices(response.data);
  };
  const createSession = async (priceId: string) => {
    const { data: response } = await axios.post(
      "http://localhost:8000/subs/session",
      {
        priceId,
      }
    );
    window.location.href = response.url;
  };
  const backgroundColors: any = {
    Basic: "rgb(104, 219, 104)",
    Standard: "rgb(185, 42, 23, 0.835)",
    Premium: "pink",
  };
  const plansDescription: any = {
    Basic: "Thoda aur sasta kardo na bhiya  wlaa plan",
    Standard: "middle class Delhi boy wala plan",
    Premium: "AAp to  bade hi ameer lagte ho ",
  };
  return (
    <Container>
      <CardsContainer>
        {prices.map((price: any) => {
          return (
            <Card
              style={{
                width: "18rem",
                height: "27rem",
                marginTop: "10rem",
                marginRight: "2rem",
              }}
            >
              <CardHeader
                style={{ backgroundColor: backgroundColors[price.nickname] }}
              >
                <PriceCircle>
                  <PriceText>${price.unit_amount / 100}</PriceText>
                </PriceCircle>
              </CardHeader>
              <Card.Body>
                <Card.Title style={{ fontSize: "2rem" }}>
                  {price.nickname}
                </Card.Title>
                <Button
                  variant="primary"
                  className="mt-2"
                  onClick={() => createSession(price.id)}
                >
                  Buy now
                </Button>
              </Card.Body>
              <div style={{ padding: "2rem 1rem " }}>
                {plansDescription[price.nickname]}
              </div>
            </Card>
          );
        })}
      </CardsContainer>
    </Container>
  );
};

export default ArticlesPlan;
