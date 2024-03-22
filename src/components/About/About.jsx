import React from "react";
import { useSelector } from "react-redux";

export default function About() {
  const user = useSelector((state) => state.user.user);

  if (!user || !user.about) {
    return <div>Loading...</div>;
  }
  function formattedDate(dateString) {
    const date = new Date(dateString);
    const options = { year: "numeric", month: "long" };
    const formattedDate1 = date.toLocaleDateString("en-US", options);
    return formattedDate1;
  }

  return (
    <div>
      <section
        id="resume"
        className="resume-section section-padding bd-bottom"
        data-scroll-index="2"
      >
        <div className="container">
          <div className="row">
            <div
              className="col-md-6 sm-padding wow fadeInLeft"
              data-wow-delay="200ms"
              data-wow-duration="1000ms"
            >
              <div className="section-heading mb-40">
                <h2>Working Experience</h2>
              </div>
              <ul className="exp-list">
                <li>
                  <div className="exp-date">
                    <i className="ti-bookmark"></i>

                    <span>January 2019 - February 2020 </span>
                  </div>
                  <div className="exp-content">
                    <h4>
                      {user.timeline[0].company_name}{" "}
                      <span>{user.timeline[0].jobTitle}</span>
                    </h4>

                    {user.timeline[0].bulletPoints.map((bullet) => {
                      return <p>{bullet}</p>;
                    })}
                  </div>
                </li>
                <li>
                  <div className="exp-date">
                    <i className="ti-bookmark"></i>
                    <span>February 2020 - January 2021 </span>
                  </div>
                  <div className="exp-content">
                    <h4>
                      {user.timeline[1].company_name}{" "}
                      <span>{user.timeline[1].jobTitle}</span>
                    </h4>
                    {user.timeline[1].bulletPoints.map((bullet) => {
                      return <p>{bullet}</p>;
                    })}
                  </div>
                </li>
                <li>
                  <div className="exp-date">
                    <i className="ti-bookmark"></i>
                    <span> January 2021 - January 2022 </span>
                  </div>
                  <div className="exp-content">
                    <h4>
                      {user.timeline[2].company_name}{" "}
                      <span>{user.timeline[2].jobTitle}</span>
                    </h4>
                    {user.timeline[2].bulletPoints.map((bullet) => {
                      return <p>{bullet}</p>;
                    })}
                  </div>
                </li>
                <li>
                  <div className="exp-date">
                    <i className="ti-bookmark"></i>
                    <span> January 2022 - March 2023 </span>
                  </div>
                  <div className="exp-content">
                    <h4>
                      {user.timeline[3].company_name}{" "}
                      <span>{user.timeline[3].jobTitle}</span>
                    </h4>
                    {user.timeline[3].bulletPoints.map((bullet) => {
                      return <p>{bullet}</p>;
                    })}
                  </div>
                </li>
                <li>
                  <div className="exp-date">
                    <i className="ti-bookmark"></i>
                    <span>
                      March 2023 - {formattedDate(user.timeline[5].endDate)}{" "}
                    </span>
                  </div>
                  <div className="exp-content">
                    <h4>
                      {user.timeline[4].company_name}{" "}
                      <span>{user.timeline[4].jobTitle}</span>
                    </h4>
                    {user.timeline[4].bulletPoints.map((bullet) => {
                      return <p>{bullet}</p>;
                    })}
                  </div>
                </li>
                <li>
                  <div className="exp-date">
                    <i className="ti-bookmark"></i>
                    <span>
                      {formattedDate(user.timeline[5].endDate)} - Present{" "}
                    </span>
                  </div>
                  <div className="exp-content">
                    <h4>
                      {user.timeline[5].company_name}{" "}
                      <span>{user.timeline[5].jobTitle}</span>
                    </h4>
                    {user.timeline[5].bulletPoints.map((bullet) => {
                      return <p>{bullet}</p>;
                    })}
                  </div>
                </li>
              </ul>
            </div>
            <div
              className="col-md-6 sm-padding wow fadeInRight"
              data-wow-delay="200ms"
              data-wow-duration="1000ms"
            >
              <div className="skill-wrap">
                <div className="section-heading mb-40">
                  <h2>Professional Skills</h2>
                </div>
                <ul className="skill-items">
                  {user.skills.map((skill) => (
                    <li className="skill-item" key={skill._id}>
                      <div
                        style={{
                          display: "flex",
                          gap: "1rem",
                          alignItems: "center",
                        }}
                      >
                        <div
                          style={{
                            height: "2rem",
                            width: "2rem",
                            zIndex: "99 !importent",
                          }}
                        >
                          {" "}
                          <img src={skill.image.url} alt="" />{" "}
                        </div>
                        <h5>{skill.name}</h5>
                      </div>

                      <div className="progress">
                        <div
                          className="progress-bar wow slideInLeft"
                          data-wow-delay="0ms"
                          data-wow-duration="2000ms"
                          role="progressbar"
                          style={{ width: skill.percentage + "%" }}
                        >
                          <span>{skill.percentage}%</span>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
