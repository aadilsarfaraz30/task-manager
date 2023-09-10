import { useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Modal from '@mui/material/Modal';
import { Box } from '@mui/material';
import Form from './components/form/Form';
import AddIcon from '@mui/icons-material/Add';
import './App.css';

function App() {
  const styles = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    border: 0,
    borderRadius: 1,
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Header />
      <div className='p-[2rem] '>
        <Main />
      </div>
      <div
        onClick={handleOpen}
        className='cursor-pointer
        w-[50px] h-[50px]
        bg-white 
        border border-1 border-[#DDDDDD] 
        rounded-lg 
        flex items-center justify-center 
        shadow-md 
        fixed bottom-6 right-10'
      >
        <AddIcon />
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <div className='modal-style'>
          <Form onCancel={handleClose} />
        </div>
      </Modal>
    </div>
  );
}

export default App;
