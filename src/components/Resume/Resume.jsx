import React from "react";
import "./css/elegant-line-icons.css";
import { useSelector } from "react-redux";
export default function Resume() {
  const user = useSelector((state) => state.user.user);

  if (!user || !user.services) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <section
        id="services"
        className="services-section section-padding bd-bottom"
        data-scroll-index="3"
      >
        <div className="container">
          <div
            className="section-heading mb-40 text-center wow fadeInUp"
            data-wow-delay="200ms"
            data-wow-duration="1000ms"
          >
            <h2>Outstanding Services</h2>
          </div>
          <div className="row">
            {user.services.map((service) => (
              <div
                className="col-md-4 col-sm-6 sm-padding wow fadeInUp"
                data-wow-delay="500ms"
                data-wow-duration="1000ms"
                key={service._id}
              >
                <div className="services-item">
                  <div
                    class="card"
                    style={{
                      boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
                      transition: "0.3s",
                     objectFit:"cover",
                     marginBottom:"2vh"

                    }}
                  >
                    <img src={service.image.url} alt="" style={{width:"18.4vw",height:"35vh",objectFit:"cover"}} />
                  </div>

                  <h3>{service.name}</h3>
                  <p>{service.desc}</p>
                  <br />
                  <h5>Charge: { service.charge}</h5>
                  <div className="dots"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
