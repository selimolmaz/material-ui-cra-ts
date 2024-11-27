import { Paper, styled, Typography } from '@mui/material';
import * as React from 'react';

import TakesDTO from '../../models/TakesDTO';

interface TakeCardViewProps {
    take: TakesDTO;
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

export default function TakesCardView({ take }: TakeCardViewProps) {

    return (
        <Item>
            <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                Course: {take.section.course.title}
            </Typography>
            <Typography variant="body2">
                Grade:{take.grade}
            </Typography>
            <Typography variant="h5" component="div">
                Course Id:{take.courseId}
            </Typography>
            <Typography variant="body2">
                Section Id:{take.secId}
            </Typography>
            <Typography variant="body2">
                Semester: {take.semester}
            </Typography>
            <Typography variant="body2">
                Year: {take.year}
            </Typography>
        </Item>
    );
}