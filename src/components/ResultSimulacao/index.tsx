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
    valorPagoIR,
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
        strongText="Valor final Bruto"
          spanText = {valorFinalBruto?.valorFinalBruto}
          // valorFinalBruto = 
        />
        <Card
         strongText="Alíquota do IR"
           spanText = {aliquotaIR?.aliquotaIR}
         />

         <Card
         strongText="Valor Pago em IR"
           spanText = {valorPagoIR?.valorPagoIR}
         />
         
         <Card
         strongText="Valor Final Líquido"
           spanText = {valorFinalLiquido?.valorFinalLiquido}
         />

          <Card
         strongText="Valor Total Investido"
           spanText = {valorTotalInvestido?.valorTotalInvestido}
         />

        <Card
         strongText="Ganho Líquido"
           spanText = {ganhoLiquido?.ganhoLiquido}
         />
       
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
