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
import BooleanSetting from "./BooleanSetting";
import ButtonSetting from "./ButtonSetting";
import DropdownSetting from "./DropdownSetting";

const drawerWidth = 240;

export default function InitializeOptions() {
  const handleChange = () => {};
  return (
    <div className="options-main">
      <BooleanSetting
        settingTitle="test"
        settingExplanationText="some explanation this is"
        handleChange={handleChange}
      />
      <DropdownSetting
        dropdownList={["hi", "hello"]}
        settingTitle="test"
        settingExplanationText="some explanation thisdafsdf is"
        handleChange={handleChange}
      />
      <ButtonSetting
        settingTitle="Upload Raffle File"
        settingExplanationText="Upload your raffle file here"
        buttonText="Upload"
        handleClick={handleChange}
      />
    </div>
  );
}
