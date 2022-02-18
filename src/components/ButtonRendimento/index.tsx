import { useState } from 'react';

import { ButtonActive } from './styled';

export function ButtonRendimento() {
    const [rendimento, setRendimento] = useState('');
    const [active, setActive] = useState(false);

    return (
        <>
            <ButtonActive
                className={active ? 'active' : ''}
                type="button"
                onClick={() => setRendimento('bruto')}
                isActive={rendimento === 'bruto'}
            >
                Bruto
            </ButtonActive>
            <ButtonActive
                className={active ? 'active' : ''}
                type="button"
                onClick={() => setRendimento('liquido')}
                isActive={rendimento === 'liquido'}
            >
                liquido
            </ButtonActive>
        </>
    );
}
