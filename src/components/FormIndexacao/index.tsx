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

type FormInputs = {
    aporte: string;
    rentabilidade: number;
};

const schema = yup
    .object({
        aporte: yup.string().required(),
        rentabilidade: yup.number().required('ola'),
    })
    .required();

export function FormIndexacao({ valor }: IndicadorProps): JSX.Element {
    const { handleSimulate } = useContextButtonIndexacao();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormInputs>({
        resolver: yupResolver(schema),
    });
    const onSubmit = (data: FormInputs) => {};

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
                <label>Aporte Mensal</label>
                {/* eslint-disable react/jsx-props-no-spreading */}
                <input {...register('aporte', { required: true })} />
            </ContentInput>

            <ContentInput>
                {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                <label>Rentabilidade</label>
                <input {...register('rentabilidade', { required: true })} />
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
