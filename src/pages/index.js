import React from "react";
import Link from "gatsby-link";
import ReactModal from "react-modal";
import Form from "../components/Form";
import { Inner, Nav, Top, Wrapper } from "../index-style";

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
      <Inner>
        <Top>
          <h1>Jessie and Colin</h1>
        </Top>
        <h2>Coming Soon</h2>
      </Inner>
    );
  }
}

export default IndexPage;
