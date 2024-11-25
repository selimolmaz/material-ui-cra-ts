import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import DepartmentContent from './DepartmentContent';
import StudentContent from './StudentContent';
import { DepartmentProvider } from '../context/DepartmentContext';
import { StudentProvider } from '../context/StudentContext';

const MainContent = () => {
    const [value, setValue] = React.useState('1');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    return (
        <DepartmentProvider>
            <StudentProvider>
                <Container>
                    <Box sx={{ my: 4 }}>
                        <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
                            University Database Example
                            Database System Concepts
                            7th Edition
                        </Typography>
                        <DepartmentContent />
                    </Box>
                </Container>
            </StudentProvider>
        </DepartmentProvider>
    );
}

export default MainContent;