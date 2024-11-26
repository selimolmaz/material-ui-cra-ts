import React from 'react';
import StudentDTO from '../../models/StudentDTO';
import { Paper, Stack, styled } from '@mui/material';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  flexGrow: 1,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

interface StudentCardViewProps {
  student: StudentDTO;
}

const StudentCardView: React.FC<StudentCardViewProps> = ({ student }) => {
  return (
    <Item>
      <h2>{student.name}</h2>
      <p>Age: {student.id}</p>
      <p>Total Credits: {student.totCred}</p>
      <p>Department Name: {student.deptName}</p>
      <p>Department: {student.department.deptName}</p>
    </Item>
  );
};

export default StudentCardView;
