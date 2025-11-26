import Dialog from "@mui/material/Dialog";

export interface SimpleDialogProps {
  open: boolean;
  text: string;
  onClose: (value: string) => void;
}

export function DialogBox({ onClose, text, open }: SimpleDialogProps) {
  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog className="dialog" onClose={handleClose} open={open}>
      <div className="dialog">{text}</div>
    </Dialog>
  );
}
