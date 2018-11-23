import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";

import { fetchUser } from "../store/actions/userActions";
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
  }

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <UserInfo user={this.props.user} />
        <div className={classes.root}>
          <Grid container spacing={24}>
            <OrderBook />
            <Orders />
          </Grid>
        </div>
      </React.Fragment>
    );
  }
}

Home.propTypes = {
  user: PropTypes.object,
  fetchUser: PropTypes.func
};

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  fetchUser: () => dispatch(fetchUser())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Home));
