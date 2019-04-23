// 首页 侧边栏

import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
// import Icon from "@material-ui/core/Icon";
import Home from "@material-ui/icons/Home";
import ViewModule from "@material-ui/icons/ViewModule";
import BlurLinear from "@material-ui/icons/BlurLinear";
import VideoLibrary from "@material-ui/icons/VideoLibrary";

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
          label="首页"
          value={0}
          icon={<Home />}
        />
        <BottomNavigationAction
          label="平面设计"
          value={1}
          icon={<ViewModule />}
        />
        <BottomNavigationAction
          label="字体库"
          value={2}
          icon={<BlurLinear />}
        />
        <BottomNavigationAction
          label="视频"
          value={3}
          icon={<VideoLibrary />}
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
