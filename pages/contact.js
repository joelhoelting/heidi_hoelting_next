import React, { Component } from 'react';
import styled from 'styled-components';
import { mediaMin } from '../styles/mediaQueries';

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      textarea: ''
    };
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    const { name, email, textarea } = this.state;

    return (
      <ContactWrapper className="contact-container">
        <h1>Contact</h1>
        <form onSubmit={this.handleSubmit}>
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
    width: 600px;
    max-width: 90%;
    margin: 0 auto;
    label {
      width: 100%;
      display: block;
      position: relative;
      width: 100%;
      margin: 1em 0;
      height: 70px;
      margin: 1em 0;
      input {
        height: 40px;
        width: 100%;
        padding: 0 1em;
        border-top: none;
        border-right: none;
        border-left: none;
        border-bottom: 2px solid black;
        background: none;
        &.filled + span,
        &:focus + span {
          top: 3.2em;
          font-size: 0.8rem;
          color: grey;
        }
      }
      span {
        position: absolute;
        left: 1em;
        top: 0.8em;
        cursor: text;
        transition: all 200ms ease;
        font-size: 1rem;
      }
    }
    textarea {
      width: 100%;
      height: 200px;
      border: 2px solid #000;
      border-radius: 5px;
      padding: 1em 1em;
      resize: none;
      margin: 1em 0;
      background: none;
    }
    button {
      border: 2px solid #000;
      border-radius: 5px;
      background: none;
      width: 100%;
      padding: 1em 1em;
      margin: 1em 0;
      transition: all 300ms ease;
      cursor: pointer;
      font-size: 1.4rem;
      color: #000;
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
