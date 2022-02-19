import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { MdInfoOutline } from 'react-icons/md';
import ReactTooltip from 'react-tooltip';
import * as yup from 'yup';

import { useContextButtonIndexacao } from '../../Context/ContextButtonIndexacao';
import { ButtonIndexacao } from '../ButtonIndexacao';
import {
    ContentInput,
    Header,
    ContainerForm,
    ContentButton,
    ButtonSubmit,
} from './styled';

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

type IndicadorProps = {
    valor: number;
};

type IFormInputs = {
    aporte: string;
    rentabilidade: number;
};

const schema = yup
    .object({
        aporte: yup.string().required('Aporte deve ser um número'),
        rentabilidade: yup.number().required(),
    })
    .required();

export function FormIndexacao({ valor }: IndicadorProps): JSX.Element {
    const { handleSimulate } = useContextButtonIndexacao();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IFormInputs>({
        resolver: yupResolver(schema),
    });
    const onSubmit = (data: IFormInputs) => console.log(data);

    return (
        <ContainerForm onSubmit={handleSubmit(onSubmit)}>
            <Header>
                <div>
                    <p>Taxa de indexação</p>
                    <p data-tip="hello world">
                        <MdInfoOutline />
                    </p>

                    <ReactTooltip />
                </div>
                <ContentButton>
                    <ButtonIndexacao />
                </ContentButton>
            </Header>

            <ContentInput>
                {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                <label>
                    Aporte Mensal
                    {/* eslint-disable react/jsx-props-no-spreading */}
                    <input
                        type="text"
                        {...register('aporte', { required: true })}
                    />
                    <span style={{ color: 'red' }}>
                        {errors.aporte?.message}
                    </span>
                </label>
            </ContentInput>

            <ContentInput>
                {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                <label>
                    Rentabilidade
                    <input {...register('rentabilidade')} />
                </label>
            </ContentInput>

            <ContentInput>
                {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                <label>CDI (ao ano)</label>
                <input type="text" placeholder={valor?.toString()} />
            </ContentInput>
            <ButtonSubmit onClick={() => handleSimulate(true)} type="submit">
                Simular
            </ButtonSubmit>
        </ContainerForm>
    );
}
