import styled from 'styled-components';

type ButtonProps = {
    isActive: boolean;
};

export const ButtonActive = styled.button<ButtonProps>`
    background-color: ${(props) =>
        props.isActive ? `var(--orange)` : `var(--write-50)`};
`;
