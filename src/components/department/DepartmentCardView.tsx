import { IconButton, Paper, styled, Typography } from '@mui/material';
import * as React from 'react';
import DepartmentDTO from '../../models/DepartmentDTO';
import { useContext, useState } from 'react';
import { DepartmentContext } from '../../context/DepartmentContext';
import AddCircleIcon from '@mui/icons-material/AddCircle';

interface DepartmentCardViewProps {
    department: DepartmentDTO;
}

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    margin: theme.spacing(3),
    textAlign: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    color: theme.palette.text.secondary,
    flexGrow: 1,
    ...theme.applyStyles('dark', {
        backgroundColor: '#1A2027',
    }),
}));

export default function DepartmentCardView({ department }: DepartmentCardViewProps) {
    const { setSelectedDepartment } = useContext(DepartmentContext);

    return (
        <Item>
            <Typography variant="h5" component="div" >
                {department.deptName}
            </Typography>
            <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                {department.building}
            </Typography>
            <Typography variant="body2">
                {department.budget}
            </Typography>
            <Typography variant="body2">
                <IconButton onClick={() => setSelectedDepartment(department)}><AddCircleIcon/></IconButton>
            </Typography>
        </Item>
    );
}