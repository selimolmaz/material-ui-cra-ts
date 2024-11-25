import * as React from 'react';
import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';
import DepartmentDTO from '../models/DepartmentDTO';
import { useContext } from 'react';
import { DepartmentContext } from '../context/DepartmentContext';
import { Button, ButtonBase, ButtonGroup, colors, StepButton } from '@mui/material';



interface DepartmentTreeProps {
    departments: DepartmentDTO[];
}

export default function DepartmentGridView({ departments }: DepartmentTreeProps) {
    const { setSelectedDepartment } = useContext(DepartmentContext);

    return (
        <Box sx={{ width: '100%', margin: 2}}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 20, sm: 2, md: 3 }}>
                {departments.map((department) => (
                    <Grid key={department.deptName}>
                        <Button onClick={() => setSelectedDepartment(department.deptName)} id={department.deptName}>{department.deptName}</Button>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

