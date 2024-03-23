import React from "react";
import aboutbg from "../../img/about-bg.jpg";
import "ti-icons/css/themify-icons.css";
import { useSelector } from "react-redux";

export default function Hero() {
  const user = useSelector((state) => state.user.user);

  if (!user || !user.about) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <section
        id="about"
        className="about-section section-padding bd-bottom"
        data-scroll-index="1"
      >
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-md-7 sm-padding wow fadeInLeft"
              data-wow-delay="200ms"
              data-wow-duration="1000ms"
            >
              <div className="about-content">
                <h2>Let Me Introduce Myself.</h2>
                <p>{user.about.description}</p>
                <ul className="profile-info">
                  <li>
                    <span>Full Name</span>
                    {user.about.name}
                  </li>
                  <li>
                    <span>Title</span>
                    {user.about.title}
                  </li>
                  <li>
                    <span>Sub Title</span>
                    {user.about.subTitle}
                  </li>
                  <li>
                    <span> Experience</span>
                    {user.about.exp_year} Years
                  </li>
                  <li>
                    <span>Birth Date</span> 01-01-1990
                  </li>
                  <li>
                    <span>Address</span> {user.about.address}
                  </li>
                  <li>
                    <span>Email</span> {user.email}
                  </li>
                  <li>
                    <span>Phone</span> {user.about.phoneNumber}
                  </li>
                  <li>
                    <span>Website</span> JacobHarrison.com
                  </li>
                  <li>
                    <span>Quote</span> {user.about.quote}
                  </li>
                </ul>
                <a href="#" class="default-btn">
                  DOWNLOAD CV
                  <i className="ti-download"></i>
                </a>
              </div>
            </div>
            <div
              className="col-md-5 sm-padding wow fadeInRight"
              data-wow-delay="200ms"
              data-wow-duration="1000ms"
            >
              <div className="about-bg">
                <img src={user.about.avatar.url} alt="img" />
                <div className="dots"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
