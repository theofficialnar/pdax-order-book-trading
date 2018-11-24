import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";

import formatNumber from "../../utils/formatNumber";
import ucFirst from "../../utils/ucFirst";

const styles = {
  orderBookBids: {
    color: "green",
    fontWeight: "bold"
  },
  orderBookAsks: {
    color: "red",
    fontWeight: "bold"
  },
  ask: {
    color: "red",
    fontWeight: "bold"
  },
  bid: {
    color: "green",
    fontWeight: "bold"
  }
};

const OrderTable = ({ tableData, tableHeaders, type, classes }) => {
  let tableRows = undefined;
  if (type === "orderBookBids" || type === "orderBookAsks") {
    tableRows = tableData.map(i => (
      <TableRow key={i.id}>
        <TableCell>{formatNumber(i.total)}</TableCell>
        <TableCell>{formatNumber(i.volume)}</TableCell>
        <TableCell
          className={
            type === "orderBookBids"
              ? classes.orderBookBids
              : classes.orderBookAsks
          }
        >
          {formatNumber(i.price)}
        </TableCell>
      </TableRow>
    ));
  } else {
    tableRows = tableData.map(i => (
      <TableRow key={i.id}>
        <TableCell>{formatNumber(i.price)}</TableCell>
        <TableCell>{formatNumber(i.volume)}</TableCell>
        <TableCell className={i.type === "ask" ? classes.ask : classes.bid}>
          {ucFirst(i.type)}
        </TableCell>
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

export default withStyles(styles)(OrderTable);
