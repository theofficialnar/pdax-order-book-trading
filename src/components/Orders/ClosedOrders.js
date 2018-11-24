import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import OrderTable from "../UI/OrderTable";

const ClosedOrders = ({ data }) => {
  const tableHeaders = ["Price (PHP)", "Volume (Test Coin)", "Type"];
  return (
    <Grid item xs={12}>
      <Typography variant="h6">Closed Orders</Typography>
      <OrderTable tableData={data} tableHeaders={tableHeaders} />
    </Grid>
  );
};

export default ClosedOrders;
