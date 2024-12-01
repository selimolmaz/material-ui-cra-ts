import React, { Suspense, useContext, useEffect } from "react";

import StudentService from "../services/StudentService";
import { StudentContext } from "../context/StudentContext";
import { DepartmentContext } from "../context/DepartmentContext";
import { Box, Typography } from "@mui/material";
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
                <Typography variant="h5" component="h1" sx={{ mb: 2 }}>
                    Student Information of {selectedDepartment.deptName}
                </Typography>
                <Typography variant="h5" component="h2" sx={{ mb: 2 }}>
                    { selectedStudents && selectedStudents.length > 0 ? <StudentsStackView students={selectedStudents} /> : 
                    <Typography style={{height:'100%'}}>If you wanna see student takes<br/> please select student on list</Typography> }
                </Typography>
            </Suspense>
        </>
    );
}
export default StudentContent;