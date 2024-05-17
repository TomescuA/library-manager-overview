import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { ConfirmationDeleteTypes } from '../types/book';

export default function ConfirmationDelete ({ open, handleClose, handleDelete}: ConfirmationDeleteTypes) {

  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"Are you sure you want to delete this book?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
          Once deleted, it cannot be recovered as we do not offer backups.
          Please ensure you have saved any important information before proceeding.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            No
          </Button>
          <Button onClick={handleDelete} autoFocus>
            Yes, I want to delete it
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
