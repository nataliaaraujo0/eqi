import { useForm } from 'react-hook-form';
import { MdInfoOutline } from 'react-icons/md';
import ReactTooltip from 'react-tooltip';

import {
    ContentInput,
    Header,
    ContainerForm,
    ContentButton,
    ButtonClean,
} from './styled';
// import  * as checkIcon from "check.svg" ;
interface IndicadorProps {
    nome?: string;
    valor?: number;
}
interface UseFormInputs {
    aporte: number;
    prazo: string;
}

export function Rendimento({ valor }: IndicadorProps): JSX.Element {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<UseFormInputs>();
    const onSubmit = (data: UseFormInputs) => {
        console.log(data);
    };

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
                    <button type="button">
                        {/* <img src={checkIcon} alt="check" /> */}
                        <span>Bruto</span>
                    </button>
                    <button type="button">Liquido</button>
                </ContentButton>
            </Header>
            <ContentInput>
                <p>Aporte Inicial</p>
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
