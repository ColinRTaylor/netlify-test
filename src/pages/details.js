import React from "react";
import { Content } from "../index-style";
import styled from "styled-components";

const Details = () => {
  return (
    <Wrapper>
      <h2>September 15, 2018</h2>
      <h2>Crane Creek Vineyard - Young Harris, GA</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3269.8659091335044!2d-83.88525008506393!3d34.95996938036862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x885f23d1a5b96171%3A0xf28f67008bbd3a15!2sCrane+Creek+Vineyards!5e0!3m2!1sen!2sus!4v1507982639292"
        width={"100%"}
        height={300}
        frameBorder={0}
        style={{ border: 0 }}
        allowFullScreen
      />
    </Wrapper>
  );
};

const Wrapper = Content.extend`
  height: 79%;
  width: 83%;
`;
export default Details;
