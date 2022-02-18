/* eslint-disable react/jsx-no-constructed-context-values */
import { useState, ReactNode, useContext, Context, createContext } from 'react';

type ProviderProps = {
    children: ReactNode;
};
type ContextProps = {
    indexacao: string;
    // active: boolean;
    handleIndexacao: (valor: string) => void;
};

const ContextButtonIndexacao: Context<ContextProps> = createContext(
    {} as ContextProps
);

export function ProviderContext({ children }: ProviderProps) {
    const [rendimento, setRendimento] = useState('');
    const [active, setActive] = useState(false);

    const handleIndexacao = (valor: string) => {
        setRendimento(valor);
    };

    return (
        <ContextButtonIndexacao.Provider
            value={{ indexacao: rendimento, handleIndexacao }}
        >
            {children}
        </ContextButtonIndexacao.Provider>
    );
}

export function useContextButtonIndexacao() {
    const context = useContext(ContextButtonIndexacao);
    return context;
}
