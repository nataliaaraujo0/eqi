import {
  Content,
  ContentSimulador,
  Wrapper,
  WrapperColumn,
  ContentButton,
} from "./styled";
import checkIcon from "../../assets/check.svg";

export function Simulador() {
  return (
    <Wrapper>
      <WrapperColumn>
        <ContentSimulador>
          <p>Rendimento</p>
          <ContentButton>
            <button>
              <img src={checkIcon} alt="check" />
              <span>Bruto</span>
            </button>
            <button>Liquido</button>
          </ContentButton>
        </ContentSimulador>

        <Content>
          <p>Aporte Inicial</p>
          <input type="text" />
        </Content>

        <Content>
          <p>Prazo (em meses)</p>
          <input type="text" />
        </Content>

        <Content>
          <p>IPCA (ao ano)</p>
          <input type="text" placeholder="10,06%" />
          <button>Limpar campos</button>
        </Content>
      </WrapperColumn>
    </Wrapper>
  );
}
