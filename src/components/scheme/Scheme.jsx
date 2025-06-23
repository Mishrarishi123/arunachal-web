import React from "react";
import "./Scheme.css"; // Import the CSS

const schemesData = [
  {
    title: "RGSA",
    color: "#32B400", // green
    items: ["Panchayat Bhavan", "DPRC"],
  },
  {
    title: "SOR",
    color: "#FF8A00", // orange
    items: ["Basic Grants", "Performance Grants"],
  },
  {
    title: "FC GRANTS",
    color: "#32B400", // green
    items: ["Tied Funds", "Untied Funds"],
  },
];

const Schemes = () => {
  return (
    <section className="schemes-section">
      <div className="scheme-overlay-left" />
      <div className="scheme-overlay-right" />

      <h2 className="schemes-heading">SCHEMES</h2>
      <p className="schemes-description">
        Government schemes in India are initiatives designed to address various
        social and economic issues, offering benefits to specific target groups.
        These
        <br /> schemes can be central, state-specific, or a combination of both,
        and cover a wide range of areas including social security, healthcare,
        education, and
        <br /> financial inclusion.
      </p>

      <div className="schemes-cards">
        {schemesData.map((scheme, index) => (
          <div className="scheme-card" key={index}>
            <div
              className="scheme-header"
              style={{ backgroundColor: scheme.color }}
            >
              {scheme.title}
            </div>
            <ul className="scheme-list">
              {scheme.items.map((item, i) => (
                <li key={i} className="scheme-item">
                  <span>{item}</span>
                  <span className="arrow">›</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Schemes;
