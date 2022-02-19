/* eslint-disable react/jsx-no-constructed-context-values */
import { useState, ReactNode, useContext, Context, createContext } from 'react';

type ProviderProps = {
    children: ReactNode;
};
type ContextProps = {
    indexacao: string;
    simulate: boolean;
    // active: boolean;
    handleIndexacao: (valor: string) => void;
    handleSimulate: (state: boolean) => void;
};

const ContextButtonIndexacao: Context<ContextProps> = createContext(
    {} as ContextProps
);

export function ProviderContext({ children }: ProviderProps) {
    const [indexacao, setIndexacao] = useState('');
    const [simulate, setSimulate] = useState(false);

    const handleIndexacao = (valor: string) => {
        setIndexacao(valor);
    };
    const handleSimulate = (state) => {
        setSimulate(state);
    };

    return (
        <ContextButtonIndexacao.Provider
            value={{ indexacao, handleIndexacao, simulate, handleSimulate }}
        >
            {children}
        </ContextButtonIndexacao.Provider>
    );
}

export function useContextButtonIndexacao() {
    const context = useContext(ContextButtonIndexacao);
    return context;
}
