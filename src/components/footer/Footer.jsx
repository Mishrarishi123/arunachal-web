import React from 'react'
import "./Footer.css"

export default function Footer() {
    return (
      <section className="footer-section">
        <div className="footer">
          <div className="footer-container">
            <div className="footer-image">
              <img src="./images/footer.svg" alt="" />
              <h1>
                PANCHAYATI RAJ
                <br />
                REVENUE
              </h1>
            </div>
            <div className="footer-content">
              <div className="content">
                <h1>Other Link</h1>
                <ul>
                  <li>Feedback</li>
                  <li>Testimonials</li>
                  <li>Forms & Download</li>
                  <li>Employee Corner</li>
                  <li>Hyperlink Policy</li>
                  <li>Terms of Use</li>
                  <li>Privacy Policy</li>
                  <li>Disclaimer</li>
                  <li>Site Map</li>
                </ul>
              </div>

              <div className="content">
                <h1>Get in Touch</h1>
                <ul>
                  <li className='add'>
                    Address:
                    <br />
                    Revenue Department, Arunachal Pradesh
                    <br />
                    Ground Floor,
                    <br />
                    Vallabh Bhavan - 2, Ministry,
                    <br />
                    Area Hills,
                    <br />
                    Arunachal Pradesh - 790104
                  </li>

                  <li>Phone: +91-555-5555555</li>
                  <li>Working Hours:<br/>Opens at 10:30 AM - Closes at 5:30 PM</li>
                </ul>
              </div>

              <div className="content">
                <h1>Follow Us</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
    ); }
