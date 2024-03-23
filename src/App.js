import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import { ReactTyped } from "react-typed";
import logo from "./img/logo-light.png";
import React, { useEffect } from "react";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Testimonial from "./components/Testimonial/Testimonial";
import Portfoliofilter from "./components/Portfolio Filter/Portfoliofilter";
import Resume from "./components/Resume/Resume";
import About from "./components/About/About";
import Hero from "./components/Hero/Hero";
import "ti-icons/css/themify-icons.css";
import { useDispatch } from "react-redux";
import { getUser } from "./actions/user";
function App() {


  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser());
  }, [dispatch])

  //active
  useEffect(() => {
    const addLoadedClass = () => {
      document.body.classList.add("loaded");
    };

    window.addEventListener("load", addLoadedClass);

    return () => {
      window.removeEventListener("load", addLoadedClass);
    };
  }, []);


  return (

    <div className="App" id="home">
      <div class="site-pre.js-addo-nav-toggleer-wrap">
        <div class="spinner"></div>
      </div>
      {/* site-preloader-wrap */}
      <div className="dl-fixed-sidebar dl-sidebar-left">
        <div className="dl-header-container">
          <div className="logo">
            <h1>
              <a href="/">
                <img src={logo} alt="logo" />
              </a>
            </h1>
          </div>
          <div className="dl-burger-menu">
            <div className="dl-line-menu dl-line-half dl-first-line"></div>
            <div className="dl-line-menu"></div>
            <div className="dl-line-menu dl-line-half dl-last-line"></div>
          </div>
          <nav className="dl-menu-fixed">
            <ul>
              <li>
                <a href="#home" data-scroll-nav="0">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" data-scroll-nav="1">
                  About Me
                </a>
              </li>
              <li>
                <a href="#resume" data-scroll-nav="2">
                  Resume
                </a>
              </li>
              <li>
                <a href="#services" data-scroll-nav="3">
                  Services
                </a>
              </li>
              <li>
                <a href="#portfolios" data-scroll-nav="4">
                  Portfolios
                </a>
              </li>
              <li>
                <a href="#reviews" data-scroll-nav="5">
                  Reviews
                </a>
              </li>
              <li>
                <a href="#contact" data-scroll-nav="6">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      {/* dl-fixed-sidebar */}
      <div class="dl-side-content">
        <div class="content-lines-wrapper">
          <div class="content-lines-inner">
            <div class="content-lines"></div>
          </div>
        </div>
        <div
          className="dl-side-content"
          style={{ marginLeft: "auto", marginTop: "-65px" }}
        >
          <div className="content-lines-wrapper">
            <div className="content-lines-inner">
              <div className="content-lines"></div>
            </div>
          </div>

          {/* content-lines-wrapper */}
          <header
            className="hero-section d-flex align-items-center bd-bottom"
            data-scroll-index="0"
          >
            <div className="container">
              <div className="hero-content text-center">
                <h4>Hello! I'M</h4>
                <h1>John Doe</h1>
                <h2>
                  I'm {" "}
                  <ReactTyped
                    strings={["Freelancer.", "Designer.", "Developer."]}
                    typeSpeed={150}
                    loop
                  />
                </h2>
              </div>
              <ul className="hero-social">
                <li>
                  <a href="#">
                    <i className="ti-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="ti-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="ti-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="ti-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="ti-youtube"></i>
                  </a>
                </li>
              </ul>
            </div>
          </header>
          {/* hero-section */}
          <Hero />
          {/* about-section */}
          <About />
          {/* resume-section */}
          <Resume />
          {/* services-section */}
          <Portfoliofilter />
          {/* portfolio-section */}
          <Portfolio />
          {/* testimonial-section */}
          <Testimonial />
          {/* contact-section */}
          <Contact />
          {/* footer-section */}
          <Footer />
        </div>
      </div>
    </div>

  );
}

export default App;
