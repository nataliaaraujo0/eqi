import {  Wrapper,Container } from "./styled";
import { Rendimento } from "../../components/Rendimento";
import { Indexacao } from "../../components/Indexacao";
import { Header } from "../../components/Header";
import { useEffect, useState } from "react";
import api from "../../services/api";
import { ResultSimulacao } from "../../components/ResultSimulacao";

interface IndicadorProps{
  nome: string;
  valor?: number; 
}
export function Dashboard() {
  const [indicadores, setIndicadores] = useState<IndicadorProps[]>([]);
  const [cdi,ipca] = indicadores;
  
  useEffect(() => {
    api.get("indicadores").then(response => {
      setIndicadores(response.data);
    });
  }, []);
  
  return (
    <Container>
      <Header />
      <Wrapper>
        <Rendimento 
        valor={ipca?.valor} 
        />
        <Indexacao 
        valor={cdi?.valor}
         />
      <ResultSimulacao 
      />
      </Wrapper>
    </Container>
  );
}
