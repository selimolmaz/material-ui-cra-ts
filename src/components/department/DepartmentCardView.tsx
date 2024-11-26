import { Button, Card, CardActions, CardContent, Paper, Radio, styled, Typography } from '@mui/material';
import * as React from 'react';
import DepartmentDTO from '../../models/DepartmentDTO';
import { useContext, useState } from 'react';
import EditDepartmentModal from './EditDepartment';
import { DepartmentContext } from '../../context/DepartmentContext';

interface DepartmentCardViewProps {
    department: DepartmentDTO;
}

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    flexGrow: 1,
    ...theme.applyStyles('dark', {
        backgroundColor: '#1A2027',
    }),
}));

export default function DepartmentCardView({ department }: DepartmentCardViewProps) {
    const [modalOpen, setModalOpen] = useState(false);
    const handleOpenModal = () => setModalOpen(true);
    const handleCloseModal = () => setModalOpen(false);
    const { setSelectedDepartment } = useContext(DepartmentContext);

    const setDepartment = (department: DepartmentDTO) => {
        setSelectedDepartment(department);
    }

    return (
        <Item>
            <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                {department.deptName}
            </Typography>
            <Typography variant="h5" component="div">
                {department.building}
            </Typography>
            <Typography variant="body2">
                {department.budget}
            </Typography>
            <Typography variant="body2">
                <Button size="medium" onClick={handleOpenModal}>Edit Department</Button>
            </Typography>
            <Typography variant="body2">
                <Button size="medium" onClick={() => setDepartment(department)}>Show Student</Button>
            </Typography>
            <EditDepartmentModal
                department={department}
                open={modalOpen}
                onClose={handleCloseModal}
            />
        </Item>
    );
}