import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React from "react";
import InfoBox from "./InfoBox";

const useStyles = makeStyles((theme) => ({
  collapsed: {
    // width: "100%",
    // background: "rgb(37, 37, 37)",
    // color: "white",
  },
  expanded: {
    // background: "rgb(37, 37, 37)",
    // overflowY: "scroll",
    flexGrow: 1,
    border: "1px solid white",
  },
}));

export const InfoBoxAccordion = ({ name, count, expanded, handleChange }) => {
  const classes = useStyles();
  const classStyle = name === expanded ? classes.expanded : classes.collapsed;

  return (
    <Accordion
      className={classStyle}
      expanded={expanded === name}
      onChange={handleChange(name)}
      disableGutters
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls={`${name}-content`}
        id={`${name}-header`}
      >
        <Typography component="span" sx={{ width: "70%", flexShrink: 0 }}>
          {name}
        </Typography>
        <Typography
          component="span"
          sx={{ color: "text.secondary", textAlign: "center", width: "30%" }}
        >
          {count}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <InfoBox text={name} num={count} />
      </AccordionDetails>
    </Accordion>
  );
};

export default InfoBoxAccordion;
