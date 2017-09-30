import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components';
import image from "../image.jpg"
const Wrapper = styled.div`
background: url(${image}) no-repeat center center fixed;
background-size: cover;

height: 100%; width: 100%;
display: flex; justify-content: center;

`
const Inner = styled.div`
width: 20%;
margin-top: 15vh;
padding: 3vh 0;
color: white;
text-align: center;
`
const Top = styled.div`
border-bottom: 1px solid white;
margin: 3vh 0;
`
const IndexPage = () => (
  <Wrapper>
    <Inner>
      <Top>
        <h1>Jessie and Colin</h1>
      </Top>
      <h2>Coming Soon</h2>
    </Inner>
  </Wrapper>
)

export default IndexPage
