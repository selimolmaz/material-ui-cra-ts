import { IconButton, Paper, styled, Typography } from '@mui/material';
import * as React from 'react';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { StudentContext } from '../../context/StudentContext';

import TeachesDTO from '../../models/TeachesDTO';
import TakesDTO from '../../models/TakesDTO';
import { Suspense, useContext, useEffect, useState } from 'react';
import TakesService from '../../services/TakesService';
import { SectionContext } from '../../context/SectionContext';

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
    const { setSection, setWhoTakes } = useContext(SectionContext);

    async function handleClick() {
        const takesService = new TakesService();
        takesService.getTakesBySectionId(teache.courseId, teache.secId, teache.semester, teache.year).then(data => {
            setWhoTakes(data);
        }).catch(err => { console.log(err) });
        setSection(teache.section);
    }

    return (
        <Suspense fallback={<div>Loading...</div>}>
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
        </Suspense>
    );
}