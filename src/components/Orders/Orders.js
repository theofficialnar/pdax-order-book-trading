import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";

import ClosedOrders from "./ClosedOrders";
import OpenOrders from "./OpenOrders";

const styles = theme => ({
  paper: {
    padding: theme.spacing.unit * 2
  }
});

const Orders = ({ classes, orders: { openOrders, closedOrders } }) => (
  <Grid item xs={5}>
    <Paper elevation={1} className={classes.paper}>
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <Typography variant="h4" align="center" gutterBottom>
            Orders
          </Typography>
          <Divider />
          <OpenOrders data={openOrders} />
          <ClosedOrders data={closedOrders} />
        </Grid>
      </Grid>
    </Paper>
  </Grid>
);

export default withStyles(styles)(Orders);
