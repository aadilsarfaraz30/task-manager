import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTaskDetailsData } from '../../store/action/taskDetailsAction';

const Form = ({ title, description, id, status, editMode, onCancel }) => {
  const { taskData } = useSelector((state) => state.taskDetailsReducer);
  const [formData, setFormData] = useState({
    id: Date.now(),
    title: '',
    description: '',
    status: '',
  });

  const [formErrors, setFormErrors] = useState({});

  const dispatch = useDispatch();

  useEffect(() => {
    if (editMode) {
      setFormData({
        id,
        title,
        description,
        status,
      });
    }
  }, [editMode, title, description, id, status]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setFormErrors({ ...formErrors, [name]: '' });
  };

  const handleSubmit = () => {
    const errors = {};
    if (!formData.title) {
      errors.title = 'Title is required';
    }
    if (!formData.status) {
      errors.status = 'Status is required';
    }
    if (!formData.description) {
      errors.description = 'Description is required';
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    if (editMode) {
      const updatedData = taskData.map((item) => {
        if (item.id === id) {
          return formData;
        }
        return item;
      });
      dispatch(addTaskDetailsData(updatedData));
    } else {
      dispatch(addTaskDetailsData([...taskData, formData]));
    }

    setFormData({
      id: Date.now(),
      title: '',
      description: '',
      status: '',
    });
    onCancel();
  };

  return (
    <div className='flex flex-col gap-6'>
      <div className='flex gap-4'>
        <div>
          <TextField
            id='outlined-basic'
            label='Title'
            variant='outlined'
            value={formData.title}
            name='title'
            onChange={handleInputChange}
            required
          />
          {formErrors.title && (
            <p className='text-[0.875rem] text-red-500'>{formErrors.title}</p>
          )}
        </div>
        <div>
          <FormControl className='w-[120px]'>
            <InputLabel id='demo-simple-select-label'>Status</InputLabel>
            <Select
              labelId='demo-simple-select-label'
              id='demo-simple-select'
              name='status'
              value={formData.status}
              defaultValue='Open'
              label='Status'
              onChange={handleInputChange}
              required
            >
              <MenuItem value='Open'>Open</MenuItem>
              <MenuItem value='In Progress'>In Progress</MenuItem>
              <MenuItem value='Done'>Done</MenuItem>
            </Select>
          </FormControl>
          {formErrors.status && (
            <p className='text-[0.875rem] text-red-500'>{formErrors.status}</p>
          )}
        </div>
      </div>
      <div className='w-full'>
        <TextField
          id='outlined-basic'
          label='Description'
          variant='outlined'
          value={formData.description}
          name='description'
          multiline
          maxRows={6}
          minRows={4}
          onChange={handleInputChange}
          required
          fullWidth
        />

        {formErrors.description && (
          <p className='text-[0.875rem] text-red-500'>
            {formErrors.description}
          </p>
        )}
      </div>
      <div className='flex justify-between gap-4'>
        <button
          className='bg-[#F4F4F8] w-1/2 text-[#027BFF] font-semibold rounded-[4px] py-2'
          onClick={onCancel}
        >
          Cancel
        </button>
        <button
          className='bg-[#001B94] w-1/2 text-[#FFFFFF] font-semibold rounded-[4px] py-2'
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Form;
