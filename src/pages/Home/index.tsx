import React from "react";
import {
  Page,
  Title,
  Container,
  Text,
  Subtitle,
  Action,
  Background,
} from "./styled";
import Navbar from "../../components/Navbar";

export default function Home(): JSX.Element {
  return (
    <Page>
      <Navbar />
      <Container>
        <Text>
          <Title>Soluções inteligentes para modernizar a sua empresa</Title>
          <Subtitle>
            Utilizamos as principais tecnologias do mercado, associadas à
            expertise em gerência de projetos e em desenvolvimento de software
            para produzir soluções que vão direto ao ponto.
          </Subtitle>
          <Action href="#">Solicite um orçamento</Action>
        </Text>
        <Background />
      </Container>
    </Page>
  );
}
