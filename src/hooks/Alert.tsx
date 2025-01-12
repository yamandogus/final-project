import { useState, useCallback } from 'react';
import { Alert, Snackbar } from '@mui/material';

const useSnackbar = () => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState<"success" | "error">("success")

  const showSnackbar = useCallback((msg: string, messageType: "success" | "error" = "success") => {
    setMessage(msg);
    setMessageType(messageType)
    setOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  const SnackbarComponent = () => (
    <Snackbar
      open={open}
      autoHideDuration={2000}
      onClose={handleClose}
    >
      <Alert 
      variant='filled'
      severity={messageType}
      sx={{width:"100%"}}
      >
        {message}
      </Alert>
    </Snackbar>
  );

  return { showSnackbar, SnackbarComponent };
};

export default useSnackbar;

