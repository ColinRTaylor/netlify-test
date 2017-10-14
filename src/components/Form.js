import React, { Component } from 'react'
import styled from 'styled-components';

const encode = (data) => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", email: "", message: "" };
  }


  handleSubmit = e => {
    e.preventDefault();
    const action = this.form.getAttribute("action")
    fetch(action, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state })
    })
      .then(() => {
        this.props.toggle();
        console.log("Success!")
      })
      .catch(error => alert(error));

    e.preventDefault();
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, email, message } = this.state;
    return (
      <div>


        <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field" hidden>
          <input type="text" name="name" />
          <input type="email" name="email" />
          <input type="hidden" name="form-name" value="contact" />


        </form>

        <StyledForm
          onSubmit={this.handleSubmit}
          data-netlify="true" name="contact" action="contact"
          innerRef={(e) => this.form = e}>
          <h2>Contact Us</h2>
          <div>
            <StyledLabel>
              Your Name:
          </StyledLabel>
            <input type="text" name="name" value={name} onChange={this.handleChange} />
          </div>
          <div>
            <StyledLabel>
              Your Email:
          </StyledLabel>
            <input type="email" name="email" value={email} onChange={this.handleChange} />
          </div>
          <div>
            <StyledLabel>
              Message:
          </StyledLabel>
            <textarea name="message" value={message} onChange={this.handleChange} />
          </div>
          <button style={{ margin: "2vh 0" }} type="submit">Send</button>
        </StyledForm>
      </div >
    );
  }
}
const StyledForm = styled.form`
display: flex;
flex-direction: column;
align-items: center;
height: 100%;
justify-content: center;
`
const StyledLabel = styled.label`
display: flex;
flex-direction: column;
`
export default ContactForm