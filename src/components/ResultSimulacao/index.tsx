import { useEffect, useState } from 'react';

import api from '../../services/api';
import { Card } from '../Card';
import { Graficos } from '../Graficos';
import { ContentCard, Container } from './styled';

type SimuladorProps = {
    valorFinalBruto?: number;
    aliquotaIR?: number;
    valorPagoIR?: number;
    valorFinalLiquido?: number;
    valorTotalInvestido?: number;
    ganhoLiquido?: number;
};

export function ResultSimulacao() {
    const [simulacoes, setSimulacoes] = useState<SimuladorProps[]>([]);
    const [simulacaoPre] = simulacoes;

    useEffect(() => {
        api.get('simulacoes').then((response) => {
            setSimulacoes(response.data);
            console.log(response.data);
        });
    }, []);

    return (
        <Container>
            <h2>Resultado da Simulação</h2>
            <ContentCard>
                <Card
                    strongText="Valor final Bruto"
                    spanText={simulacaoPre?.valorFinalBruto}
                    // valorFinalBruto =
                />
                <Card
                    strongText="Alíquota do IR"
                    spanText={simulacaoPre?.aliquotaIR}
                />

                <Card
                    strongText="Valor Pago em IR"
                    spanText={simulacaoPre?.valorPagoIR}
                />

                <Card
                    strongText="Valor Final Líquido"
                    spanText={simulacaoPre?.valorFinalLiquido}
                />

                <Card
                    strongText="Valor Total Investido"
                    spanText={simulacaoPre?.valorTotalInvestido}
                />

                <Card
                    strongText="Ganho Líquido"
                    spanText={simulacaoPre?.ganhoLiquido}
                />
            </ContentCard>
            <Graficos />
        </Container>
    );
}

function setIndicadores(data: any) {
    throw new Error('Function not implemented.');
}
