import styled from "styled-components";

export const Wrapper = styled.div`
  width: 229px;
  height: auto;
  display: flex;

  div:nth-child(3) {
    padding-bottom: 30px;
  }
  div:nth-child(4) {
    padding-bottom: 30px;
  }
`;
export const WrapperColumn = styled.div`
  display: flex;
  flex-direction: column;

  button {
    width: 228px;
    height: 46px;
    border: 1px solid #000000;
    border-radius: 8px;
    font-weight: bold;
    font-size: 14px;
  }
`;

export const ContentSimulador = styled.div`
  padding-top: 18px;

  button {
    width: 92px;
    height: 41px;
    border: 0;
    background-color: white;
  }
`;

export const Content = styled.div`
  padding-top: 18px;
  justify-content: center;
  display: flex;
  flex-direction: column;

  p {
    margin-bottom: 20px;
    font-size: 14px;
  }

  input {
    border: 1px solid #000000;
    background-color: var(--white-50);
    width: 185px;
    border-left-width: 0px;
    border-top-width: 0px;
    border-right-width: 0px;
    margin-bottom: 43px;
    font-size: 16px;

    color: black;

    ::-webkit-input-placeholder {
      color: black;
    }
  }

  input:focus-visible {
    outline: none;
  }
`;

export const ContentButton = styled.div`
  padding-top: 16px;
  button {
    width: 92px;
    height: 41px;
    border-radius: 6px 0px 0px 6px;
    background-color: var(--orange);

    span {
      color: white;
      padding-left: 2px;
    }

    :nth-child(2) {
      border-radius: 0px 6px 6px 0px;
      background-color: white;
    }
  }
`;
