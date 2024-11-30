import * as React from 'react';
import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';
import StudentDTO from '../../models/StudentDTO';
import { Paper, Stack, styled } from '@mui/material';
import CourseDTO from '../../models/CourseDTO';
import CourseCardView from './CourseCardView';



interface CoursesStackViewProps {
    courses: CourseDTO[];
}

export default function CourseStackView({ courses }: CoursesStackViewProps) {
    return (
        <Box sx={{ width: '100%'}}>
            <Stack
                spacing={{ xs: 1, sm: 2 }}
                direction="row"
                useFlexGap
                sx={{ flexWrap: 'wrap' }}
            >
                {courses.map((course) => (<CourseCardView key={`course-detail-${course.courseId}`} course={course}/>))}
            </Stack>
        </Box>
    );
}

