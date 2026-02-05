import { Dialog, DialogTitle, DialogActions, Button } from "@mui/material"

export default function ConfirmDialog({ open, onClose, onConfirm }: any) {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Confirm Delete?</DialogTitle>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button color="error" onClick={onConfirm}>Delete</Button>
      </DialogActions>
    </Dialog>
  )
}
