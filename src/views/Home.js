import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";

import { fetchUser } from "../store/actions/userActions";
import { fetchOrderBook } from "../store/actions/orderBookActions";
import UserInfo from "../components/UserInfo";
import OrderBook from "../components/OrderBook/OrderBook";
import Orders from "../components/Orders/Orders";
import OrderForm from "../components/OrderForm";

const styles = {
  root: {
    margin: "1em"
  }
};

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drawer: false
    };
  }

  componentDidMount() {
    this.props.fetchUser();
    this.props.fetchOrderBook();
  }

  toggleDrawer(open) {
    this.setState({
      drawer: open
    });
  }

  render() {
    const { classes, orderBook } = this.props;
    const { drawer } = this.state;

    return (
      <React.Fragment>
        <UserInfo
          user={this.props.user}
          toggleDrawer={open => this.toggleDrawer(open)}
        />
        <div className={classes.root}>
          <Grid container spacing={24}>
            <OrderBook orderBook={orderBook} />
            <Orders orders={orderBook} />
          </Grid>
        </div>
        <OrderForm
          open={drawer}
          toggleDrawer={open => this.toggleDrawer(open)}
        />
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
