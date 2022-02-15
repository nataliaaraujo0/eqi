import {
  ContentInput,
  Header,
  ContainerForm,
  ContentButton,
  ButtonSubmit,
} from "./styled";
import { MdInfoOutline } from "react-icons/md";
import ReactTooltip from "react-tooltip";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
// import checkIcon from "../../assets/check.svg";

interface IndicadorProps{
  nome?: string;
  valor?: number; 
}
interface IFormInputs {
  aporte: string
  rentabilidade: number
}
const schema = yup.object({
  aporte: yup.string().required(),
  rentabilidade: yup.number().required("ola"),
}).required();

export function Indexacao ({valor}: IndicadorProps): JSX.Element {
  const { register, handleSubmit, formState: { errors } } = useForm<IFormInputs>({
    resolver: yupResolver(schema)
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
          <button>Pré</button>
          <button>
            {/* <img src={checkIcon} alt="check" /> */}
            <span>Pos</span>
          </button>
          <button>Fixado</button>
        </ContentButton>
      </Header>

      <ContentInput>
        <p>Aporte Mensal</p>
        <input {...register("aporte", {required: true})}/>
        <span style={{color: "red"}}>Campo obrigatório</span>
      </ContentInput>

      <ContentInput>
        <p>Rentabilidade</p>
        <input {...register("rentabilidade", {required: true})}/>
        <span style={{color: "red"}}>{errors.rentabilidade?.message}</span>
      </ContentInput>

      <ContentInput>
        <p>CDI (ao ano)</p>
        <input type="text" placeholder = {valor?.toString()}/>
        
      </ContentInput>
        <ButtonSubmit type="submit">Simular</ButtonSubmit>
    </ContainerForm>
  );
}
