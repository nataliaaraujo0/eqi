import { ContentCard, Container, ContentGrafico} from "./styled";
import {Card} from "../../components/Card"
import { useEffect, useState } from "react";
import api from "../../services/api";

interface simuladorProps{
  valorFinalBruto?: number;
  aliquotaIR?:number;
  valorPagoIR?:number;
  valorFinalLiquido?:number;
  valorTotalInvestido?:number;
  ganhoLiquido?:number
}

export function ResultSimulacao(){
  const [simulacoes, setSimulacoes] = useState<simuladorProps[]>([]);
  const [ 
    valorFinalBruto,
    aliquotaIR,
    valorFinalLiquido,
    valorTotalInvestido,
    ganhoLiquido] = simulacoes;

  useEffect(() => {
    api.get("simulacoes").then(response => {
      setSimulacoes(response.data);
    });
  }, []);

  return(
    <Container>
      <h2>Resultado da Simulação</h2>
      <ContentCard>
        <Card
          valorFinalBruto = {valorFinalBruto?.valorFinalBruto}
        />
        <Card
         aliquotaIR = {aliquotaIR?.aliquotaIR}/>
        <Card
          valorFinalLiquido = {valorFinalLiquido?.valorFinalLiquido}/>
        <Card
         valorTotalInvestido = { valorTotalInvestido?.valorTotalInvestido}
         />
        <Card
           ganhoLiquido = { ganhoLiquido?.ganhoLiquido}
        />
        <Card/>
      </ContentCard>
      <ContentGrafico>
        <h2>Grafico</h2>
      </ContentGrafico>
    </Container>
  )
}

function setIndicadores(data: any) {
  throw new Error("Function not implemented.");
}
