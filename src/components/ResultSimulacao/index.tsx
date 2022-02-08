import { Container, Wrapper } from "./styled";
import {Card} from "../../components/Card"
export function ResultSimulacao() {
  return(
    <Container>
      <h2>Resultado da Simulação</h2>
      <Wrapper>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </Wrapper>
      <Wrapper>
        <h2>Grafico</h2>
      </Wrapper>
    </Container>
  )
}