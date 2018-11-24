import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import formatNumber from "../../utils/formatNumber";

const OrderTable = ({ tableData, tableHeaders, type }) => {
  let tableRows = undefined;
  if (type === "orderBook") {
    tableRows = tableData.map(i => (
      <TableRow key={i.id}>
        <TableCell>{formatNumber(i.total)}</TableCell>
        <TableCell>{formatNumber(i.price)}</TableCell>
        <TableCell>{formatNumber(i.volume)}</TableCell>
      </TableRow>
    ));
  } else {
    tableRows = tableData.map(i => (
      <TableRow key={i.id}>
        <TableCell>{formatNumber(i.price)}</TableCell>
        <TableCell>{formatNumber(i.volume)}</TableCell>
        <TableCell>{i.type}</TableCell>
      </TableRow>
    ));
  }

  const headers = tableHeaders.map((i, index) => (
    <TableCell key={index}>{i}</TableCell>
  ));
  return (
    <Paper elevation={0}>
      <Table>
        <TableHead>
          <TableRow>{headers}</TableRow>
        </TableHead>
        <TableBody>{tableRows}</TableBody>
      </Table>
    </Paper>
  );
};

export default OrderTable;
