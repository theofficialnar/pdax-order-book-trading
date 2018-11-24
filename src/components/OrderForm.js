import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";

import {
  placeAskOrder,
  placeBidOrder
} from "../store/actions/orderBookActions";
import { sellCoin, buyCoin } from "../store/actions/userActions";

const styles = theme => ({
  root: {
    padding: theme.spacing.unit * 5,
    textAlign: "center"
  },
  container: {
    margin: theme.spacing.unit * 5
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  button: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    marginTop: theme.spacing.unit * 3
  }
});

class OrderForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "",
      price: 0,
      volume: 0,
      total: 0
    };
    this.handleChange = this.handleChange.bind(this);
    this.closeForm = this.closeForm.bind(this);
    this.submitOrder = this.submitOrder.bind(this);
  }

  handleChange(e) {
    if (e.target.name !== "type") {
      this.setState({
        [e.target.name]: parseFloat(e.target.value)
      });
    } else {
      this.setState({
        [e.target.name]: e.target.value
      });
    }

    switch (e.target.name) {
      case "price":
        this.setState({
          total: parseFloat(e.target.value) * this.state.volume
        });
        break;

      case "volume":
        this.setState({
          total: parseFloat(e.target.value) * this.state.price
        });
        break;

      case "total":
        this.setState({
          volume: parseFloat(e.target.value) / this.state.price
        });
        break;

      default:
        break;
    }
  }

  submitOrder() {
    switch (this.state.type) {
      case "ask":
        this.props.placeAskOrder(
          this.state.price,
          this.state.volume,
          this.state.total,
          this.state.type
        );
        this.props.sellCoin(this.state.volume);
        this.closeForm();
        break;

      case "bid":
        this.props.placeBidOrder(
          this.state.price,
          this.state.volume,
          this.state.total,
          this.state.type
        );
        this.props.buyCoin(this.state.total);
        this.closeForm();
        break;

      default:
        break;
    }
  }

  closeForm() {
    this.setState({
      type: "",
      price: 0,
      volume: 0,
      total: 0
    });
    this.props.toggleDrawer(false);
  }

  render() {
    const { open, classes } = this.props;
    const { type, price, volume, total } = this.state;

    const types = [
      { type: "ask", label: "Sell" },
      { type: "bid", label: "Buy" }
    ];

    return (
      <Drawer anchor="bottom" open={open} onClose={this.closeForm}>
        <Grid container className={classes.root}>
          <Grid item xs={12}>
            <Typography variant="h5" gutterBottom>
              Fill up all the fields below to place an order...
            </Typography>
            <Divider />
          </Grid>
          <Grid item xs={12} className={classes.container}>
            <form noValidate autoComplete="off">
              <TextField
                select
                label="Type"
                value={type}
                onChange={this.handleChange}
                name="type"
                helperText="Type of order"
                variant="outlined"
                className={classes.textField}
              >
                {types.map(i => (
                  <MenuItem key={i.type} value={i.type}>
                    {i.label}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                label="Price"
                value={price}
                name="price"
                onChange={this.handleChange}
                variant="outlined"
                type="number"
                placeholder="0"
                className={classes.textField}
                helperText="Price per coin"
              />
              <TextField
                label="Volume"
                value={volume}
                name="volume"
                onChange={this.handleChange}
                variant="outlined"
                type="number"
                placeholder="0"
                className={classes.textField}
                helperText="Total number of coins"
              />
              <TextField
                label="Total"
                value={total}
                name="total"
                onChange={this.handleChange}
                variant="outlined"
                type="number"
                placeholder="0"
                className={classes.textField}
                helperText="Total amount in PHP"
              />
              <div>
                <Button
                  variant="outlined"
                  color="primary"
                  size="large"
                  className={classes.button}
                  onClick={this.submitOrder}
                >
                  Submit Order
                </Button>
                <Button
                  color="secondary"
                  size="large"
                  className={classes.button}
                  onClick={this.closeForm}
                >
                  Cancel
                </Button>
              </div>
            </form>
          </Grid>
        </Grid>
      </Drawer>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  placeAskOrder: (price, volume, total, orderType) =>
    dispatch(placeAskOrder(price, volume, total, orderType)),
  placeBidOrder: (price, volume, total, orderType) =>
    dispatch(placeBidOrder(price, volume, total, orderType)),
  buyCoin: php => dispatch(buyCoin(php)),
  sellCoin: coin => dispatch(sellCoin(coin))
});

export default connect(
  null,
  mapDispatchToProps
)(withStyles(styles)(OrderForm));
