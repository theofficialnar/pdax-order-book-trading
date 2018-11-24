import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import OrderTable from "../UI/OrderTable";

const Bids = ({ data }) => {
  const tableHeaders = ["Total", "Price (PHP)", "Volume (Test Coin)"];
  return (
    <Grid item xs={12}>
      <OrderTable
        tableData={data}
        tableHeaders={tableHeaders}
        type="orderBook"
      />
      <Typography variant="h6">Bids</Typography>
    </Grid>
  );
};

export default Bids;
