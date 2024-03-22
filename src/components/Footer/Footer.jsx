import React from 'react'

export default function Footer() {
  return (
    <div>
       <footer className="footer-section">
          <div className="container">
            <div className="row">
              <div className="col-sm-6">
                <p>
                  © <script> document.write(new Date().getFullYear())</script>{" "}
                  Naven by{" "}
                  <a
                    href="https://themeforest.net/user/dynamiclayers"
                    target="_blank"
                  >
                    DynamicLayers
                  </a>
                </p>
              </div>
              <div className="col-sm-6">
                <div className="footer-social text-right">
                  <a href="#">
                    <i className="ti-facebook"></i>
                  </a>
                  <a href="#">
                    <i className="ti-twitter"></i>
                  </a>
                  <a href="#">
                    <i className="ti-instagram"></i>
                  </a>
                  <a href="#">
                    <i className="ti-linkedin"></i>
                  </a>
                  <a href="#">
                    <i className="ti-youtube"></i>
                  </a>
                </div>
                {/* footer-social */}
              </div>
            </div>
          </div>
        </footer>
    </div>
  )
}
