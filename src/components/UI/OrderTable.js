import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const OrderTable = ({ data }) => {
  const rows = data.map(i => (
    <TableRow key={i.id}>
      <TableCell>{i.id}</TableCell>
      <TableCell>{i.price.toLocaleString()}</TableCell>
      <TableCell>{i.volume.toLocaleString()}</TableCell>
    </TableRow>
  ));
  return (
    <Paper elevation={0}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
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
