import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { MdInfoOutline } from 'react-icons/md';
import ReactTooltip from 'react-tooltip';
import * as yup from 'yup';

import { ButtonIndexacao } from '../ButtonIndexacao';
import {
    ContentInput,
    Header,
    ContainerForm,
    ContentButton,
    ButtonSubmit,
} from './styled';
// import checkIcon from "../../assets/check.svg";

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
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormInputs>({
        resolver: yupResolver(schema),
    });
    const onSubmit = (data: FormInputs) => console.log(data);

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
                <p>Aporte Mensal</p>
                {/* eslint-disable react/jsx-props-no-spreading */}
                <input {...register('aporte', { required: true })} />
            </ContentInput>

            <ContentInput>
                <p>Rentabilidade</p>
                <input {...register('rentabilidade', { required: true })} />
            </ContentInput>

            <ContentInput>
                <p>CDI (ao ano)</p>
                <input type="text" placeholder={valor?.toString()} />
            </ContentInput>
            <ButtonSubmit type="submit">Simular</ButtonSubmit>
        </ContainerForm>
    );
}
