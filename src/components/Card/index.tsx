import { Container } from "./styled";

export function Card({spanText = "", strongText = ""}){
  return(
   <Container>
     <strong>{strongText}</strong>
     {/* <span>{valorFinalBruto?.}</span> */}
     <span>{spanText}</span>
   </Container>
  )
}

