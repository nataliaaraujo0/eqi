import {
  ContentInput,
  Header,
  Container,
  ContentButton,
} from "./styled";
import { MdInfoOutline } from "react-icons/md";
import ReactTooltip from "react-tooltip";
import checkIcon from "../../assets/check.svg";
export function Indexacao() {
  return (
    <Container>
      <Header>
        <div>
          <p>Taxa de indexação</p>
          <p data-tip="hello world">
            <MdInfoOutline />
          </p>

          <ReactTooltip />
        </div>
        <ContentButton>
          <button>Pré</button>
          <button>
            <img src={checkIcon} alt="check" />
            <span>Pos</span>
          </button>
          <button>Fixado</button>
        </ContentButton>
      </Header>

      <ContentInput>
        <p>Aporte Mensal</p>
        <input type="text" />
      </ContentInput>

      <ContentInput>
        <p>Rentabilidade</p>
        <input type="text" />
      </ContentInput>

      <ContentInput>
        <p>CDI (ao ano)</p>
        <input type="text" placeholder="9,18%" />
      </ContentInput>
        <button>Simular</button>
    </Container>
  );
}
