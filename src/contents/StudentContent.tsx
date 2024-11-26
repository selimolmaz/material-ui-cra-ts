import React, { Suspense, useContext, useEffect } from "react";

import StudentService from "../services/StudentService";
import { StudentContext } from "../context/StudentContext";
import { DepartmentContext } from "../context/DepartmentContext";
import { Typography } from "@mui/material";
import StudentTableView from "../components/student/StudentTableView";
import StudentsStackView from "../components/student/StudentsStackView";


const StudentContent: React.FC = () => {
    const { students, setStudents, selectedStudents } = useContext(StudentContext);
    const { selectedDepartment } = useContext(DepartmentContext);

    useEffect(() => {
        const studentService = new StudentService();
        studentService.getStudentsByDeptName(selectedDepartment.deptName).then(data => {
            setStudents(data);
        });
    }, [selectedDepartment, setStudents]);

    return (
        <>
            <Suspense fallback={<div>Loading...</div>}>
                <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
                    Student Information of {selectedDepartment.deptName}
                </Typography>
                <Typography variant="h5" component="h2" sx={{ mb: 2 }}>
                    <StudentTableView students={students} />
                </Typography>
                <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
                    Selected Students
                </Typography>
                <Typography variant="h5" component="h2" sx={{ mb: 2 }}>
                    <StudentsStackView students={selectedStudents} />
                </Typography>
            </Suspense>
        </>
    );
}
export default StudentContent;