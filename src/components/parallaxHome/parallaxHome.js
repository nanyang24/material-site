import React from "react";
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons";
import IndexBar from "../indexBar/indexBar";
// import BarCard from "../barCard/barCard";
import FloatingCard from "../floatingCard/floatingCard";
import TransitionCard from "../transitionCard/transitionCard";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./parallaxHome.scss";
// import img1 from "./img/0首页banner无头部字.png";

// Little helpers ...
const getUrl = (name, wrap = false) =>
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

const settings = {
  className: "center",
  centerMode: true,
  centerPadding: "60px",
  vertical: false,
  draggable: false,
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  appendDots: dots => (
    <div
      style={{
        padding: "10px"
      }}
    >
      <ul style={{ margin: "0px" }}>{dots}</ul>
    </div>
  ),
  customPaging: () => (
    <div
      style={{
        width: "30px",
        height: "3px",
        background: "#eee",
        borderRadius: "5px"
      }}
    />
  )
};

class ParallaxHome extends React.Component {
  state = {
    currentPage: 0
  };

  componentDidMount() {
    window.addEventListener("wheel", this.scrollFullPage);
  }

  componentWillUnmount() {
    window.removeEventListener("wheel", this.scrollFullPage);
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
        {/* <div className="header-bar">
          {["首页", "平面设计", "视频制作", "素材库"].map(item => {
            return <BarCard type={item} />;
          })}
        </div> */}

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
            style={{
              backgroundImage:
                "linear-gradient(to bottom right , #FD6843, #9C5FB6 ,#4CBFD0)"
            }}
          />
          <ParallaxLayer
            factor={2}
            offset={0}
            speed={1}
            // style={{ backgroundColor: "#273238" }}
            style={{
              backgroundImage:
                "linear-gradient(to bottom right , #FD6843, #9C5FB6 ,#4CBFD0)"
            }}
          />

          <ParallaxLayer
            offset={1}
            speed={1}
            style={{
              backgroundImage:
                "linear-gradient(to bottom left , #4CBFD0, #9C5FB6 , #FD6843)"
            }}
          />

          <ParallaxLayer
            factor={2}
            offset={1}
            speed={1}
            style={{
              backgroundImage:
                "linear-gradient(to bottom left , #4CBFD0, #9C5FB6 , #FD6843)"
            }}
          />

          <ParallaxLayer
            offset={2}
            speed={1}
            // style={{ backgroundColor: "#DAF8FF" }}
            style={{
              backgroundImage:
                "linear-gradient(to bottom right , #FD6843, #9C5FB6 ,#4CBFD0)"
            }}
          />

          <ParallaxLayer
            factor={2}
            offset={2}
            speed={1}
            // style={{ backgroundColor: "#DAF8FF" }}
            style={{
              backgroundImage:
                "linear-gradient(to bottom right , #FD6843, #9C5FB6 ,#4CBFD0)"
            }}
          />

          <ParallaxLayer
            offset={3}
            speed={1}
            // style={{ backgroundColor: "#273238" }}
            style={{
              backgroundImage:
                "linear-gradient(to bottom left , #4CBFD0, #9C5FB6 , #FD6843)"
            }}
          />

          <ParallaxLayer
            factor={2}
            offset={3}
            speed={1}
            // style={{ backgroundColor: "#273238" }}
            style={{
              backgroundImage:
                "linear-gradient(to bottom left , #4CBFD0, #9C5FB6 , #FD6843)"
            }}
          />

          <ParallaxLayer
            offset={0}
            speed={0}
            factor={3}
            style={{
              backgroundImage: getUrl("stars", true),
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
              src={require("./img/悬浮03.png")} 
              style={{ width: "20%", marginLeft: "85%" }}
            />
          </ParallaxLayer>

          <ParallaxLayer
            offset={1.05}
            speed={-0.2}
            style={{ pointerEvents: "none" }}
          >
            <img
              alt=""
              src={require("./img/悬浮02.png")} 
              style={{ width: "20%", marginLeft: "50%" }}
            />
          </ParallaxLayer>

          {/* <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
            <img
              alt=""
              src={getUrl("cloud")}
              style={{ display: "block", width: "20%", marginLeft: "55%" }}
            />
            <img
              alt=""
              src={getUrl("cloud")}
              style={{ display: "block", width: "10%", marginLeft: "15%" }}
            />
          </ParallaxLayer> */}

          <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
            <img
              alt=""
              src={require("./img/悬浮01.png")}            
              style={{ display: "block", width: "20%", marginLeft: "70%" }}
            />
            <img
              alt=""
              src={require("./img/悬浮02.png")}            
              style={{ display: "block", width: "20%", marginLeft: "40%" }}
            />
          </ParallaxLayer>
          {/* 
        <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
          <img alt="" src={getUrl('cloud')} style={{ display: 'block', width: '10%', marginLeft: '10%' }} />
          <img alt="" src={getUrl('cloud')} style={{ display: 'block', width: '20%', marginLeft: '75%' }} />
        </ParallaxLayer> */}

          {/* <ParallaxLayer offset={1.6} speed={-0.1} style={{ opacity: 0.4 }}>
          <img alt="" src={getUrl('cloud')} style={{ display: 'block', width: '20%', marginLeft: '60%' }} />
          <img alt="" src={getUrl('cloud')} style={{ display: 'block', width: '25%', marginLeft: '30%' }} />
          <img alt="" src={getUrl('cloud')} style={{ display: 'block', width: '10%', marginLeft: '80%' }} />
        </ParallaxLayer> */}
          {/* 
        <ParallaxLayer offset={2.6} speed={0.4} style={{ opacity: 0.6 }}>
          <img alt="" src={getUrl('cloud')} style={{ display: 'block', width: '20%', marginLeft: '5%' }} />
          <img alt="" src={getUrl('cloud')} style={{ display: 'block', width: '15%', marginLeft: '75%' }} />
        </ParallaxLayer> */}

          {/* <ParallaxLayer
            offset={2.5}
            speed={-0.4}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              pointerEvents: "none"
            }}
          >
            <img alt="" src={getUrl("earth")} style={{ width: "60%" }} />
          </ParallaxLayer> */}

          {/* <ParallaxLayer
            offset={2}
            speed={-0.3}
            style={{
              backgroundSize: "80%",
              backgroundPosition: "center",
              backgroundImage: getUrl("clients", true)
            }}
          /> */}

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
                src={require("./img/newbie.png")}
                style={{ width: "60%", height: "60%" }}
              />

              <div className="masked-copy">
                <p className="intro">
                  全球原创设计，
                  <br />
                  灵感来源之地。
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
            <div className="floating-card-wrapper">
              <FloatingCard />
              <FloatingCard />
              <FloatingCard />
              <FloatingCard />
              <FloatingCard />
              <FloatingCard />
            </div>

            {/* <img alt="" src={getUrl("bash")} style={{ width: "40%" }} /> */}
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
            <div
              style={{
                // height: "50%",
                width: "75%"
              }}
            >
              <TransitionCard />
            </div>
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
            {/* <img
              alt=""
              src={require("./img/carbon.png")}
              style={{ width: "65%" }}
            /> */}
            <div
              className="video-slider-wrapper"
              style={{
                width: "40vw",
                height: "30vh"
              }}
            >
              <Slider ref={c => (this.slider1 = c)} {...settings}>
                <div className="video-slider-item">
                  <video id="player" playsinline controls>
                    <source
                      src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4"
                      type="video/mp4"
                    />
                  </video>
                </div>
                <div className="video-slider-item">
                  <video id="player" playsinline controls>
                    <source
                      src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4"
                      type="video/mp4"
                    />
                  </video>
                </div>
                <div className="video-slider-item">
                  <video id="player" playsinline controls>
                    <source
                      src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4"
                      type="video/mp4"
                    />
                  </video>
                </div>
              </Slider>
            </div>
          </ParallaxLayer>
        </Parallax>
      </div>
    );
  }
}

export default ParallaxHome;
