import { useState } from 'react';

import { useFetch } from '../../hook/useFetch';
import { Card } from '../Card';
import { Graficos } from '../Graficos';
import { ContentCard, Container } from './styled';

type SimuladorProps = {
    data: Array<{
        valorFinalBruto: number;
        aliquotaIR: number;
        valorPagoIR: number;
        valorFinalLiquido: number;
        valorTotalInvestido: number;
        ganhoLiquido: number;
    }>;
};

export function ResultSimulacao({ data }: SimuladorProps) {
    const [simulacoes, setSimulacoes] = useState<SimuladorProps[]>([]);
    const [simulacaoPre] = simulacoes;
    const { error, isFetching } = useFetch('simulacoes');

    if (isFetching)
        <div>
            <p>loading</p>
        </div>;
    console.log(data);
    return (
        <Container>
            <h2>Resultado da Simulação</h2>
            <ContentCard>
                <Card
                    strongText="Valor final Bruto"
                    spanText={data[0]?.valorFinalBruto}
                    // valorFinalBruto =
                />
                <Card
                    strongText="Alíquota do IR"
                    spanText={data[0]?.aliquotaIR}
                />

                <Card
                    strongText="Valor Pago em IR"
                    spanText={data[0]?.valorPagoIR}
                />

                <Card
                    strongText="Valor Final Líquido"
                    spanText={data[0]?.valorFinalLiquido}
                />

                <Card
                    strongText="Valor Total Investido"
                    spanText={data[0]?.valorTotalInvestido}
                />

                <Card
                    strongText="Ganho Líquido"
                    spanText={data[0]?.ganhoLiquido}
                />
            </ContentCard>
            <Graficos />
        </Container>
    );
}

function setIndicadores(data: any) {
    throw new Error('Function not implemented.');
}
