import { ContentCard, Container, ContentGrafico} from "./styled";
import {Card} from "../../components/Card"
export function ResultSimulacao() {
  return(
    <Container>
      <h2>Resultado da Simulação</h2>
      <ContentCard>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </ContentCard>
      <ContentGrafico>
        <h2>Grafico</h2>
      </ContentGrafico>
    </Container>
  )
}