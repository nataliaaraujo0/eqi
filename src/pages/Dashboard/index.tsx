import { useEffect, useState } from 'react';

import { Header } from '../../components/Header';
import { Indexacao } from '../../components/Indexacao';
import { Rendimento } from '../../components/Rendimento';
import { ResultSimulacao } from '../../components/ResultSimulacao';
import api from '../../services/api';
import { Wrapper, Container } from './styled';

interface IndicadorProps {
    nome: string;
    valor?: number;
}

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
                <Rendimento valor={ipca?.valor} />
                <Indexacao valor={cdi?.valor} />
                <ResultSimulacao />
            </Wrapper>
        </Container>
    );
}
