import { ContentInput, Header, Container, ContentButton } from "./styled";
import { MdInfoOutline } from "react-icons/md";
import ReactTooltip from "react-tooltip";
import checkIcon from "../../assets/check.svg";
export function Rendimento() {
  return (
    <Container>
      <h2>Simulador</h2>
      <Header>
        <div>
          <p>Rendimento</p>
          <p data-tip="hello world">
            <MdInfoOutline />
          </p>

          <ReactTooltip />
        </div>

        <ContentButton>
          <button>
            <img src={checkIcon} alt="check" />
            <span>Bruto</span>
          </button>
          <button>Liquido</button>
        </ContentButton>
      </Header>

      <ContentInput>
        <p>Aporte Inicial</p>
        <input type="text" />
      </ContentInput>

      <ContentInput>
        <p>Prazo (em meses)</p>
        <input type="text" />
      </ContentInput>

      <ContentInput>
        <p>IPCA (ao ano)</p>
        <input type="text" placeholder="10,06%" />
      </ContentInput>
      <button>Limpar campos</button>
    </Container>
  );
}
