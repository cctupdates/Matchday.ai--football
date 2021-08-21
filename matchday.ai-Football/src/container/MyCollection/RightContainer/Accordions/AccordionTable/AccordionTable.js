import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import Paper from "@material-ui/core/Paper";
import { TableRowStyle, TableCellStyle, SvgDiv } from "./style";
import StraightArrow from "../../../../../images/straightarrow.svg";
import CrossArrowImage from "../../../../../images/crossarrow.svg";

export default function AccordionTable(props) {
  const TableHeaderContent = [
    {},
    { text: "Total"},
    { text: "Straight", image: StraightArrow },
    { text: "Cross", image: CrossArrowImage },
  ];

  const TableContent = [
    { head: "Count", data1: "36", data2: "23", data3: "19" },
    { head: "Winner", data1: "36", background:"secondary", data2: "23", data3: "19" },
    { head: "Error", data1: "36", data2: "23", data3: "19" },
  ];

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRowStyle heading bg="secondary">
            {React.Children.toArray(
              TableHeaderContent?.map((item) => {
                return (
                  <TableCellStyle align="center">
                    {item.text}
                    <SvgDiv>
                      <img alt="" src={item.image} />
                    </SvgDiv>
                  </TableCellStyle>
                );
              })
            )}
          </TableRowStyle>
        </TableHead>
        <TableBody>
          {React.Children.toArray(
            TableContent?.map((item) => {
              return (
                <TableRowStyle bg={item.background} x={item.head}>
                  <TableCellStyle component="th" scope="row">
                    {item.head}
                  </TableCellStyle>
                  <TableCellStyle align="center">{item.data1}</TableCellStyle>
                  <TableCellStyle align="center">{item.data2}</TableCellStyle>
                  <TableCellStyle align="center">{item.data3}</TableCellStyle>
                </TableRowStyle>
              );
            })
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
