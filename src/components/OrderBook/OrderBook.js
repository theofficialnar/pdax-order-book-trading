import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";

import Asks from "./Asks";
import Bids from "./Bids";
import formatNumber from "../../utils/formatNumber";

const styles = theme => ({
  paper: {
    padding: theme.spacing.unit * 2
  }
});

const OrderBook = ({ classes, orderBook }) => {
  return (
    <Grid item xs={7}>
      <Paper elevation={1} className={classes.paper}>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <Typography variant="h4" align="center" gutterBottom>
              Order Book
            </Typography>
            <Divider />
          </Grid>
          <Asks data={orderBook.asks} />
          <Grid item xs={12}>
            <Typography variant="h6" align="center">
              Spread: {formatNumber(orderBook.spread)}
            </Typography>
          </Grid>
          <Bids data={orderBook.bids} />
        </Grid>
      </Paper>
    </Grid>
  );
};

export default withStyles(styles)(OrderBook);
