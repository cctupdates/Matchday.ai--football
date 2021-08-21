import styled from "styled-components/macro";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";

export const Wrapper = styled.div`
  width: 90%;
`;

export const Percentage = styled.h6`
  margin-left: 30px;
  background-color: #ffffff;
  text-align: left;
  padding: 15px;
  border-radius: 50%;
  color: #21294c;
  font-size: 13px;
`;

export const Text = styled.h5`
  color: #21294c;
  margin-left: 10px;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
`;

export const AccordionStyle = styled(Accordion)`
  margin: 10px 0 !important;
`;

export const AccordionSummaryStyle = styled(AccordionSummary)`
  & .MuiAccordionSummary-content {
    align-items: center !important;
  }
  background-color: #ebeff9 !important;
`;

export const AccordionDetailsStyle = styled(AccordionDetails)`
  padding: 0 !important;
`;
