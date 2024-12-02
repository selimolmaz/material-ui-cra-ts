import { IconButton, Paper, styled, Typography } from '@mui/material';
import * as React from 'react';

import TeachesDTO from '../../models/TeachesDTO';
import TakesDTO from '../../models/TakesDTO';
import { useContext, useEffect, useState } from 'react';
import TakesService from '../../services/TakesService';
import TakesChartView from '../takes/TakesChartView';
import { SectionContext } from '../../context/SectionContext';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { StudentContext } from '../../context/StudentContext';
import TakesDepartmentChartView from '../takes/TakesDepartmentChart';


interface TeachesCardViewProps {
    teache: TeachesDTO;
}

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    margin: theme.spacing(1),
    flexWrap: 'wrap',
    color: theme.palette.text.secondary,
    flexGrow: 1,
    ...theme.applyStyles('dark', {
        backgroundColor: '#1A2027',
    }),
}));

export default function TeacheCardView({ teache }: TeachesCardViewProps) {
    const [takes, setTakes] = useState([] as TakesDTO[]);
    const { setSection, setWhoTakes } = useContext(SectionContext);
    const { students, setStudents } = useContext(StudentContext);
    
    useEffect(() => {
        const takesService = new TakesService();

        takesService.getTakesBySectionId(teache.courseId, teache.secId, teache.semester, teache.year).then(data => {
            setTakes(data);
        });

    }, [teache.courseId, teache.secId, teache.semester, teache.year]);

    function handleClick() {
        setSection(teache.section);
        setStudents(takes.map((take) => take.student));
        setWhoTakes(takes);
    }

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
            <IconButton onClick={() => handleClick()}><AddCircleIcon /></IconButton>
        </Item>
    );
}