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
    const onSubmit = (data: UseFormInputs) => {};
    return (
        <ContainerForm onSubmit={handleSubmit(onSubmit)}>
            <Header>
                <h2>Simular</h2>
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
                {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                <label>Aporte Inicial</label>
                {/* eslint-disable react/jsx-props-no-spreading */}
                <input type="text" {...register('aporte')} />
            </ContentInput>

            <ContentInput>
                {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                <label>Prazo(em meses)</label>
                <input type="text" {...register('prazo')} />
            </ContentInput>

            <ContentInput>
                {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                <label>IPCA (ao ano)</label>
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
