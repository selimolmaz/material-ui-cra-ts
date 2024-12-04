import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import TakesDTO from '../../models/TakesDTO';

interface TakesTableViewProps {
  takes: TakesDTO[];
}

const paginationModel = { page: 0, pageSize: 5 };

const columns: GridColDef[] = [
  { field: 'studentId', headerName: 'Student ID', width: 150 },
  { field: 'courseId', headerName: 'Course ID', width: 150 },
  { field: 'grade', headerName: 'Grade', width: 100 },
  { field: 'year', headerName: 'Year', width: 100 },
  { field: 'deptName', headerName: 'Department', width: 200 },
  { field: 'courseName', headerName: 'Course Name', width: 150 },
];

const TakesTableView: React.FC<TakesTableViewProps> = React.memo(({ takes }) => {
  
  const rows = React.useMemo(() => takes.map((take, index) => ({
    id: index,
    studentId: take.studentId,
    courseId: take.courseId,
    grade: take.grade,
    year: take.year,
    deptName: take.student.deptName,
    courseName: take.section.course.title,
  })), [takes]);

  return (
    <Paper sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10, 25]}
        sx={{ border: 0 }}
      />
    </Paper>
  );
});

export default TakesTableView;