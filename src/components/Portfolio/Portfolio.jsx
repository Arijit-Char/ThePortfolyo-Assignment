import React from "react";
import Isotope from "isotope-layout";
import imagesLoaded from "imagesloaded";
import { useEffect } from "react";
import $ from "jquery";
import OwlCarousel from "react-owl-carousel";
import { useSelector } from "react-redux";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
export default function Portfolio() {
  useEffect(() => {
    const iso = new Isotope(".portfolio-items", {
      itemSelector: ".single-item",
      layoutMode: "masonry",
    });

    const filterItems = () => {
      const filterValue = $(this).attr("data-filter");
      iso.arrange({ filter: filterValue });
    };

    const onImagesLoaded = () => {
      $(".portfolio-filter li").on("click", function () {
        $(".portfolio-filter li").removeClass("active");
        $(this).addClass("active");
        filterItems();
      });
    };

    imagesLoaded(".portfolio-items", onImagesLoaded);

    return () => {
      $(".portfolio-filter li").off("click");
    };
  }, []);
  const user = useSelector((state) => state.user.user);
  if (!user) {
    return <h1>Loading...</h1>;
  }
  return (
    <div>
      <section
        id="reviews"
        className="testimonial-section section-padding bd-bottom"
        data-scroll-index="5"
      >
        <div className="container">
          <div
            className="section-heading mb-40 text-center wow fadeInUp"
            data-wow-delay="200ms"
            data-wow-duration="1000ms"
          >
            <h2>Clients Reviews</h2>
          </div>
          <OwlCarousel
            id="testimonial-carousel"
            className="testimonial-carousel owl-carousel"
            loop={true}
            margin={10}
            center={false}
            autoplay
            smartSpeed={500}
            navText={[
              '<i class="fa fa-caret-left"></i>',
              '<i class="fa fa-caret-right"></i>',
            ]}
            dots={true}
            responsive={{
              0: {
                items: 1,
              },
              480: {
                items: 1,
              },
              768: {
                items: 2,
              },
              992: {
                items: 2,
              },
            }}
          >
            {user.testimonials.map ((item) => (
           
               <div className="testimonial-item" key={item._id}>
               <div className="testimonial-innter">
                 <div className="testi-thumb">
                   <img src={item.image.url} alt="img" />
                 </div>
                 <div className="testi-content">
                   <p>
                    {item.review}
                   </p>
                   <h4>
                     {item.name} <span>{item.position}</span>
                   </h4>
                 </div>
               </div>
             </div>
            ),
            )}
           
          </OwlCarousel>
        </div>
      </section>
    </div>
  );
}
