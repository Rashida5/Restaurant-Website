import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose1 = () => {
    alert( 'Your Order Saved , Your Order will be ready in 45 minutes' );
    setOpen(false);
  };
  const handleClose2 = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Save Order
      </Button>
      <Dialog open={open} onClose={handleClose2}>
        <DialogTitle>Save your Order</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please Enter Your Name and Phone Number
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="text"
            fullWidth
            variant="standard"
          />

            <TextField
            autoFocus
            margin="dense"
            id="tel1"
            label="telphoneNumber"
            type="tel"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose2}>Cancel</Button>
          <Button onClick={handleClose1}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
