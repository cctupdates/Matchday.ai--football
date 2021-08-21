import styled from "styled-components/macro";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

export const PaperStyle = styled(Paper)`
  margin-top: 30px;
  height: 75px !important;
  background-color: #ebeff9 !important;
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
    background-color: #21294c;
  }
  & .PrivateTabIndicator-root-1 {
    height: 2px;
  }
`;

export const TabStyle = styled(Tab)`
  color: #21294c !important;
  font-weight: 700 !important;
`;
