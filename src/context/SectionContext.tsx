import React, { createContext, useState } from 'react';
import SectionDTO from '../models/SectionDTO';
import TakesDTO from '../models/TakesDTO';

interface SectionContextProps {
    section: SectionDTO;
    setSection: React.Dispatch<React.SetStateAction<SectionDTO>>;
    whoTakes: TakesDTO[];
    setWhoTakes: React.Dispatch<React.SetStateAction<TakesDTO[]>>;
}

export const SectionContext = createContext<SectionContextProps>({
    section: {} as SectionDTO,
    setSection: () => { },
    whoTakes: [] as TakesDTO[],
    setWhoTakes: () => { },
});

interface SectionProviderProps {
    children: React.ReactNode;
}

export const SectionProvider: React.FC<SectionProviderProps> = ({ children }) => {
    const [section, setSection] = useState<SectionDTO>({} as SectionDTO);
    const [whoTakes, setWhoTakes] = useState<TakesDTO[]>([] as TakesDTO[]);
    return (
        <SectionContext.Provider value={{ section, setSection, whoTakes, setWhoTakes }}>
            {children}
        </SectionContext.Provider>
    );
};