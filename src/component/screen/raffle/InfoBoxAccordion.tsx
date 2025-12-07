import { useState } from "react";
import "../../../styles.css";
import InfoBox from "./InfoBox";
import { RaffleEntriesType } from "../../../interfaces/types";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { create } from "@mui/material/styles/createTransitions";

type InfoBoxAccordionProps = {
  activeRaffle: string;
  raffleData: RaffleEntriesType;
};

const InfoBoxAccordion = ({
  activeRaffle,
  raffleData,
}: InfoBoxAccordionProps) => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  const createInfoBoxArray = () => {
    let infoBoxArray = [];
    let textArray = Object.keys(raffleData) ?? [];
    let values = Object.values(raffleData);
    let lengthArray = values.map((raffleValues) => raffleValues.length);
    for (let i = 0; i < textArray.length; i++) {
      infoBoxArray.push(
        <Accordion
          expanded={expanded === `panel${i}`}
          onChange={handleChange(`panel${i}`)}
          style={{ height: "max-content" }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${i}bh-content`}
            id={`panel${i}bh-header`}
          >
            <Typography component="span" sx={{ width: "75%", flexShrink: 0 }}>
              {textArray[i]}
            </Typography>
            <Typography component="span" sx={{ color: "text.secondary" }}>
              {lengthArray[i]}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <InfoBox text={textArray[i]} num={lengthArray[i]} />
          </AccordionDetails>
        </Accordion>
      );
    }
    return infoBoxArray;
  };

  // let infoBoxes = createInfoBoxArray();

  // return <div className="info-box-container">{infoBoxes}</div>;
  let infoBoxes = createInfoBoxArray();

  return <div>{createInfoBoxArray() ? infoBoxes : null}</div>;
};

export default InfoBoxAccordion;
