import React, { useContext } from 'react';
import { DataGrid, GridColDef, GridRowSelectionModel } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { StudentContext } from '../../context/StudentContext';
import StudentDTO from '../../models/StudentDTO';

interface StudentTableViewProps {
    students: StudentDTO[];
}

export default function StudentTableView({ students }: StudentTableViewProps) {
    const { selectedStudents, setSelectedStudents } = useContext(StudentContext);
    
    const rows = students.map((student) => {
        return {
            id: student.id,
            name: student.name,
            totCred: student.totCred,
            deptName: student.deptName
        }
    });

    const columns: GridColDef[] = [
        { field: 'deptName', headerName: 'Department', width: 130 },
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'name', headerName: 'Name', width: 130 },
        { field: 'totCred', headerName: 'Total Credits', width: 130 },
    ];

    const paginationModel = { page: 0, pageSize: 10 };

    const handleSelectionChange = (selection: GridRowSelectionModel) => {
        const selectedIDs = new Set(selection);
        const selectedStudents = students.filter((student) => selectedIDs.has(student.id));
        setSelectedStudents(selectedStudents);
    };

    return (
        <Paper sx={{ height: 630, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{ pagination: { paginationModel } }}
                pageSizeOptions={[5, 10, 20, 30, 40, 50]}
                checkboxSelection
                onRowSelectionModelChange={handleSelectionChange}
                sx={{ border: 0 }}
            />
        </Paper>
    );
}