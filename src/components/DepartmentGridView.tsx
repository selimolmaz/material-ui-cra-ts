import * as React from 'react';
import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';
import DepartmentDTO from '../models/DepartmentDTO';
import DepartmentCardView from './DepartmentCardView';



interface DepartmentTreeProps {
    departments: DepartmentDTO[];
}

export default function DepartmentGridView({ departments }: DepartmentTreeProps) {
    return (
        <Box sx={{ width: '100%', margin: 2}}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 20, sm: 2, md: 3 }}>
                {departments.map((department) => (
                    <Grid key={department.deptName}>
                        <DepartmentCardView department={department} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

