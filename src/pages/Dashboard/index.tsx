import { useEffect, useState } from 'react';

import { FormIndexacao } from '../../components/FormIndexacao';
import { FormRendimento } from '../../components/FormRendimento';
import { Header } from '../../components/Header';
import { ResultSimulacao } from '../../components/ResultSimulacao';
import api from '../../services/api';
import { Wrapper, Container } from './styled';

type IndicadorProps = {
    valor: number;
};

export function Dashboard() {
    const [indicadores, setIndicadores] = useState<IndicadorProps[]>([]);
    const [cdi, ipca] = indicadores;

    useEffect(() => {
        api.get('indicadores').then((response) => {
            setIndicadores(response.data);
        });
    }, []);

    return (
        <Container>
            <Header />
            <Wrapper>
                <FormRendimento valor={ipca?.valor} />
                <FormIndexacao valor={cdi?.valor} />
                <ResultSimulacao />
            </Wrapper>
        </Container>
    );
}
