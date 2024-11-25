import * as React from 'react';
import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';
import DepartmentDTO from '../models/DepartmentDTO';
import { useContext, useEffect, useState } from 'react';
import { DepartmentContext } from '../context/DepartmentContext';
import Typography from '@mui/material/Typography';
import DepartmentService from '../services/DepartmentService';
import { Button, Card, CardActions, CardContent } from '@mui/material';
import EditDepartmentModal from './EditDepartment';

export default function DepartmentDetailView() {
    const { selectedDepartment, departments } = useContext(DepartmentContext);
    const [department, setDepartment] = useState<DepartmentDTO | null>(null);
    
    useEffect(() => {
        const departmentService = new DepartmentService();
        departmentService.getDepartmentById(selectedDepartment).then(data => {
            setDepartment(data);
        });
    }, [selectedDepartment]);

    useEffect(() => {
        const updatedDepartment = departments.find(d => d.deptName === selectedDepartment);
        if (updatedDepartment) {
            setDepartment(updatedDepartment);
        }
    }, [departments, selectedDepartment]);

    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                    Department Information
                </Typography>
                <Typography variant="h5" component="div">
                    {department?.deptName}
                </Typography>
                <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>
                    budget: {department?.budget}
                </Typography>
                <Typography variant="body2">
                    building: {department?.building}
                </Typography>
            </CardContent>
            <CardActions>
                {department && <EditDepartmentModal department={department} />}
            </CardActions>
        </Card>
    );
}

