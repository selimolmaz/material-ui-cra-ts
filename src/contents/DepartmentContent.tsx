import React, { useEffect, useContext, Suspense } from "react";
import DepartmentService from "../services/DepartmentService";
import DepartmentStackView from "../components/department/DepartmentStackView";
import { DepartmentContext } from "../context/DepartmentContext";
import { Typography } from "@mui/material";

function DepartmentContent() {
    const { departments, setDepartments, setSelectedDepartment } = useContext(DepartmentContext);
    const departmentService = new DepartmentService();

    useEffect(() => {
        departmentService.getDepartments()
            .then(data => {
                setDepartments(data); 
                setSelectedDepartment(data[0]);}) // başlangıçta seçili olan departman
            .catch(error => console.error("Error fetching departments:", error));
    }, [setDepartments]);


    return (
        <div>
            <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
                Departments
            </Typography>
            {departments.length === 0 ? (
                <div>Loading...</div>
            ) : (
                <DepartmentStackView departments={departments} />
            )}
        </div>
    );
}
export default DepartmentContent;