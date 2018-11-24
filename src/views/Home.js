import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";

import { fetchUser } from "../store/actions/userActions";
import { fetchOrderBook } from "../store/actions/orderBookActions";
import UserInfo from "../components/UserInfo";
import OrderBook from "../components/OrderBook/OrderBook";
import Orders from "../components/Orders";

const styles = {
  root: {
    margin: "1em"
  }
};

class Home extends Component {
  componentDidMount() {
    this.props.fetchUser();
    this.props.fetchOrderBook();
  }

  render() {
    const { classes, orderBook } = this.props;
    return (
      <React.Fragment>
        <UserInfo user={this.props.user} />
        <div className={classes.root}>
          <Grid container spacing={24}>
            <OrderBook orderBook={orderBook} />
            <Orders />
          </Grid>
        </div>
      </React.Fragment>
    );
  }
}

Home.propTypes = {
  user: PropTypes.object,
  fetchUser: PropTypes.func,
  fetchOrderBook: PropTypes.func
};

const mapStateToProps = state => ({
  user: state.user,
  orderBook: state.orderBook
});

const mapDispatchToProps = dispatch => ({
  fetchUser: () => dispatch(fetchUser()),
  fetchOrderBook: () => dispatch(fetchOrderBook())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Home));
