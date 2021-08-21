import styled from "styled-components/macro";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

export const PaperStyle = styled(Paper)`
  margin-top: 30px;
  width: 90%;
  height: 56px !important;
  border-radius: 10px !important;
  background-color: #8c9ec8 !important;
  box-shadow: 0 0 0 0 !important;
`;

export const TabsStyle = styled(Tabs)`
  height: 100% !important;
  & .MuiTabs-flexContainer {
    height: 100% !important;
  }
  & .MuiTabs-centered {
    justify-content: space-around;
  }
  & .PrivateTabIndicator-colorPrimary-2 {
    background-color: #405485;
  }
  & .PrivateTabIndicator-root-1 {
    height: 100%;
    border-radius: 10px;
  }
`;

export const TabStyle = styled(Tab)`
  z-index: 5;
  color: #ffffff !important;
  font-style: normal !important;
  font-weight: normal !important;
  font-size: 15px !important;
`;
