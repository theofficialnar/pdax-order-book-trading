import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import OrderTable from "../UI/OrderTable";

const Asks = () => {
  return (
    <Grid item xs={12}>
      <Typography variant="h6">Asks</Typography>
      <OrderTable />
    </Grid>
  );
};

export default Asks;
