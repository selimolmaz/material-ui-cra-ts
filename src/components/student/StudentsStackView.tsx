import * as React from 'react';
import Box from '@mui/material/Box';
import StudentDTO from '../../models/StudentDTO';
import { Paper, Stack, styled } from '@mui/material';
import StudentCardView from './StudentCardView';



interface StudentsStackViewProps {
    students: StudentDTO[];
}

export default function StudentsStackView({ students }: StudentsStackViewProps) {
    return (
        <Box sx={{ width: '100%', margin: 2 }}>
            <Stack
                spacing={{ xs: 1, sm: 2 }}
                direction="row"
                useFlexGap
                sx={{ flexWrap: 'wrap' }}
            >
                {students.map((student) => (<StudentCardView key={`student-detail-${student.id}`} student={student}/>))}
            </Stack>
        </Box>
    );
}

