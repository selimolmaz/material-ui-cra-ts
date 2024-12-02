import * as React from 'react';
import { PieChart } from '@mui/x-charts';
import TakesDTO from "../../models/TakesDTO";

interface TakesDepartmentChartViewProps {
    takes: TakesDTO[];
}

const pieParams = {
    height: 200,
    margin: { right: 5 },
    slotProps: { legend: { hidden: true } },
};

function TakesDepartmentChartView({ takes }: TakesDepartmentChartViewProps) {
    const departmentCounts = takes.reduce((acc, take) => {
        acc[take.student.deptName] = (acc[take.student.deptName] || 0) + 1;
        return acc;
    }, {} as Record<string, number>);

    const data = Object.keys(departmentCounts).map((department, index) => ({
        id: index,
        value: departmentCounts[department],
        label: department,
    }));

    return (
        <PieChart
            series={[
                {
                    data: data,
                },
            ]}
            {...pieParams}
            width={400}
            height={200}
            sx={{ minHeight: '200px', minWidth: '400px' }}
        />
    );
}

export default TakesDepartmentChartView;