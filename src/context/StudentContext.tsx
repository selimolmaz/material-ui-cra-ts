import React, { createContext, useState } from 'react';
import StudentDTO from '../models/StudentDTO';

interface StudentContextProps {
    students: StudentDTO[];
    setStudents: React.Dispatch<React.SetStateAction<StudentDTO[]>>;
    selectedStudents: StudentDTO[];
    setSelectedStudents: React.Dispatch<React.SetStateAction<StudentDTO[]>>;
}

export const StudentContext = createContext<StudentContextProps>({
    students: [],
    setStudents: () => {},
    selectedStudents: [],
    setSelectedStudents: () => {},
});

interface StudentProviderProps {
    children: React.ReactNode;
}

export const StudentProvider: React.FC<StudentProviderProps> = ({ children }) => {
    const [students, setStudents] = useState<StudentDTO[]>([]);
    const [selectedStudents, setSelectedStudents] = useState<StudentDTO[]>([]);

    return (
        <StudentContext.Provider value={{ students, setStudents, selectedStudents, setSelectedStudents }}>
            {children}
        </StudentContext.Provider>
    );
};