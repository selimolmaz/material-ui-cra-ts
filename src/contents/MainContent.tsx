import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import DepartmentContent from './DepartmentContent';
import { DepartmentProvider } from '../context/DepartmentContext';
import { StudentProvider } from '../context/StudentContext';
import CourseContent from './CourseContent';
import { SectionProvider } from '../context/SectionContext';
import SectionContent from './SectionContent';

const MainContent = () => {
    return (
        <DepartmentProvider>
            <SectionProvider>
                <StudentProvider>
                    <Container>
                        <Box sx={{ my: 4 }}>
                            <Typography variant="h5" component="h1" sx={{ mb: 2 }}>
                                University Database Example
                            </Typography>
                            <Typography variant="h2" component="h1" sx={{ mb: 2 }}>
                                Database System Concepts
                                7th Edition
                            </Typography>
                        </Box>
                        <Box sx={{ my: 4 }}>
                            <DepartmentContent />
                        </Box>
                        <Box sx={{ my: 4 }}>
                            <CourseContent />
                        </Box>


                    </Container>
                </StudentProvider>
            </SectionProvider>
        </DepartmentProvider>
    );
}

export default MainContent;