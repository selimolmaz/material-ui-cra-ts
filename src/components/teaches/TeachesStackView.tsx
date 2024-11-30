import * as React from 'react';
import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';
import StudentDTO from '../../models/StudentDTO';
import { Paper, Stack, styled, Typography } from '@mui/material';
import CourseDTO from '../../models/CourseDTO';
import TeachesDTO from '../../models/TeachesDTO';
import TeacheCardView from './TeachesCardView';



interface TeachesStackViewProps {
    teaches: TeachesDTO[];
}

export default function TeachesStackView({ teaches }: TeachesStackViewProps) {
    return (
        <Box sx={{ width: '100%'}}>
            <Typography variant="h5" component="h1" sx={{ mb: 2 }}>
                Teaches:
            </Typography>
            <Stack
                spacing={{ xs: 1, sm: 2 }}
                direction="row"
                useFlexGap
                sx={{ flexWrap: 'wrap' }}
            >
                {teaches.map((teache) => (<TeacheCardView key={`teaches-detail-${teache.instructorId}-${teache.courseId}-${teache.secId}-${teache.semester}-${teache.year}`} teache={teache} />))}
            </Stack>
        </Box>
    );
}

