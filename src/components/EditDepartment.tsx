import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import DepartmentDTO from '../models/DepartmentDTO';
import DepartmentService from '../services/DepartmentService';
import { DepartmentContext } from '../context/DepartmentContext';
import { Paper } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  boxShadow: 24,
  p: 4,
};

interface EditDepartmentProps {
    department: DepartmentDTO;
}

export default function EditDepartmentModal({ department }: EditDepartmentProps) {
  const { departments, setDepartments } = React.useContext(DepartmentContext);
  const [open, setOpen] = React.useState(false);
  const [budget, setBudget] = React.useState(department.budget);
  const [building, setBuilding] = React.useState(department.building);
  const [snackbarOpen, setSnackbarOpen] = React.useState(false);
  const [snackbarMessage, setSnackbarMessage] = React.useState('');
  const [snackbarSeverity, setSnackbarSeverity] = React.useState<'success' | 'error'>('success');

  const handleOpen = () => {
    setBudget(department.budget);
    setBuilding(department.building);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);
  const handleSnackbarClose = () => setSnackbarOpen(false);

  const handleSave = async () => {
    const updatedDepartment: DepartmentDTO = { ...department, budget, building };
    try {
      await new DepartmentService().updateDepartment(updatedDepartment);
      setSnackbarMessage('Department updated successfully');
      setSnackbarSeverity('success');
      setDepartments(departments.map(d => d.deptName === department.deptName ? updatedDepartment : d));
    } catch (error) {
      setSnackbarMessage('Failed to update department');
      setSnackbarSeverity('error');
    } finally {
      setSnackbarOpen(true);
      handleClose();
    }
  };

  return (
    <div>
      <Button onClick={handleOpen}>Edit</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Paper sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Edit <strong>{department.deptName}</strong> Department
          </Typography>
          <TextField
            label="Budget"
            value={budget}
            onChange={(e) => setBudget(Number(e.target.value))}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Building"
            value={building}
            onChange={(e) => setBuilding(e.target.value)}
            fullWidth
            margin="normal"
          />
          <Button onClick={handleSave} variant="contained" color="primary">
            Save
          </Button>
        </Paper>
      </Modal>
      <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleSnackbarClose}>
        <Alert onClose={handleSnackbarClose} severity={snackbarSeverity} sx={{ width: '100%' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </div>
  );
}