import React from "react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import {
  Wrapper,
  Percentage,
  Text,
  AccordionStyle,
  AccordionSummaryStyle,
  AccordionDetailsStyle,
} from "./style";
import AccordionTable from "./AccordionTable/AccordionTable";

export default function AccordionComp(props) {
  return (
    <>
      <Wrapper>
        <AccordionStyle>
          <AccordionSummaryStyle
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Percentage>{props.percentage}%</Percentage>
            <Text>{props.text}</Text>
          </AccordionSummaryStyle>
          <AccordionDetailsStyle>
            <AccordionTable />
          </AccordionDetailsStyle>
        </AccordionStyle>
      </Wrapper>
    </>
  );
}
