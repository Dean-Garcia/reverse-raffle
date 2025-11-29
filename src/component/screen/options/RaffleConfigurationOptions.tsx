import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import BooleanSetting from "./renderers/BooleanSetting";
import ButtonSetting from "./renderers/ButtonSetting";
import DropdownSetting from "./renderers/DropdownSetting";
import RaffleConfig from "./renderers/RaffleConfig";

type RaffleConfigurationOptionsComponent = {
  raffleNameList: string[];
};

export default function RaffleConfigurationOptions({
  raffleNameList,
}: RaffleConfigurationOptionsComponent) {
  return (
    <div className="options-main">
      <RaffleConfig />
      <RaffleConfig />
      <RaffleConfig />
    </div>
  );
}
