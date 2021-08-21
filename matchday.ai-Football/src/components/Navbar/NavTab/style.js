import styled from "styled-components/macro";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

export const PaperStyle = styled(Paper)`
  position: absolute;
  right: 200px;
  background-color: #48b499 !important;
  height: 98% !important;
  box-shadow: 0 0 0 0 !important;
`;

export const TabsStyle = styled(Tabs)`
  height: 100% !important;
  & .MuiTabs-flexContainer {
    height: 100% !important;
  }
  & .PrivateTabIndicator-colorPrimary-2 {
    background-color: #ffffff;
  }
  & .PrivateTabIndicator-root-1 {
    height: 4px;
  }
`;

export const TabStyle = styled(Tab)`
  color: #ffffff !important;
  font-weight: 700 !important;
`;
