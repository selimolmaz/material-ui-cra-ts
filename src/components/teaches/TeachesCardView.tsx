import { Paper, styled, Typography } from '@mui/material';
import * as React from 'react';

import PrereqDTO from '../../models/PrereqDTO';
import TeachesDTO from '../../models/TeachesDTO';


interface TeachesCardViewProps {
    teache: TeachesDTO;
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

export default function TeacheCardView({ teache }: TeachesCardViewProps) {

    return (
        <Item>
            <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                Instructor: {teache.instructor.name}
            </Typography>
            <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                Instructor's department: {teache.instructor.deptName}
            </Typography>
            <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                Section: {teache.section.courseId}-{teache.section.secId}-{teache.section.semester}-{teache.section.year}-{teache.section.building}-{teache.section.roomNumber}
            </Typography>
        </Item>
    );
}