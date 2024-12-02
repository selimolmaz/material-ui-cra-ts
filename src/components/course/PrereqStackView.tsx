import * as React from 'react';
import Box from '@mui/material/Box';
import { Stack, Typography } from '@mui/material';
import PrereqDTO from '../../models/PrereqDTO';
import PrereqCardView from './PrereqCardView';

interface PrereqStackViewProps {
    prereqs: PrereqDTO[];
}

export default function PrereqStackView({ prereqs }: PrereqStackViewProps) {
    return (
        <Box sx={{ width: '100%'}}>
            <Typography variant="h5" component="h1" sx={{ mb: 2 }}>
                Prereqs:
            </Typography>
            <Stack
                spacing={{ xs: 1, sm: 2 }}
                direction="row"
                useFlexGap
                sx={{ flexWrap: 'wrap' }}
            >
                {prereqs.map((prereq) => (<PrereqCardView key={`prereq-detail-${prereq.prereqId}-${prereq.courseId}`} prereq={prereq}/>))}
            </Stack>
        </Box>
    );
}

