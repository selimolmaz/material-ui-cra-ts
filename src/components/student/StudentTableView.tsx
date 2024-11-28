import React, { useContext, useState } from 'react';
import { DataGrid, GridColDef, GridRowSelectionModel } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { StudentContext } from '../../context/StudentContext';
import StudentDTO from '../../models/StudentDTO';
import { Button } from '@mui/material';
import EditStudentModal from './EditStudentModal';


interface StudentTableViewProps {
    students: StudentDTO[];
}

export default function StudentTableView({ students }: StudentTableViewProps) {
    const { setSelectedStudents } = useContext(StudentContext);
    const [editStudent, setEditStudent] = useState<StudentDTO | null>(null);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    
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
        {
            field: 'action',
            headerName: 'Action',
            width: 150,
            renderCell: (params) => (
                <Button
                    variant="text"
                    color="primary"
                    onClick={(event) => {
                        event.stopPropagation(); // Satır seçimini engelle
                        handleEdit(params.row.id);
                    }}
                >
                    ✍️
                </Button>
            ),
        },
    ];

    const paginationModel = { page: 0, pageSize: 10 };

    const handleEdit = (id: string) => {
        const studentToEdit = students.find(student => student.id === id);
        if (studentToEdit) {
            setEditStudent(studentToEdit);
            setIsEditModalOpen(true);
        }
    };

    const handleCloseEditModal = () => {
        setIsEditModalOpen(false);
        setEditStudent(null);
    };

    const handleSelectionChange = (selection: GridRowSelectionModel) => {
        const selectedIDs = new Set(selection);
        const selectedStudents = students.filter((student) => selectedIDs.has(student.id));
        setSelectedStudents(selectedStudents);
    };

    return (
        <>
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
            {editStudent && (
                <EditStudentModal
                    student={editStudent}
                    open={isEditModalOpen}
                    onClose={handleCloseEditModal}
                />
            )}
        </>
    );
}