import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import OrderTable from "../UI/OrderTable";

const Asks = ({ data }) => {
  const tableHeaders = ["Total", "Volume (Test Coin)", "Price (PHP)"];
  return (
    <Grid item xs={12}>
      <Typography variant="h6" align="center">
        Asks
      </Typography>
      <OrderTable
        tableData={data}
        tableHeaders={tableHeaders}
        type="orderBookAsks"
      />
    </Grid>
  );
};

export default Asks;
