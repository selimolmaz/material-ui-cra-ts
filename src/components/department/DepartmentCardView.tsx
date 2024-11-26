import { Button, Card, CardActions, CardContent, Typography } from '@mui/material';
import * as React from 'react';
import DepartmentDTO from '../../models/DepartmentDTO';
import { useState } from 'react';
import EditDepartmentModal from './EditDepartment';

interface DepartmentCardViewProps {
    department: DepartmentDTO;
}

export default function DepartmentCardView({ department }: DepartmentCardViewProps) {
    const [modalOpen, setModalOpen] = useState(false);

    const handleOpenModal = () => setModalOpen(true);
    const handleCloseModal = () => setModalOpen(false);

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
                <Button size="small" onClick={handleOpenModal}>Edit</Button>
            </CardActions>
            <EditDepartmentModal
                department={department}
                open={modalOpen}
                onClose={handleCloseModal}
            />
        </Card>
    );
}