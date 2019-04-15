import React, { Component } from 'react';
import styled from 'styled-components';

import { validEmail } from '../helpers/strings';
import { mediaMin } from '../styles/mediaQueries';

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      textarea: '',
      errors: {
        nameValid: true,
        emailValid: true,
        textareaValid: true
      }
    };
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.validateForm();
  }

  validateForm() {
    const { name, email, textarea } = this.state;

    let nameValid, emailValid, textareaValid;
    let invalidFieldsPresent = false;

    nameValid = name.length > 4 ? true : false;
    emailValid = validEmail(email) ? true : false;
    textareaValid = textarea.length > 5 ? true : false;

    if (!nameValid || !emailValid || !textareaValid) {
      invalidFieldsPresent = true;
    }

    this.setState({
      errors: {
        nameValid,
        emailValid,
        textareaValid
      }
    });

    return invalidFieldsPresent;
  }

  render() {
    const { name, email, textarea, errors } = this.state;

    return (
      <ContactWrapper className="contact-container" errors={errors}>
        <h1>Contact</h1>
        <form onSubmit={e => this.handleSubmit(e)}>
          <label htmlFor="email">
            <input
              className={email ? 'filled' : null}
              type="text"
              id="email"
              name="email"
              onChange={e => this.handleChange(e)}
              value={email}
            />
            <span>Your Email Address *</span>
          </label>
          <label htmlFor="name">
            <input
              className={name ? 'filled' : null}
              type="text"
              id="name"
              name="name"
              onChange={e => this.handleChange(e)}
              value={name}
            />
            <span>Your Name*</span>
          </label>
          <textarea
            placeholder="Your message to me..."
            name="textarea"
            onChange={e => this.handleChange(e)}
            value={textarea}
          />
          <button type="submit">SEND</button>
        </form>
      </ContactWrapper>
    );
  }
}

export default Contact;

const ContactWrapper = styled.div`
  height: 100%;
  width: 100%;
  text-align: center;
  ${mediaMin.tablet`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  `}
  h1 {
    margin: 0;
  }
  form {
    margin: 0 auto;
    max-width: 90%;
    width: 600px;
    label {
      display: block;
      position: relative;
      height: 70px;
      margin: 1em 0;
      width: 100%;
      input {
        background: none;
        border-top: none;
        border-right: none;
        border-left: none;
        height: 40px;
        padding: 0 1em;
        width: 100%;
        color: #000;
        &#email {
          border-bottom: ${props => (props.errors.emailValid ? '2px solid #000' : '2px solid red')};
        }
        &#name {
          border-bottom: ${props => (props.errors.nameValid ? '2px solid #000' : '2px solid red')};
        }
        &.filled + span,
        &:focus + span {
          top: 3.2em;
          font-size: 0.8rem;
          color: grey;
        }
      }
      span {
        cursor: text;
        font-size: 1rem;
        left: 1em;
        position: absolute;
        top: 0.8em;
        transition: all 200ms ease;
      }
    }
    textarea {
      background: none;
      border: ${props => (props.errors.textareaValid ? '2px solid #000' : '2px solid red')};
      border-radius: 5px;
      height: 200px;
      margin: 1em 0;
      padding: 1em 1em;
      resize: none;
      width: 100%;
    }
    button {
      background: none;
      border: 2px solid #000;
      border-radius: 5px;
      color: #000;
      cursor: pointer;
      font-size: 1.4rem;
      margin: 1em 0;
      padding: 1em 1em;
      width: 100%;
      transition: all 300ms ease;
      &:hover {
        background: #000;
        color: #fff;
      }
      &:focus {
        background: #000;
        color: #fff;
      }
    }
  }
`;
