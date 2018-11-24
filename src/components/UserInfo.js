import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  root: {
    flexGrow: 1,
    background:
      "linear-gradient(to bottom, rgba(19,67,135,1) 0%,rgba(70,124,182,1) 48%,rgba(91,147,201,0.7) 68%,rgba(125,185,232,0) 100%)",
    padding: "5em 2em"
  }
};

const UserInfo = ({ user: { name, balances }, classes }) => (
  <div className={classes.root}>
    <Grid container spacing={24}>
      <Grid item xs={12}>
        <Typography variant="h1" align="center" color="textSecondary">
          PDAX Order Book Trading
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <Typography variant="h5" align="center">
          Welcome back, {name}!
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <Typography variant="h6" align="center">
          Balance
        </Typography>
        {balances.map(item => (
          <Typography variant="body2" align="center" key={item.symbol}>
            {item.symbol}: {item.balance.toLocaleString()}
          </Typography>
        ))}
      </Grid>
    </Grid>
  </div>
);

export default withStyles(styles)(UserInfo);
