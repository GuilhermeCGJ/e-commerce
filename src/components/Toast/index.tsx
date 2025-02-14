import { Snackbar, Alert } from '@mui/material';

interface ToastProps {
  open: boolean;
  onClose: VoidFunction;
  message: string;
  severity: 'success' | 'info' | 'warning' | 'error';
}

const Toast: React.FC<ToastProps> = ({ open, onClose, message, severity }) => {
  return (
    <Snackbar open={open} autoHideDuration={3000} onClose={onClose}>
      <Alert onClose={onClose} severity={severity} sx={{ width: '100%' }}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default Toast;
