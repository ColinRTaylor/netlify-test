import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";
import ReactModal from "react-modal";
import Form from "../components/Form";
import image from "../image.jpg";
const Wrapper = styled.div`
  background: url(${image}) no-repeat center center fixed;
  background-size: cover;

  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
`;
const Inner = styled.div`
  width: 20%;
  margin-top: 15vh;
  padding: 3vh 0;
  color: white;
  text-align: center;
  word-wrap: normal;
`;
const Top = styled.div`
  border-bottom: 1px solid white;
  margin: 3vh 0;
`;

class IndexPage extends React.Component {
  state = {
    open: false
  };
  toggle = () => {
    this.setState({ open: !this.state.open });
  };
  renderModal() {
    return (
      <ReactModal
        isOpen={this.state.open}
        contentLabel="Contact Us"
        className={{ base: "modal" }}
        shouldCloseOnOverlayClick={true}
        toggle={this.toggle}
        style={{
          overlay: {
            backgroundColor: "rgba(16, 11, 11, 0.55)"
          },
          content: {}
        }}
      >
        {" "}
        <CloseButton onClick={this.toggle}>X</CloseButton>
        <div style={{ width: "100%", textAlign: "left" }}>
          <iframe
            src="//eventbrite.com/tickets-external?eid=38578479270&ref=etckt"
            frameBorder={0}
            height={275}
            width="100%"
            vspace={0}
            hspace={0}
            marginHeight={5}
            marginWidth={5}
            scrolling="auto"
            allowTransparency="true"
          />
        </div>
      </ReactModal>
    );
  }
  render() {
    return (
      <Wrapper>
        <Inner>
          <Top>
            <h1>Jessie and Colin</h1>
          </Top>
          <h2>Coming Soon</h2>
        </Inner>
      </Wrapper>
    );
  }
}

const CloseButton = styled.span`cursor: pointer;`;

export default IndexPage;
