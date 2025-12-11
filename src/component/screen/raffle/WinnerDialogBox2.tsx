import Dialog from "@mui/material/Dialog";
import { useSelector } from "react-redux";
import { selectRaffleConfigs } from "../../../redux/reducer";

export interface SimpleDialogProps {
  open: boolean;
  text: string;
  onClose: (value: string) => void;
}

export function WinnerDialogBox2({
  onClose,
  text,
  open,
  activeRaffle,
}: SimpleDialogProps) {
  const handleClose = () => {
    onClose();
  };

  const configs = useSelector(selectRaffleConfigs);
  const backgroundImage = configs[activeRaffle]?.backgroundImage;

  return (
    <Dialog className="dialog-container" onClose={handleClose} open={open}>
      <div className="dialog-container-container">
        <div className="dialog-winner-text">{text}</div>
        <img
          src={backgroundImage}
          style={{ maxWidth: "75%", objectFit: "scale-down" }}
        />
      </div>
    </Dialog>
  );
}
