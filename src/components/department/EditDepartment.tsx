import * as React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import DepartmentDTO from '../../models/DepartmentDTO';
import DepartmentService from '../../services/DepartmentService';
import { DepartmentContext } from '../../context/DepartmentContext';
import { Paper } from '@mui/material';
import SnackbarMessage from './SnackbarMessage';
import { useContext, useState } from 'react';

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
    open: boolean;
    onClose: () => void;
}

export default function EditDepartmentModal({ department, open, onClose }: EditDepartmentProps) {
  const { departments, setDepartments } = useContext(DepartmentContext);
  const [budget, setBudget] = useState(department.budget);
  const [building, setBuilding] = useState(department.building);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState<'success' | 'error'>('success');

  const handleClose = () => {
    onClose();
  };
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