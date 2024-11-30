import { Paper, styled, Typography } from '@mui/material';
import * as React from 'react';

import PrereqDTO from '../../models/PrereqDTO';


interface PrereqCardViewProps {
    prereq: PrereqDTO;
}

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.secondary,
    flexGrow: 1,
    ...theme.applyStyles('dark', {
        backgroundColor: '#1A2027',
    }),
}));

export default function PrereqCardView({ prereq }: PrereqCardViewProps) {
    
    return (
        <Item>
            <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                Course: {prereq.prerequisiteCourse.title}
            </Typography>
            <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                Course: {prereq.prereqId}
            </Typography>
        </Item>
    );
}