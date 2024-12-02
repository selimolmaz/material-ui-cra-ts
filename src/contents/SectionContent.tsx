import React, { Suspense, useContext, useEffect } from "react";

import { Box, Paper, Stack, styled, Typography } from "@mui/material";
import { SectionContext } from "../context/SectionContext";
import TakesChartView from "../components/takes/TakesChartView";
import { StudentContext } from "../context/StudentContext";
import { alignProperty } from "@mui/material/styles/cssUtils";
import TakesDepartmentChartView from "../components/takes/TakesDepartmentChart";

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
    const { students } = useContext(StudentContext);

    return (
        <Item>
            <Suspense fallback={<div>Loading...</div>}>
                <TakesDepartmentChartView takes={whoTakes} />
                <TakesChartView takes={whoTakes} />
            </Suspense>
        </Item>
    );
}
export default SectionContent;