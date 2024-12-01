import { Paper, styled, Typography } from '@mui/material';
import * as React from 'react';

import TeachesDTO from '../../models/TeachesDTO';
import TakesDTO from '../../models/TakesDTO';
import { useState } from 'react';
import TakesService from '../../services/TakesService';
import TakesChartView from '../takes/TakesChartView';


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
    const [takes, setTakes] = useState([] as TakesDTO[]);

    React.useEffect(() => {
        const takesService = new TakesService();

        takesService.getTakesBySectionId(teache.courseId, teache.secId, teache.semester, teache.year).then(data => {
            setTakes(data);
        });
    }, [setTakes]);

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
            <TakesChartView takes={takes} /> 
        </Item>
    );
}