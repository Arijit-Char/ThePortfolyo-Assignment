import React, { useState } from "react";
import imgp1 from "../../img/port-1.jpg";
import imgp2 from "../../img/port-2.jpg";
import imgp3 from "../../img/port-3.jpg";
import imgp4 from "../../img/port-4.jpg";
import imgp5 from "../../img/port-5.jpg";
import imgp6 from "../../img/port-6.jpg";
import { useSelector } from "react-redux";

export default function Portfoliofilter() {
  const user = useSelector((state) => state.user.user);
  const [activeFilter, setActiveFilter] = useState("*");

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  return (
    <div>
      <section
        id="portfolios"
        className="portfolio-section section-padding bd-bottom"
        data-scroll-index="4"
      >
        <div className="container">
          <div
            className="section-heading text-center mb-40 wow fadeInUp"
            data-wow-delay="200ms"
            data-wow-duration="1000ms"
          >
            <h2>Work Portfolios</h2>
          </div>
          <div className="portfolio-wrapper">
            <ul className="portfolio-filter text-center mb-30">
              <li
                className={activeFilter === "*" ? "active" : ""}
                id="me"
                onClick={() => handleFilterClick("*")}
              >
                All
              </li>
              <li
                className={activeFilter === ".branding" ? "active" : ""}
                onClick={() => handleFilterClick(".branding")}
              >
                Branding
              </li>
              <li
                className={activeFilter === ".design" ? "active" : ""}
                onClick={() => handleFilterClick(".design")}
              >
                Design
              </li>
              <li
                className={activeFilter === ".wordpress" ? "active" : ""}
                onClick={() => handleFilterClick(".wordpress")}
              >
                Wordpress
              </li>
              <li
                className={activeFilter === ".marketing" ? "active" : ""}
                onClick={() => handleFilterClick(".marketing")}
              >
                Marketing
              </li>
            </ul>
            <div
              className="row portfolio-items"
             
            >
              <div
                className="col-md-4 col-sm-6 padding-10 single-item design wordpress"
                style={{
                  display:
                    activeFilter === "*" ||
                    activeFilter === ".design" ||
                    activeFilter === ".wordpress"
                      ? "block"
                      : "none",
                }}
              >
                <div className="portfolio-box">
                  <img
                    src={user ? user.projects[0].image.url : imgp1}
                    alt="img"
                  />
                  <div className="portfolio-content">
                    <h3>
                      <a className="img-popup" href={imgp1}>
                        Design Studio<span>Branding</span>
                      </a>
                    </h3>
                  </div>
                </div>
              </div>
              <div
                className="col-md-4 col-sm-6 padding-10 single-item branding marketing"
                style={{
                  left: "380px !importent",
                  display:
                    activeFilter === "*" ||
                    activeFilter === ".branding" ||
                    activeFilter === ".marketing"
                      ? "block"
                      : "none",
                }}
              >
                <div className="portfolio-box">
                  <img
                    src={user ? user.projects[1].image.url : imgp2}
                    alt="img"
                  />
                  <div className="portfolio-content">
                    <h3>
                      <a className="img-popup" href={imgp2}>
                        Design Studio<span>Branding</span>
                      </a>
                    </h3>
                  </div>
                </div>
              </div>
              <div
                className="col-md-4 col-sm-6 padding-10 single-item branding marketing"
                style={{
                  display:
                    activeFilter === "*" ||
                    activeFilter === ".design " ||
                    activeFilter === ".marketing"
                      ? "block"
                      : "none",
                }}
              >
                <div className="portfolio-box">
                  <img
                    src={user ? user.projects[2].image.url : imgp3}
                    alt="img"
                  />
                  <div className="portfolio-content">
                    <h3>
                      <a className="img-popup" href={imgp3}>
                        Design Studio<span>Branding</span>
                      </a>
                    </h3>
                  </div>
                </div>
              </div>
              <div
                className="col-md-4 col-sm-6 padding-10 single-item branding marketing"
                style={{
                  display:
                    activeFilter === "*" ||
                    activeFilter === ".wordpress" ||
                    activeFilter === ".marketing"
                      ? "block"
                      : "none",
                }}
              >
                <div className="portfolio-box">
                  <img
                    src={user ? user.projects[3].image.url : imgp4}
                    alt="img"
                  />
                  <div className="portfolio-content">
                    <h3>
                      <a className="img-popup" href={imgp4}>
                        Design Studio<span>Branding</span>
                      </a>
                    </h3>
                  </div>
                </div>
              </div>
              <div
                className="col-md-4 col-sm-6 padding-10 single-item branding marketing"
                style={{
                  display:
                    activeFilter === "*" ||
                    activeFilter === ".branding" ||
                    activeFilter === ".wordpress"
                      ? "block"
                      : "none",
                }}
              >
                <div className="portfolio-box">
                  <img
                    src={user ? user.projects[4].image.url : imgp5}
                    alt="img"
                  />
                  <div className="portfolio-content">
                    <h3>
                      <a className="img-popup" href={imgp5}>
                        Design Studio<span>Branding</span>
                      </a>
                    </h3>
                  </div>
                </div>
              </div>
              <div
                className="col-md-4 col-sm-6 padding-10 single-item branding marketing"
                style={{
                  display:
                    activeFilter === "*" || activeFilter === ".design"
                      ? "block"
                      : "none",
                }}
              >
                <div className="portfolio-box">
                  <img
                    src={user ? user.projects[5].image.url : imgp6}
                    alt="img"
                  />
                  <div className="portfolio-content">
                    <h3>
                      <a className="img-popup" href={imgp6}>
                        Design Studio<span>Branding</span>
                      </a>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
