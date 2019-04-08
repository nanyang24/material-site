import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import Icon from "@material-ui/core/Icon";
import RestoreIcon from "@material-ui/icons/Restore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocationOnIcon from "@material-ui/icons/LocationOn";

const styles = {
  root: {
    width: 500
  }
};

class LabelBottomNavigation extends React.Component {
  handleChange = (event, value) => {
    this.props.scrollToPage(value);
  };

  render() {
    const { classes, currentPage } = this.props;

    return (
      <BottomNavigation
        value={currentPage}
        onChange={this.handleChange}
        className={classes.root}
      >
        <BottomNavigationAction
          label="第一屏"
          value={0}
          icon={<RestoreIcon />}
        />
        <BottomNavigationAction
          label="第二屏"
          value={1}
          icon={<FavoriteIcon />}
        />
        <BottomNavigationAction
          label="第三屏"
          value={2}
          icon={<LocationOnIcon />}
        />
        <BottomNavigationAction
          label="第四屏"
          value={3}
          icon={<Icon>folder</Icon>}
        />
      </BottomNavigation>
    );
  }
}

LabelBottomNavigation.propTypes = {
  classes: PropTypes.object.isRequired,
  currentPage: PropTypes.number.isRequired,
  scrollToPage: PropTypes.func.isRequired,
};

export default withStyles(styles)(LabelBottomNavigation);
