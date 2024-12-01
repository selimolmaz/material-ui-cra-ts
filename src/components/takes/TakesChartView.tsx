import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

import TakesDTO from "../../models/TakesDTO";

interface TakesChartViewProps {
    takes: TakesDTO[];
}

function TakesChartView({ takes }: TakesChartViewProps) {
  // Grade sayımlarını hesapla
  const gradeCounts = takes.reduce((acc, take) => {
    acc[take.grade] = (acc[take.grade] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  // BarChart için veriyi hazırla
  const grades = Object.keys(gradeCounts);
  const counts = Object.values(gradeCounts);

  return (
    <BarChart
      series={[
        {
          data: counts,
          color: '#1976d2',
        },
      ]}
      xAxis={[{ data: grades, scaleType: 'band' }]}
      width={400}
      height={200}
    />
  );
}

export default TakesChartView;