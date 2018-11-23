import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const OrderTable = () => {
  return (
    <Paper elevation="0">
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Volume</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>Name 1</TableCell>
            <TableCell>1000</TableCell>
            <TableCell>89700</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Paper>
  );
};

export default OrderTable;
