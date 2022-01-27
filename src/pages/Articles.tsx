import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import axios from "axios";
import styled from "styled-components";
import { Link } from "react-router-dom";

import {
  CardsContainer2,
  Card,
  Image,
  Header,
  NoArticlesContainer,
  ErrorHeader,
} from "./Artilcles-style";

interface Article {
  id: string;
  title: string;
  imageUrl: string;
  content: string;
}

export const ArtCont = styled.div`
  display: flex;
  flex-direction: row;
  flex-flow: row wrap;
  justify-content: space-evenly;
  align-items: center;
  justify-content: center;
  gap: 1.8rem;
`;

const Content = styled.p``;

const Articles = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    const { data: response } = await axios.get(
      "https://subblog-backend.herokuapp.com/articles"
    );
    setArticles(response);
  };

  return (
    <Container>
      {articles.length ? (
        <ArtCont style={{}}>
          <CardsContainer2>
            {articles.map((article) => (
              <Card key={article.id}>
                <Image src={article.imageUrl} />
                <Header>{article.title}</Header>
                <Content>{article.content}</Content>
              </Card>
            ))}
          </CardsContainer2>{" "}
        </ArtCont>
      ) : (
        <NoArticlesContainer>
          <ErrorHeader>You don't have access yet</ErrorHeader>
          <Link to="/article-plans">Buy a plan</Link>
        </NoArticlesContainer>
      )}
    </Container>
  );
};

export default Articles;
