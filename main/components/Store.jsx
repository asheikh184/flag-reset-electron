import React, { Component } from "react";
import Slider from "react-slick";
import Slider1 from "../slider/Slider1";

export default class Store extends Component {

    constructor(props) {
        super(props);
        this.state = {
        nav1: null,
        nav2: null
        };
    }
    componentDidMount() {
        this.setState({
        nav1: this.slider1,
        nav2: this.slider2
        });
    }
    render() {
    return (
      <div className="store-area">
        <div className="container">
            <div className="row">
                <div className="col-xl-12">
                    <div className="live-videos-wrapper">
                        <div className="live-video-active">
                            <Slider
                            asNavFor={this.state.nav2}
                            ref={slider => (this.slider1 = slider)}
                            slidesToShow={1}
                            swipeToSlide={true}
                            focusOnSelect={true}
                            dots={false}
                            arrows={false}
                            >
                                <div className="live-video-item">
                                    <div className="live-content">
                                        <h1>RUMBLEVERSE</h1>
                                        <h2>DEMNACHST</h2>
                                        <p>Rumbleverso ist din brandneuer, kostonlos spiolbarer Brawler Royalo fur 40 Spieler, in dem jeder ein Champion werdon kann.</p>
                                        <div className="button-group">
                                            <a className="btn" href=" #">LEARN MORE</a>
                                            <a className="btn" href=" #">PUT ON WISHLIST</a>
                                        </div>
                                    </div>
                                    <img src="assets/img/slider/sb1.png" alt=""/>
                                </div>

                                <div className="live-video-item">
                                    <div className="live-content">
                                        <h1>RUMBLEVERSE</h1>
                                        <h2>DEMNACHST</h2>
                                        <p>Rumbleverso ist din brandneuer, kostonlos spiolbarer Brawler Royalo fur 40 Spieler, in dem jeder ein Champion werdon kann.</p>
                                        <div className="button-group">
                                            <a className="btn" href=" #">LEARN MORE</a>
                                            <a className="btn" href=" #">PUT ON WISHLIST</a>
                                        </div>
                                    </div>
                                    <img src="assets/img/slider/sb1.png" alt=""/>
                                </div>

                                <div className="live-video-item">
                                    <div className="live-content">
                                        <h1>RUMBLEVERSE</h1>
                                        <h2>DEMNACHST</h2>
                                        <p>Rumbleverso ist din brandneuer, kostonlos spiolbarer Brawler Royalo fur 40 Spieler, in dem jeder ein Champion werdon kann.</p>
                                        <div className="button-group">
                                            <a className="btn" href=" #">LEARN MORE</a>
                                            <a className="btn" href=" #">PUT ON WISHLIST</a>
                                        </div>
                                    </div>
                                    <img src="assets/img/slider/sb1.png" alt=""/>
                                </div>

                                <div className="live-video-item">
                                    <div className="live-content">
                                        <h1>RUMBLEVERSE</h1>
                                        <h2>DEMNACHST</h2>
                                        <p>Rumbleverso ist din brandneuer, kostonlos spiolbarer Brawler Royalo fur 40 Spieler, in dem jeder ein Champion werdon kann.</p>
                                        <div className="button-group">
                                            <a className="btn" href=" #">LEARN MORE</a>
                                            <a className="btn" href=" #">PUT ON WISHLIST</a>
                                        </div>
                                    </div>
                                    <img src="assets/img/slider/sb1.png" alt=""/>
                                </div>
                                <div className="live-video-item">
                                    <div className="live-content">
                                        <h1>RUMBLEVERSE</h1>
                                        <h2>DEMNACHST</h2>
                                        <p>Rumbleverso ist din brandneuer, kostonlos spiolbarer Brawler Royalo fur 40 Spieler, in dem jeder ein Champion werdon kann.</p>
                                        <div className="button-group">
                                            <a className="btn" href=" #">LEARN MORE</a>
                                            <a className="btn" href=" #">PUT ON WISHLIST</a>
                                        </div>
                                    </div>
                                    <img src="assets/img/slider/sb1.png" alt=""/>
                                </div>

                                <div className="live-video-item">
                                    <div className="live-content">
                                        <h1>RUMBLEVERSE</h1>
                                        <h2>DEMNACHST</h2>
                                        <p>Rumbleverso ist din brandneuer, kostonlos spiolbarer Brawler Royalo fur 40 Spieler, in dem jeder ein Champion werdon kann.</p>
                                        <div className="button-group">
                                            <a className="btn" href=" #">LEARN MORE</a>
                                            <a className="btn" href=" #">PUT ON WISHLIST</a>
                                        </div>
                                    </div>
                                    <img src="assets/img/slider/sb1.png" alt=""/>
                                </div>

                                <div className="live-video-item">
                                    <div className="live-content">
                                        <h1>RUMBLEVERSE</h1>
                                        <h2>DEMNACHST</h2>
                                        <p>Rumbleverso ist din brandneuer, kostonlos spiolbarer Brawler Royalo fur 40 Spieler, in dem jeder ein Champion werdon kann.</p>
                                        <div className="button-group">
                                            <a className="btn" href=" #">LEARN MORE</a>
                                            <a className="btn" href=" #">PUT ON WISHLIST</a>
                                        </div>
                                    </div>
                                    <img src="assets/img/slider/sb1.png" alt=""/>
                                </div>
                            </Slider>
                        </div>


                        <div className="live-video-navs">
                            <Slider
                            asNavFor={this.state.nav1}
                            ref={slider => (this.slider2 = slider)}
                            slidesToShow={6}
                            swipeToSlide={true}
                            focusOnSelect={true}
                            vertical={true}
                            dots={false}
                            arrows={false}
                            >
                                <div className="video-nav-item">
                                    <div className="thumb"><a href=" #"><img src="assets/img/slider/1.png" alt=""/></a></div>
                                    <div className="content">
                                        <a href=" #"><h4 className="title">Rumbleverse</h4></a>
                                    </div>
                                </div>
                                <div className="video-nav-item">
                                    <div className="thumb"><a href=" #"><img src="assets/img/slider/2.png" alt=""/></a></div>
                                    <div className="content">
                                        <a href=" #"><h4 className="title">Goat Simulator 3</h4></a>
                                    </div>
                                </div>
                                <div className="video-nav-item">
                                    <div className="thumb"><a href=" #"><img src="assets/img/slider/3.png" alt=""/></a></div>
                                    <div className="content">
                                        <a href=" #"><h4 className="title">Marvel's Spider-Man Rumastered</h4></a>
                                    </div>
                                </div>
                                <div className="video-nav-item">
                                    <div className="thumb"><a href=" #"><img src="assets/img/slider/4.png" alt=""/></a></div>
                                    <div className="content">
                                        <a href=" #"><h4 className="title">PC Building Simulator</h4></a>
                                    </div>
                                </div>
                                <div className="video-nav-item">
                                    <div className="thumb"><a href=" #"><img src="assets/img/slider/5.png" alt=""/></a></div>
                                    <div className="content">
                                        <a href=" #"><h4 className="title">Saints Row</h4></a>
                                    </div>
                                </div>
                                <div className="video-nav-item">
                                    <div className="thumb"><a href=" #"><img src="assets/img/slider/6.png" alt=""/></a></div>
                                    <div className="content">
                                        <a href=" #"><h4 className="title">Genshin Impact</h4></a>
                                    </div>
                                </div>
                                <div className="video-nav-item">
                                    <div className="thumb"><a href=" #"><img src="assets/img/slider/3.png" alt=""/></a></div>
                                    <div className="content">
                                        <a href=" #"><h4 className="title">Hancock</h4></a>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mt-100 mb-100">
                <div className="col-xd-12">
                    <Slider1/>
                </div>
            </div>
        </div>
      </div>
    );
  }
}