
import React, { createContext, useState } from 'react';
import StudentDTO from '../models/StudentDTO';

interface StudentContextProps {
    students: StudentDTO[];
    setStudents: React.Dispatch<React.SetStateAction<StudentDTO[]>>;
}

export const StudentContext = createContext<StudentContextProps>({
    students: [],
    setStudents: () => {},
});

interface StudentProviderProps {
    children: React.ReactNode;
}

export const StudentProvider: React.FC<StudentProviderProps> = ({ children }) => {
    const [students, setStudents] = useState<StudentDTO[]>([]);

    return (
        <StudentContext.Provider value={{ students, setStudents }}>
            {children}
        </StudentContext.Provider>
    );
};