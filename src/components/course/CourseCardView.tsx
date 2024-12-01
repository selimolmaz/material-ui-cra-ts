import { Box, Paper, Stack, styled, Typography } from '@mui/material';
import * as React from 'react';
import { useEffect, useState } from 'react';

import CourseDTO from '../../models/CourseDTO';
import PrereqDTO from '../../models/PrereqDTO';
import PrereqService from '../../services/PrereqService';
import PrereqStackView from './PrereqStackView';
import TeachesDTO from '../../models/TeachesDTO';
import TeachesService from '../../services/TeachesService';
import TeachesStackView from '../teaches/TeachesStackView';

interface CourseCardViewProps {
    course: CourseDTO;
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

export default function CourseCardView({ course }: CourseCardViewProps) {
    const [teaches, setTeaches] = useState([] as TeachesDTO[]);
    const [prereqs, setPrereqs] = useState([] as PrereqDTO[]);



    useEffect(() => {
        const prereqService = new PrereqService();
        const teachesService = new TeachesService();

        teachesService.getTeachesByCourseId(course.courseId).then(data => {
            setTeaches(data);
        });

        prereqService.getPrereqsByCourseId(course.courseId).then(data => {
            setPrereqs(data);
        });
    }, [setPrereqs, setTeaches]);
    return (
        <Item>
            <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                Course: {course.title}
            </Typography>
            <Typography variant="body2">
                Credits: {course.credits}
            </Typography>
            <Typography variant="h5" component="div">
                Course Id: {course.courseId}
            </Typography>
            {prereqs.length > 0 &&
                <Typography component="div" margin={1}>
                    <PrereqStackView prereqs={prereqs} />
                </Typography>
            }
            {teaches.length > 0 &&
                <Typography component="div" margin={1}>
                    <TeachesStackView teaches={teaches} />
                </Typography>
            }
        </Item>
    );
}