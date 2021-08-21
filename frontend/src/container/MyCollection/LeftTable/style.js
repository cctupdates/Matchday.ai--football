import styled from "styled-components/macro";
import Paper from "@material-ui/core/Paper";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";

export const PaperStyle = styled(Paper)`
  width: 16% !important;
  height: max-content;
  margin: 50px 0 0 50px !important;
  cursor: pointer;
`;

export const TableCellStyle = styled(TableCell)`
  text-align: center !important;
  font-size: inherit !important;
  font-weight: inherit !important;
  background-color: ${(props) => (props.selected ? "#48B499" : "#ffffff")};
  background-color: ${(props) => props.head && "#EBEFF9"};
  color: ${(props) => (props.selected ? "#ffffff" : "#3A4C7C")}!important;
  color: ${(props) => props.head && "#21294C"}!important;
`;

export const TableHeadStyle = styled(TableHead)`
  font-weight: bold;
  font-size: 20px;
`;

export const TableBodyStyle = styled(TableBody)`
  font-weight: normal;
  font-size: 17px;
`;
