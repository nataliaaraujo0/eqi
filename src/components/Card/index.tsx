import { Container } from "./styled";

export function Card({spanText = "", strongText = "",valorFinalBruto}){
  return(
   <Container>
     <strong>{strongText}</strong>
     {/* <span>{valorFinalBruto?.toString()}</span> */}
     <span>{spanText}</span>
   </Container>
  )
}

