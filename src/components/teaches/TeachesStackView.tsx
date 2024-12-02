import * as React from 'react';
import Box from '@mui/material/Box';
import { Stack, Typography } from '@mui/material';
import TeachesDTO from '../../models/TeachesDTO';
import TeacheCardView from './TeachesCardView';



interface TeachesStackViewProps {
    teaches: TeachesDTO[];
}

export default function TeachesStackView({ teaches }: TeachesStackViewProps) {
    return (
        <Box sx={{ width: '100%'}}>
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

