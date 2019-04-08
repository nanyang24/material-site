import React from "react";
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons";
import IndexBar from "../indexBar/indexBar";
import "./parallaxHome.scss";

// Little helpers ...
const url = (name, wrap = false) =>
  `${
    wrap ? "url(" : ""
  }http://awv3node-homepage.surge.sh/build/assets/${name}.svg${
    wrap ? ")" : ""
  }`;
// const Yellow = ({ children }) => <span style={{ color: '#EFF59B' }}>{children}</span>
// const Lightblue = ({ children }) => <span style={{ color: '#9AEDFE' }}>{children}</span>
// const Green = ({ children }) => <span style={{ color: '#57EE89' }}>{children}</span>
// const Blue = ({ children }) => <span style={{ color: '#57C7FF' }}>{children}</span>
// const Gray = ({ children }) => <span style={{ color: '#909090' }}>{children}</span>

// 总页数
const PageNum = 4;
// 滚动单屏时间
const ScrollPageTime = 1500;

class ParallaxHome extends React.Component {
  state = {
    currentPage: 0
  };

  componentDidMount() {
    window.addEventListener("wheel", this.scrollFullPage);
  }

  scrollFullPage = e => {
    const { currentPage } = this.state;
    let willToPage;

    if (this.isScrolling) return;

    this.isScrolling = true;

    const isToBottom = !this.isPositiveInteger(+e.wheelDeltaY);

    if (
      (isToBottom && currentPage === PageNum - 1) ||
      (!isToBottom && currentPage === 0)
    ) {
      this.isScrolling = false;
      return;
    }

    if (isToBottom) {
      willToPage = (currentPage % PageNum) + 1;
    } else {
      willToPage = (currentPage % PageNum) - 1;
    }

    this.scrollToPage(willToPage);

    setTimeout(() => {
      this.isScrolling = false;
    }, ScrollPageTime);
  };

  isPositiveInteger = num => (num >= 0 ? true : false);

  scrollToPage = pageIndex => {
    this.setState({
      currentPage: pageIndex
    });
    this.parallax.scrollTo(pageIndex);
  };

  render() {
    const { currentPage } = this.state;

    return (
      <div className="parallax-home">
        <div className="side-bar">
          <IndexBar
            currentPage={currentPage}
            onChange={this.handleChange}
            scrollToPage={this.scrollToPage}
          />
        </div>

        <Parallax
          scrolling={false}
          ref={ref => (this.parallax = ref)}
          pages={PageNum}
        >
          {/* 背景颜色 */}
          <ParallaxLayer
            offset={0}
            speed={1}
            style={{ backgroundColor: "#273238" }}
          />
          <ParallaxLayer
            factor={2}
            offset={0}
            speed={1}
            style={{ backgroundColor: "#273238" }}
          />

          <ParallaxLayer
            offset={1}
            speed={1}
            style={{
              backgroundImage:
                "linear-gradient(to bottom right , #FD6843, #9C5FB6 , #4CBFD0)"
            }}
          />

          <ParallaxLayer
            factor={2}
            offset={1}
            speed={1}
            style={{
              backgroundImage:
                "linear-gradient(to bottom right , #FD6843, #9C5FB6 ,#4CBFD0)"
            }}
          />

          <ParallaxLayer
            offset={2}
            speed={1}
            style={{ backgroundColor: "#DAF8FF" }}
          />

          <ParallaxLayer
            factor={2}
            offset={2}
            speed={1}
            style={{ backgroundColor: "#DAF8FF" }}
          />

          <ParallaxLayer
            factor={2}
            offset={3}
            speed={1}
            style={{ backgroundColor: "#273238" }}
          />

          <ParallaxLayer
            offset={0}
            speed={0}
            factor={3}
            style={{
              backgroundImage: url("stars", true),
              backgroundSize: "cover"
            }}
          />

          <ParallaxLayer
            offset={1}
            speed={-0.3}
            style={{ pointerEvents: "none" }}
          >
            <img
              alt=""
              src={require("./img/airpods_listen_to_left_large.png")}
              style={{ width: "7%", marginLeft: "70%" }}
            />
          </ParallaxLayer>

          <ParallaxLayer
            offset={1.1}
            speed={-0.2}
            style={{ pointerEvents: "none" }}
          >
            <img
              alt=""
              src={require("./img/airpods_listen_to_right_large.png")}
              style={{ width: "7%", marginLeft: "65%" }}
            />
          </ParallaxLayer>

          {/* <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
            <img
              alt=""
              src={url("cloud")}
              style={{ display: "block", width: "20%", marginLeft: "55%" }}
            />
            <img
              alt=""
              src={url("cloud")}
              style={{ display: "block", width: "10%", marginLeft: "15%" }}
            />
          </ParallaxLayer> */}

          {/* <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
          <img alt="" src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '70%' }} />
          <img alt="" src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '40%' }} />
        </ParallaxLayer> */}
          {/* 
        <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
          <img alt="" src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '10%' }} />
          <img alt="" src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '75%' }} />
        </ParallaxLayer> */}

          {/* <ParallaxLayer offset={1.6} speed={-0.1} style={{ opacity: 0.4 }}>
          <img alt="" src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '60%' }} />
          <img alt="" src={url('cloud')} style={{ display: 'block', width: '25%', marginLeft: '30%' }} />
          <img alt="" src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '80%' }} />
        </ParallaxLayer> */}
          {/* 
        <ParallaxLayer offset={2.6} speed={0.4} style={{ opacity: 0.6 }}>
          <img alt="" src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '5%' }} />
          <img alt="" src={url('cloud')} style={{ display: 'block', width: '15%', marginLeft: '75%' }} />
        </ParallaxLayer> */}

          <ParallaxLayer
            offset={2.5}
            speed={-0.4}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              pointerEvents: "none"
            }}
          >
            <img alt="" src={url("earth")} style={{ width: "60%" }} />
          </ParallaxLayer>

          <ParallaxLayer
            offset={2}
            speed={-0.3}
            style={{
              backgroundSize: "80%",
              backgroundPosition: "center",
              backgroundImage: url("clients", true)
            }}
          />

          <ParallaxLayer
            offset={0}
            speed={0.1}
            //   onClick={() => this.parallax.scrollTo(1)}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <div className="first-page">
              <img
                alt=""
                src={require("./img/homepod.png")}
                style={{ width: "50%", height: "50%" }}
              />

              <div className="masked-copy">
                <p className="intro">
                  動聽的理由，
                  <br />
                  動人心弦。
                </p>
              </div>
            </div>
          </ParallaxLayer>

          <ParallaxLayer
            offset={1}
            speed={0.1}
            //   onClick={() => this.parallax.scrollTo(2)}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <img alt="" src={url("bash")} style={{ width: "40%" }} />
          </ParallaxLayer>

          <ParallaxLayer
            offset={2}
            speed={-0.1}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
            //   onClick={() => this.parallax.scrollTo(0)}
          >
            <img alt="" src={url("clients-main")} style={{ width: "40%" }} />
          </ParallaxLayer>

          <ParallaxLayer
            offset={3}
            speed={-0.1}
            //   onClick={() => this.parallax.scrollTo(1)}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <img
              alt=""
              src={require("./img/carbon.png")}
              style={{ width: "65%" }}
            />
          </ParallaxLayer>
        </Parallax>
      </div>
    );
  }
}

export default ParallaxHome;
