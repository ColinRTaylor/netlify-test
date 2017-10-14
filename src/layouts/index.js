import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import styled from "styled-components";
import { Inner, Nav, Top, Wrapper } from "../pages/index-style";

import "./index.css";

const NavLinks = styled(Link)`
  color: black;
  font-size: 18px;
`;

const TemplateWrapper = ({ children }) => (
  <div style={{ width: "100%", height: "100%" }}>
    <Helmet
      title="Jessie and Colin"
      meta={[
        {
          name: "description",
          content: "Jessie Frederick and Colin Taylor wedding site"
        },
        {
          name: "keywords",
          content:
            "Jessie Frederick,Jessie, Frederick ,Colin Taylor, Colin, Taylor, wedding, married"
        }
      ]}
    >
      <link rel="shortcut icon" href="static/favicon.ico" />
    </Helmet>
    <div className="wrapper">
      <Nav>
        <Link to="/wedding">Wedding</Link>
        <Link to="/details">Details</Link>
        <Link to="/rsvp">RSVP</Link>
        <Link to="/guest-book">Guest Book</Link>
        <Link to="/photos">Photos</Link>
      </Nav>
      {children()}
    </div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
