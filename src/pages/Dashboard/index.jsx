import { Wrapper, Container } from "./styled";
import { Rendimento } from "../../components/Rendimento";
import { Indexacao } from "../../components/Indexacao";
import { Header } from "../../components/Header";
export function Dashboard() {
  return (
    <Container>
      <Header />
      <Wrapper>
        <Rendimento />
        <Indexacao />
      </Wrapper>
    </Container>
  );
}
