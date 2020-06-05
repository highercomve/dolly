import React from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'

export default function ConfirmButton ({
  buttonTxt = '',
  variant = 'outlined',
  color = 'primary',
  dialogText = '',
  dialogBody = null,
  cancelTxt = 'Cancel',
  confirmTxt = 'Confirm',
  onConfirm = () => null,
  disabled
}) {
  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleConfirm = () => {
    setOpen(false)
    onConfirm()
  }

  return (
    <div>
      <Button variant={variant} color={color} onClick={handleClickOpen} disabled={disabled}>
        {buttonTxt}
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{dialogText}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {dialogBody}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            {cancelTxt}
          </Button>
          <Button onClick={handleConfirm} color="primary" autoFocus>
            {confirmTxt}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
