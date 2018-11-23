import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  paper: {
    padding: theme.spacing.unit * 2
  }
});

const Orders = ({ classes }) => (
  <Grid item xs={5}>
    <Paper elevation={1} className={classes.paper}>
      <Typography variant="h5">Orders</Typography>
    </Paper>
  </Grid>
);

export default withStyles(styles)(Orders);
