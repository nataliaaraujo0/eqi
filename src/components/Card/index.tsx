import { Container } from "./styled";
interface simuladorProps{
  valorFinalBruto?: number;
}

export function Card({valorFinalBruto,
 }:simuladorProps): JSX.Element{

  return(
   <Container>
     <strong>Valor Final Bruto</strong>
     <span>{valorFinalBruto?.toString()}</span>
   </Container>
  )
}