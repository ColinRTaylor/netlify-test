import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import styled from "styled-components";
import { Inner, Nav, Top, Wrapper } from "../index-style";

import "./index.css";

const NavLink = styled(Link)`
  color: #68849c;
  font-size: 18px;
  text-decoration: none;
  text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.2);
  &.active {
    border-bottom: 1px solid gray;
  }
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
        {/* <NavLink activeClassName="active" to="/wedding">
          Wedding
        </NavLink> */}
        <NavLink activeClassName="active" to="/details">
          Details
        </NavLink>
        <NavLink activeClassName="active" to="/rsvp">
          RSVP
        </NavLink>
        <NavLink activeClassName="active" to="/guest-book">
          Guest Book
        </NavLink>
        <NavLink activeClassName="active" to="/photos">
          Photos
        </NavLink>
      </Nav>
      {children()}
    </div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
