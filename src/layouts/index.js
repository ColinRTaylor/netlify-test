import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import styled from 'styled-components';

import './index.css'

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
`

const TemplateWrapper = ({ children }) => (
  <div style={{ width: '100%', height: '100%' }}>
    <Helmet
      title="Jessie and Colin"
      meta={[
        { name: 'description', content: 'Jessie Frederick and Colin Taylor wedding site' },
        { name: 'keywords', content: 'Jessie Frederick,Jessie, Frederick ,Colin Taylor, Colin, Taylor, wedding, married' },
      ]}
    >
      <link rel="shortcut icon" href="static/favicon.ico" />

    </Helmet>
    <Wrapper>
      {children()}
    </Wrapper>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
