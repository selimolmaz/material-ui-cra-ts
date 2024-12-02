import React, { Suspense, useContext, useEffect } from "react";

import { Box, Container, Paper, styled, Typography } from "@mui/material";
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
    const { section, whoTakes } = useContext(SectionContext)

    return (
        <Box sx={{ height: '100vh' }}>
            <Item>
                <Suspense fallback={<div>Loading...</div>}>
                    <Paper sx={{width: '100%', padding:1}}>
                            Section: {section.courseId}-{section.secId}-{section.semester}-{section.year}-{section.building}-{section.roomNumber} 
                    </Paper>
                    <Container sx={{ display: 'flex', width: '100%', padding: 2 }}>
                        <TakesDepartmentChartView takes={whoTakes} />
                        <TakesChartView takes={whoTakes} />
                    </Container>
                    <Container sx={{ width: '100%' }}>
                        <TakesTableView takes={whoTakes} />
                    </Container>
                </Suspense>
            </Item>
        </Box>
    );
}
export default SectionContent;