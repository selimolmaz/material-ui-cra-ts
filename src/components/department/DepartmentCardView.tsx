import { Button, Card, CardActions, CardContent, Radio, Typography } from '@mui/material';
import * as React from 'react';
import DepartmentDTO from '../../models/DepartmentDTO';
import { useContext, useState } from 'react';
import EditDepartmentModal from './EditDepartment';
import { DepartmentContext } from '../../context/DepartmentContext';

interface DepartmentCardViewProps {
    department: DepartmentDTO;
}

export default function DepartmentCardView({ department }: DepartmentCardViewProps) {
    const [modalOpen, setModalOpen] = useState(false);
    const handleOpenModal = () => setModalOpen(true);
    const handleCloseModal = () => setModalOpen(false);
    const { setSelectedDepartment } = useContext(DepartmentContext);
    
    const setDepartment = (department: DepartmentDTO) => {
        setSelectedDepartment(department);
    }

    return (
        <Card sx={{ minWidth: 222 }}>
            <CardContent>
                <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                    {department.deptName}
                </Typography>
                <Typography variant="h5" component="div">
                    {department.building}
                </Typography>
                <Typography variant="body2">
                    {department.budget}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="medium" onClick={handleOpenModal}>Edit Department</Button>
            </CardActions>
            <CardActions>
                <Button size="medium" onClick={() => setDepartment(department)}>Show Student</Button>
            </CardActions>
            <EditDepartmentModal
                department={department}
                open={modalOpen}
                onClose={handleCloseModal}
            />
        </Card>
    );
}