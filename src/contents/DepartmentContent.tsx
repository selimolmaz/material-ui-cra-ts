import React, { useEffect, useContext, Suspense } from "react";
import DepartmentService from "../services/DepartmentService";
import DepartmentGridView from "../components/DepartmentGridView";
import { DepartmentContext } from "../context/DepartmentContext";
import { Typography } from "@mui/material";

function DepartmentContent() {
    const { departments, setDepartments } = useContext(DepartmentContext);
    const departmentService = new DepartmentService();

    useEffect(() => {
        departmentService.getDepartments()
            .then(data => setDepartments(data))
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
                <DepartmentGridView departments={departments} />
            )}
        </div>
    );
}
export default DepartmentContent;