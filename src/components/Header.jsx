import React, { useState } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import IconButton from '@mui/material/IconButton';
// import { FormControlLabel, FormGroup, Switch } from '@mui/material';
import { useDispatch } from 'react-redux';
// import { darkTheme, lightTheme } from '../store/action/themeAction';
import { getFilter } from '../store/action/taskDetailsAction';

const Header = () => {
  // const [checked, setChecked] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const dispatch = useDispatch()
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleFilterChange = (filter) => {
    setAnchorEl(null);
    handleClose();
    dispatch(getFilter(filter))
  };

  const clearFilter = () => {
    dispatch(getFilter(''))
  }

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // const handleSwitchChange = (event) => {
  //   setChecked(event.target.checked);
  // };

  // useEffect(() => {
  //   if(checked) {
  //     dispatch(darkTheme())
  //   }
  //   else{
  //     dispatch(lightTheme())
  //   }
  // },[checked,dispatch])

  return (
    <div className={`h-[50px] shadow-md transform  flex items-center justify-between px-8 bg-white`}>
      <div className='text-[1.125rem] text-[#222222] font-bold'>
        Task Manager
      </div>
      <div className='flex gap-[10px] items-center'>
        <IconButton
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup='true'
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
          <FilterAltIcon />
        </IconButton>
        <Menu
          id='basic-menu'
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <MenuItem onClick={() => handleFilterChange('Open')}>
          Open
          </MenuItem>
          <MenuItem onClick={() => handleFilterChange('In Progress')}>
          In Progress
          </MenuItem>
          <MenuItem onClick={() => handleFilterChange('Done')}>
          Done
          </MenuItem>
        </Menu>
        <button onClick={clearFilter}>Clear Filter</button>
        {/* <FormGroup>
          <FormControlLabel
            control={
              <Switch
                checked={checked}
                onChange={handleSwitchChange}
                inputProps={{ 'aria-label': 'controlled' }}
              />
            }
            label={checked ? 'Dark' : 'Light'}
          />
        </FormGroup> */}
      </div>
    </div>
  );
};

export default Header;
