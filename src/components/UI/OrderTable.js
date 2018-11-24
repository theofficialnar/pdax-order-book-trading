import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import formatNumber from "../../utils/formatNumber";

const OrderTable = ({ data }) => {
  const rows = data.map(i => (
    <TableRow key={i.id}>
      <TableCell>{formatNumber(i.total)}</TableCell>
      <TableCell>{formatNumber(i.price)}</TableCell>
      <TableCell>{formatNumber(i.volume)}</TableCell>
    </TableRow>
  ));
  return (
    <Paper elevation={0}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Total</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Volume</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{rows}</TableBody>
      </Table>
    </Paper>
  );
};

export default OrderTable;
