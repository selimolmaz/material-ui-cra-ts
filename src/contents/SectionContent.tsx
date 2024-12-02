import React, { Suspense, useContext, useEffect } from "react";

import { Box, Paper, styled, Typography } from "@mui/material";
import { SectionContext } from "../context/SectionContext";
import TakesChartView from "../components/takes/TakesChartView";
import TakesDepartmentChartView from "../components/takes/TakesDepartmentChart";
import TakesTableView from "../components/takes/TakesTableView";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
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
                    <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                        Section: {section.courseId}-{section.secId}-{section.semester}-{section.year}-{section.building}-{section.roomNumber}   
                    </Typography>
                    <TakesDepartmentChartView takes={whoTakes} />
                    <TakesChartView takes={whoTakes} />
                    <TakesTableView takes={whoTakes} />
                </Suspense>
            </Item>
        </Box>
    );
}
export default SectionContent;