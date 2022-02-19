import { useEffect, useState } from 'react';

import { FormIndexacao } from '../../components/FormIndexacao';
import { FormRendimento } from '../../components/FormRendimento';
import { Header } from '../../components/Header';
import { ResultSimulacao } from '../../components/ResultSimulacao';
import { useContextButtonIndexacao } from '../../Context/ContextButtonIndexacao';
import { useFetch } from '../../hook/useFetch';
import { Wrapper, Container } from './styled';

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

export function Dashboard() {
    const { data: indicadores, isFetching } = useFetch('indicadores');
    const { data: simulacoes } = useFetch('simulacoes');
    const [filtered, setFiltered] = useState([]);
    const { indexacao, simulate } = useContextButtonIndexacao();
    useEffect(() => {
        if (simulate) {
            const newItems = simulacoes.filter((item) => {
                return (
                    item.tipoIndexacao === indexacao &&
                    item.tipoRendimento === 'bruto'
                );
            });
            setFiltered(newItems);
        }
    }, [simulate, indexacao]);
    if (isFetching)
        <div>
            <p>loading</p>
        </div>;

    return (
        <Container>
            <Header />
            <Wrapper>
                <FormRendimento valor={indicadores[0]?.valor} />
                <FormIndexacao valor={indicadores[1]?.valor} />
                <ResultSimulacao data={filtered} />
            </Wrapper>
        </Container>
    );
}
