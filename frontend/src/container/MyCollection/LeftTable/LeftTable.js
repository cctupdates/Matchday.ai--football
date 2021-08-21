import React from "react";
import Table from "@material-ui/core/Table";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import {
  PaperStyle,
  TableCellStyle,
  TableHeadStyle,
  TableBodyStyle,
} from "./style";

export default function LeftTable() {
  return (
    <TableContainer component={PaperStyle}>
      <Table aria-label="simple table">
        <TableHeadStyle>
          <TableRow>
            <TableCellStyle head>Basic Analysis</TableCellStyle>
          </TableRow>
        </TableHeadStyle>
        <TableBodyStyle>
          <TableRow>
            <TableCellStyle>Shot Analysis</TableCellStyle>
          </TableRow>
          <TableRow>
            <TableCellStyle>Game Overview</TableCellStyle>
          </TableRow>
          <TableRow>
            <TableCellStyle>Winner and Errors</TableCellStyle>
          </TableRow>
          <TableRow>
            <TableCellStyle>Rally Length Analysis</TableCellStyle>
          </TableRow>
        </TableBodyStyle>
        <TableHeadStyle>
          <TableRow>
            <TableCellStyle head>Advance Analysis</TableCellStyle>
          </TableRow>
        </TableHeadStyle>
        <TableBodyStyle>
          <TableRow>
            <TableCellStyle selected>Area Wise Analysis</TableCellStyle>
          </TableRow>
          <TableRow>
            <TableCellStyle>Area Wise Defence</TableCellStyle>
          </TableRow>
          <TableRow>
            <TableCellStyle>Points won v/s lost</TableCellStyle>
          </TableRow>
          <TableRow>
            <TableCellStyle>Attack and Defence</TableCellStyle>
          </TableRow>
          <TableRow>
            <TableCellStyle>Winner Shot Combinations</TableCellStyle>
          </TableRow>
        </TableBodyStyle>
      </Table>
    </TableContainer>
  );
}
