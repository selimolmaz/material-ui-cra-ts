import React, { createContext, useState } from 'react';
import DepartmentDTO from '../models/DepartmentDTO';

interface DepartmentContextProps {
    departments: DepartmentDTO[];
    setDepartments: React.Dispatch<React.SetStateAction<DepartmentDTO[]>>;
    selectedDepartment: string;
    setSelectedDepartment: React.Dispatch<React.SetStateAction<string>>;
}

export const DepartmentContext = createContext<DepartmentContextProps>({
    departments: [],
    setDepartments: () => {},
    selectedDepartment: 'Math',
    setSelectedDepartment: () => {},
});

interface DepartmentProviderProps {
    children: React.ReactNode;
}

export const DepartmentProvider: React.FC<DepartmentProviderProps> = ({ children }) => {
    const [departments, setDepartments] = useState<DepartmentDTO[]>([]);
    const [selectedDepartment, setSelectedDepartment] = useState<string>('Math');

    return (
        <DepartmentContext.Provider value={{ departments, setDepartments, selectedDepartment, setSelectedDepartment }}>
            {children}
        </DepartmentContext.Provider>
    );
};