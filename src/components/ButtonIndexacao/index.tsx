import { useContextButtonIndexacao } from '../../Context/ContextButtonIndexacao';
import { ButtonActive } from './styled';

export function ButtonIndexacao() {
    const { indexacao, handleIndexacao } = useContextButtonIndexacao();
    return (
        <>
            <ButtonActive
                type="button"
                onClick={() => handleIndexacao('pre')}
                isActive={indexacao === 'pre'}
            >
                Pré
            </ButtonActive>
            <ButtonActive
                type="button"
                onClick={() => handleIndexacao('pos')}
                isActive={indexacao === 'pos'}
            >
                Pos
            </ButtonActive>
            <ButtonActive
                type="button"
                onClick={() => handleIndexacao('ipca')}
                isActive={indexacao === 'ipca'}
            >
                Fixado
            </ButtonActive>
        </>
    );
}
