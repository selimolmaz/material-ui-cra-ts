import React, { Suspense, useContext, useEffect } from "react";

import { Box, Container, Fade, Paper, styled, Tab, Tabs, Typography, useMediaQuery } from "@mui/material";
import { SectionContext } from "../context/SectionContext";
import TakesChartView from "../components/takes/TakesChartView";
import TakesDepartmentChartView from "../components/takes/TakesDepartmentChart";
import TakesTableView from "../components/takes/TakesTableView";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
    flexWrap: 'wrap',
    flexGrow: 1,
    ...theme.applyStyles('dark', {
        backgroundColor: '#1A2027',
    }),
}));


function SectionContent() {
    const { section, whoTakes } = useContext(SectionContext);
    const isSmallScreen = useMediaQuery('(max-width:600px)');
    const hasSectionData = Boolean(section.courseId);
    const [value, setValue] = React.useState(0);
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ height: '50vh', width: '100%'}}>
            <Fade in={hasSectionData}>
                <Box>
                    <Typography sx={{ marginBottom: 2 }}>
                        Section: {section.courseId}-{section.secId}-{section.semester}-{section.year}-{section.building}-{section.roomNumber}
                    </Typography>
                    <Suspense fallback={<div style={{ width: '100%', height: '100%' }}>Loading...</div>}>
                        <Tabs value={value} onChange={handleChange} centered>
                            <Tab label="Charts" />
                            <Tab label="Who Takes This Course" />
                        </Tabs>
                        {value === 0 && (
                            <Container
                                sx={{
                                    display: 'flex',
                                    flexDirection: isSmallScreen ? 'column' : 'row',
                                }}
                            >
                                <TakesDepartmentChartView takes={whoTakes} />
                                <TakesChartView takes={whoTakes} />
                            </Container>
                        )}
                        {value === 1 && (
                            <Container>
                                <TakesTableView takes={whoTakes} />
                            </Container>
                        )}
                    </Suspense>
                </Box>
            </Fade>
        </Box>
    );
}
export default SectionContent;