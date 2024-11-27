import React, { useState, useEffect } from 'react';
import StudentDTO from '../../models/StudentDTO';
import { Box, Collapse, Container, List, ListItem, ListItemButton, ListItemIcon, ListItemText, ListSubheader, Paper, Stack, styled } from '@mui/material';
import StarBorder from '@mui/icons-material/StarBorder';
import InboxIcon from '@mui/icons-material/Inbox';
import { ExpandLess, ExpandMore, Send as SendIcon, Drafts as DraftsIcon } from '@mui/icons-material';
import TakesService from '../../services/TakesService';
import TakesDTO from '../../models/TakesDTO';
import TakesCardView from '../takes/TakeCardView';
import Grid from '@mui/material/Grid2';

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
  const [open, setOpen] = useState(false);
  const [takes, setTakes] = useState<TakesDTO[]>([]);
  const takesService = new TakesService();

  const handleClick = async () => {
    setOpen(!open);
    if (!open) {
      try {
        const response = await takesService.getTakesByStudentId(student.id);
        setTakes(response);
      } catch (error) {
        console.error('Failed to fetch takes:', error);
      }
    }
  };

  return (
    <Item>
      <List
        sx={{ bgcolor: 'background.paper' }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            {student.name} Takes
          </ListSubheader>
        }
      >
        <ListItemButton onClick={handleClick}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Takes" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
      </List>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <Stack spacing={2}  
              direction="row"
              useFlexGap
              sx={{ flexWrap: 'wrap' }}>
          {takes.map((take) => (
            <TakesCardView key={`${take.courseId}+${take.section}`} take={take}/>
          ))}
        </Stack>
      </Collapse>
    </Item>
  );
};

export default StudentCardView;
