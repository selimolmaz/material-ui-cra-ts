import * as React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import StudentDTO from '../../models/StudentDTO';
import StudentService from '../../services/StudentService';
import { StudentContext } from '../../context/StudentContext';
import { FormControl, InputLabel, MenuItem, Paper, Select, SelectChangeEvent } from '@mui/material';

import { useContext, useState } from 'react';
import SnackbarMessage from '../SnackbarMessage';
import { DepartmentContext } from '../../context/DepartmentContext';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  boxShadow: 24,
  p: 4,
};

interface EditStudentProps {
    student: StudentDTO;
    open: boolean;
    onClose: () => void;
}

export default function EditStudentModal({ student, open, onClose }: EditStudentProps) {
  const { students, setStudents, selectedStudents, setSelectedStudents } = useContext(StudentContext);
  const { departments } = useContext(DepartmentContext);
  const [name, setName] = useState(student.name);
  const [totCred, setTotCred] = useState(student.totCred);
  const [deptName, setDeptName] = useState(student.deptName);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState<'success' | 'error'>('success');

  const handleClose = () => {
    onClose();
  };
  const handleSnackbarClose = () => setSnackbarOpen(false);

  const handleSave = async () => {
    const updatedStudent: StudentDTO = { ...student, name, totCred, deptName };
    try {
      await new StudentService().updateStudent(updatedStudent);
      setSnackbarMessage('Student updated successfully');
      setSnackbarSeverity('success');
      setStudents(students.map(s => s.id === student.id ? updatedStudent : s)); // Update student in students list
      setSelectedStudents(selectedStudents.map(s => s.id === student.id ? updatedStudent : s)); // Update student in selected students list
    } catch (error) {
      setSnackbarMessage('Failed to update student');
      setSnackbarSeverity('error');
    } finally {
      setSnackbarOpen(true);
    }
  };

  const handleDeptChange = (event: SelectChangeEvent) => {
    setDeptName(event.target.value as string);
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Paper sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Edit Student <strong>{student.name}</strong>
          </Typography>
          <TextField
            label="Name"
            value={name}
            type='text'
            onChange={(e) => setName(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Total Credits"
            value={totCred}
            type='number'
            onChange={(e) => setTotCred(Number(e.target.value))}
            fullWidth
            margin="normal"
          />
          <FormControl fullWidth>
              <InputLabel id="dept-select-label">Department</InputLabel>
              <Select
                labelId="dept-select-label"
                id="dept-select"
                value={deptName}
                label="Department"
                onChange={handleDeptChange}
              >
                {departments.map(dept => (<MenuItem value={dept.deptName}>{dept.deptName}</MenuItem>))}
              </Select>
            </FormControl>
          <Button onClick={handleSave} color="primary">
            Save
          </Button>
        </Paper>
      </Modal>
      <SnackbarMessage
        open={snackbarOpen}
        message={snackbarMessage}
        severity={snackbarSeverity}
        onClose={handleSnackbarClose}
      />
    </div>
  );
}