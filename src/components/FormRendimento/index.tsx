import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { MdInfoOutline } from 'react-icons/md';
import ReactTooltip from 'react-tooltip';

import { ButtonRendimento } from '../ButtonRendimento';
import {
    ContentInput,
    Header,
    ContainerForm,
    ContentButton,
    ButtonClean,
} from './styled';
// import  * as checkIcon from "check.svg" ;
type IndicadorProps = {
    valor: number;
};
type UseFormInputs = {
    aporte: number;
    prazo: string;
};
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
export function FormRendimento({ valor }: IndicadorProps): JSX.Element {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<UseFormInputs>();
    const onSubmit = (data: UseFormInputs) => {
        console.log(data);
    };
    const [active, setActive] = useState(false);
    console.log(active);
    return (
        <ContainerForm onSubmit={handleSubmit(onSubmit)}>
            <Header>
                <div>
                    <p>Rendimento</p>
                    <p data-tip="hello world">
                        <MdInfoOutline />
                    </p>
                    <ReactTooltip />
                </div>
                <ContentButton>
                    <ButtonRendimento />
                </ContentButton>
            </Header>
            <ContentInput>
                <p>Aporte Inicial</p>
                {/* eslint-disable react/jsx-props-no-spreading */}
                <input type="text" {...register('aporte')} />
            </ContentInput>

            <ContentInput>
                <p>Prazo (em meses)</p>
                <input type="text" {...register('prazo')} />
            </ContentInput>

            <ContentInput>
                <p>IPCA (ao ano)</p>
                <input type="text" placeholder={valor?.toString()} />
            </ContentInput>
            <ButtonClean
                onClick={() => reset()}
                value="Custom Reset Field Values & Errors"
            >
                Limpar campos
            </ButtonClean>
        </ContainerForm>
    );
}
function useFetch<T>(arg0: string): { data: any } {
    throw new Error('Function not implemented.');
}

function useContextButtonIndexacao(): { indexacao: any } {
    throw new Error('Function not implemented.');
}
