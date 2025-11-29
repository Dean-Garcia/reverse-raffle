import "../../../styles.css";
import Grid from "../Grid";
import InfoBoxContainer from "../raffle/InfoBoxContainer";
import Header from "../raffle/Header";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import {
  selectActiveRaffleData,
  selectRaffleData,
  selectCurrentRaffle,
  selectDrawnEntries,
  selectIsRaffleActive,
  selectWinners,
  selectCurrentFileData,
  selectRaffleNameList,
} from "../../../redux/reducer";
import {
  updateActiveRaffleData,
  updateDrawnEntries,
  updateIsRaffleActive,
  updateStore,
  updateWinners,
} from "../../../redux/actions/actions";
import { useState } from "react";
import { Button, Dialog, Drawer } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AssessmentIcon from "@mui/icons-material/Assessment";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SchoolIcon from "@mui/icons-material/School";
import WorkspacesIcon from "@mui/icons-material/Workspaces";
import QuizIcon from "@mui/icons-material/Quiz";
import SummarizeIcon from "@mui/icons-material/Summarize";
import ArchiveIcon from "@mui/icons-material/Archive";
import ResponsiveDrawer from "./InitializeOptions";
import ClippedDrawer from "./InitializeOptions";
import Box from "@mui/material/Box";
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
import InitializeOptions from "./InitializeOptions";
import RaffleConfiguration from "./RaffleConfigurationOptions";
import RaffleConfigurationOptions from "./RaffleConfigurationOptions";

export const menuList = [
  {
    listItem: "Dashboard",
    itemIcon: <DashboardIcon />,
    path: "/dashboard",
    subItems: [],
    isOpen: false,
  },
  {
    listItem: "My Institutes",
    itemIcon: <SchoolIcon />,
    path: "/my-institutes",
    subItems: [],
    isOpen: false,
  },
  {
    listItem: "My Spaces",
    itemIcon: <WorkspacesIcon />,
    path: "/my-spaces",
    subItems: [],
    isOpen: false,
  },
  {
    listItem: "My Courses",
    itemIcon: <MenuBookIcon />,
    path: "/my-courses",
    subItems: [],
    isOpen: false,
  },
  {
    listItem: "Assessments",
    itemIcon: <AssessmentIcon />,
    path: "/assessments",
    subItems: [
      {
        listItem: "My Reports",
        itemIcon: <SummarizeIcon />,
        path: "/assessments",
      },
      {
        listItem: "Archive",
        itemIcon: <ArchiveIcon />,
        path: "/assessments",
      },
    ],
    isOpen: false,
  },
  {
    listItem: "Reports",
    itemIcon: <QuizIcon />,
    path: "/my-reports",
    subItems: [
      {
        listItem: "Assignments",
        itemIcon: <SummarizeIcon />,
        path: "/assessments",
      },
      {
        listItem: "Assessments",
        itemIcon: <SummarizeIcon />,
        path: "/my-reports/assessments",
      },
      {
        listItem: "Archive",
        itemIcon: <ArchiveIcon />,
        path: "/assessments",
      },
    ],
    isOpen: false,
  },
  {
    listItem: "Profile",
    itemIcon: <AccountCircleIcon />,
    path: "/profile",
    subItems: [],
    isOpen: false,
  },
];

type OptionsProps = {
  open: boolean;
  onClose: () => void;
};

enum Options {
  initialize = "Initialize",
  raffleConfig = "Raffle Configuration",
  raffleSettings = "Raffle Settings",
}

export default function OptionsScreen({ open, onClose }: OptionsProps) {
  const dispatch = useDispatch();
  const currentRaffle = useSelector(selectCurrentRaffle);
  const activeRaffleData = useSelector(selectActiveRaffleData, {
    equalityFn: shallowEqual,
  });
  let drawnEntries = useSelector(selectDrawnEntries);
  const isRaffleActive = useSelector(selectIsRaffleActive);
  const raffleData = useSelector(selectRaffleData);
  const winners = useSelector(selectWinners);
  const currentFileData = useSelector(selectCurrentFileData);
  const raffleNameList = useSelector(selectRaffleNameList);

  const [isWinOpen, setIsWinOpen] = useState(false); // for win screen popup
  const [activeMenu, setActiveMenu] = useState(Options.initialize);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const optionsArray = [
    Options.initialize,
    Options.raffleConfig,
    Options.raffleSettings,
  ];

  const getActiveOptionMenu = (menu: string) => {
    switch (menu) {
      case Options.initialize:
        return <InitializeOptions />;
      case Options.raffleConfig:
        return <RaffleConfigurationOptions raffleNameList={raffleNameList} />;
      case Options.raffleSettings:
        break;
      default:
        return <InitializeOptions />;
    }
  };

  const handleMenuClick = (text: Options, index: number) => {
    setSelectedIndex(index);
    setActiveMenu(text);
  };

  return (
    <Box
      className="options-screen"
      sx={{
        display: "flex",
        flexFlow: "column",
        width: "100%",
        height: "100%",
      }}
    >
      <AppBar position="static">
        <Toolbar>Settings</Toolbar>
      </AppBar>
      <Box
        sx={{ display: "flex", flexFlow: "row", width: "100%", height: "100%" }}
      >
        <Box className="options-navbar">
          <List>
            {optionsArray.map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton
                  selected={selectedIndex == index}
                  onClick={(event) => handleMenuClick(text, index)}
                >
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {raffleNameList.map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
        {getActiveOptionMenu(activeMenu)}
      </Box>
    </Box>
  );
}
