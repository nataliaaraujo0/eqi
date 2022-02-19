import { Container } from './styled';

type CardProps = {
    spanText: number;
    strongText: string;
};
export function Card({ spanText, strongText }: CardProps) {
    return (
        <Container>
            <strong>{strongText}</strong>
            <span>{spanText}</span>
        </Container>
    );
}
