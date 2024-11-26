import * as React from 'react';
import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';
import DepartmentDTO from '../../models/DepartmentDTO';
import DepartmentCardView from './DepartmentCardView';
import { Stack } from '@mui/material';



interface DepartmentStackProps {
    departments: DepartmentDTO[];
}

export default function DepartmentStackView({ departments }: DepartmentStackProps) {
    return (
        <Stack
            spacing={{ xs: 1, sm: 2 }}
            direction="row"
            useFlexGap
            sx={{ flexWrap: 'wrap' }}
        >
            {departments.map((department) => (<DepartmentCardView key={department.deptName} department={department} />))}
        </Stack>
    );
}

