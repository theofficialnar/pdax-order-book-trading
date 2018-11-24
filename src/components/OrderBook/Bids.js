import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import OrderTable from "../UI/OrderTable";

const Bids = ({ data }) => {
  const tableHeaders = ["Total", "Volume (Test Coin)", "Price (PHP)"];
  return (
    <Grid item xs={12}>
      <OrderTable
        tableData={data}
        tableHeaders={tableHeaders}
        type="orderBookBids"
      />
      <Typography variant="h6" align="center">
        Bids
      </Typography>
    </Grid>
  );
};

export default Bids;
