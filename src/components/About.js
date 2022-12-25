import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import "./About.css";

export default function About() {
  return (
    <div className="AboutUsPage">
      <div className="img-viwer">
        <img src="about_us.jpg" />
      </div>
      <div>
        <h1> Our Mission </h1>
        <h2 className="about-content">
          JavaScript and Java programming languages are used to develop this
          Phish Shield tool. React framework is used for the front-end
          development and Java Spring boot is used for the back-end
          development.Google and PhishTank suggest. In this research PhishTank
          open API is used for identifying phishing URLs. This method accepts an
          HTTP GET request and returns a response indicating a URL’s status in
          the PhishTank database. PhishTank is a free community site where
          anyone can submit, verify, track and share phishing data and is
          operated by Cisco Talos Intelligence Group. PhishTank provides an open
          API for developers and researchers to integrate anti-phishing data
          into their application development.
        </h2>
      </div>
    </div>
  );
}
