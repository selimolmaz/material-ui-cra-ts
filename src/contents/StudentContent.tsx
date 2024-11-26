import React, { Suspense, useContext, useEffect } from "react";

import StudentService from "../services/StudentService";
import { StudentContext } from "../context/StudentContext";
import { DepartmentContext } from "../context/DepartmentContext";
import { Typography } from "@mui/material";
import StudentTableView from "../components/student/StudentTableView";
import StudentsGridView from "../components/student/StudentsGridView";

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
                    Student Information
                </Typography>
                <Typography variant="h5" component="h2" sx={{ mb: 2 }}>
                    <StudentTableView students={students} />
                </Typography>
            </Suspense>
        </>
    );
}
export default StudentContent;