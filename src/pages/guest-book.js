import React from "react";
import ReactDisqusThread from "react-disqus-thread";
import { Content } from "../index-style";
import styled from "styled-components";

const GuestBook = () => {
  return (
    <Wrapper>
      <h2>GuestBook</h2>
      <ReactDisqusThread
        shortname="jessieandcolin-life-1"
        identifier="something-unique-12345"
        title="Guest Book"
        url="http://www.example.com/example-thread"
      />
    </Wrapper>
  );
};

const Wrapper = Content.extend`
  height: 79%;
  width: 83%;
  justify-content: flex-start;
  align-items: stretch;
`;
export default GuestBook;
