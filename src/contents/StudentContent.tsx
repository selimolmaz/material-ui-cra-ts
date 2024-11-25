import React, { Suspense, useContext, useEffect } from "react";

import StudentService from "../services/StudentService";
import { StudentContext } from "../context/StudentContext";
import { DepartmentContext } from "../context/DepartmentContext";
import { Typography } from "@mui/material";

const StudentContent: React.FC = () => {
    const { students, setStudents } = useContext(StudentContext);
    const { selectedDepartment } = useContext(DepartmentContext);

    useEffect(() => {
        const studentService = new StudentService();
        studentService.getStudentsByDeptName(selectedDepartment).then(data => {
            setStudents(data);
        });
    }, [selectedDepartment, setStudents]);

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
                Student Information
            </Typography>
            <div>{students.map((student) => (
                <div key={student.id}>{student.name}</div>
            ))}</div>
        </Suspense>
    );
}
export default StudentContent;