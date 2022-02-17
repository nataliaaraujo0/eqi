import styled from 'styled-components';

export const ContainerForm = styled.form`
    background-color: #3d3d3d;
    grid-column: 1/2;
    height: 555px;
`;

export const ButtonClean = styled.button`
    width: 100%;
    height: 46px;
    border: 1px solid #000000;
    border-radius: 8px;
    font-weight: bold;
    font-size: 14px;
`;

export const Header = styled.div`
    padding-top: 18px;
    width: 100%;

    div {
        display: flex;
        justify-content: space-between;
    }
`;

export const ContentButton = styled.div`
    width: 100%;
    padding-top: 16px;

    button {
        width: 50%;
        height: 41px;
        border-radius: 6px 0px 0px 6px;
        border: 1px solid #000000;
        font-size: 12px;
        span {
            color: white;
            padding-left: 2px;
        }
        :nth-child(1) {
            background-color: #ed8e53;
        }
        :nth-child(2) {
            border-radius: 0px 6px 6px 0px;
        }
    }
`;

export const ContentInput = styled.div`
    width: 100%;
    margin-top: 14px;
    justify-content: center;
    display: flex;
    flex-direction: column;

    p {
        margin-bottom: 20px;
        font-size: 14px;
    }

    input {
        width: 100%;
        border: 1px solid #000000;
        background-color: var(--white-50);
        border-left-width: 0px;
        border-top-width: 0px;
        border-right-width: 0px;
        margin-bottom: 43px;
        font-size: 16px;
        font-weight: bold;

        ::-webkit-input-placeholder {
            color: #f06915;
        }

        :nth-child(2) {
            color: black;
        }
    }

    input:focus-visible {
        outline: none;
    }
`;
