import { Box, IconButton, Modal } from '@mui/material';
import React, { useState } from 'react';
import Form from '../form/Form';
import { useDispatch, useSelector } from 'react-redux';
import { addTaskDetailsData } from '../../store/action/taskDetailsAction';
import EditNoteIcon from '@mui/icons-material/EditNote';
import DeleteIcon from '@mui/icons-material/Delete';
const Card = ({ title, description, id, status }) => {
  const { taskData } = useSelector((state) => state.taskDetailsReducer);
  const { theme } = useSelector((state) => state.themeReducer);
  const [open, setOpen] = useState(false);
  const [editFlag, setEditFlag] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();

  const styles = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
  };

  const handleEdit = () => {
    setEditFlag(true);
    handleOpen();
  };

  const handleDelete = (id) => {
    const updatedList = taskData.filter((elem) => {
      return elem.id !== id;
    });
    dispatch(addTaskDetailsData(updatedList));
  };

  return (
    <div className='bg-white rounded-md shadow-md w-full min-h-[150px] h-auto p-4'>
      <div className='flex justify-between'>
        <h5 className='text-[1.125rem] font-semibold text-[#222222]'>
          {title}
        </h5>
        <div className='flex flex-col items-center'>
          <p className='text-[0.875rem] text-[#0066FF] font-bold'>{status}</p>
          <div>
            <IconButton onClick={handleEdit}>
              <EditNoteIcon />
            </IconButton>
            <IconButton onClick={() => handleDelete(id)}>
              <DeleteIcon />
            </IconButton>
          </div>
        </div>
      </div>
      <section>
        <p className='text-[1rem]'>{description}</p>
      </section>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={styles}>
          <Form
            title={title}
            id={id}
            description={description}
            editMode={editFlag}
            onCancel={() => {
              setEditFlag(false);
              handleClose();
            }}
            status={status}
          />
        </Box>
      </Modal>
    </div>
  );
};

export default Card;
