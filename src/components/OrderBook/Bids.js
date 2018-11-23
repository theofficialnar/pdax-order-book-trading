import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import OrderTable from "../UI/OrderTable";

const Bids = () => {
  return (
    <Grid item xs={12}>
      <Typography variant="h6">Bids</Typography>
      <OrderTable />
    </Grid>
  );
};

export default Bids;
