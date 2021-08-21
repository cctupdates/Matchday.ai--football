import styled from 'styled-components/macro';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

export const TableRowStyle = styled(TableRow)`
  height: ${(props) => (props.heading ? "100px" : "max-content")}!important;
  color: ${(props) => (props.heading && "#21294C")}!important;
  background-color: ${(props) => ((props.bg === "secondary") ? "#F4F6FB" : "#ffffff")}!important;
  color: ${(props) => ((props.x === "Count") && "#21294C")}!important;
  color: ${(props) => ((props.x === "Winner") && "#38B75B")}!important;
  color: ${(props) => ((props.x === "Error") && "#DD4242")}!important;
  `;

export const TableCellStyle = styled(TableCell)`  
    color:inherit !important;
    max-width:58px;
    border-right:1px solid #EBEFF9;
    text-align:center!important;
    font-weight: 500 !important;
    font-size: 18px !important;
`;

export const SvgDiv = styled.div`
  margin-top: 10px
`;