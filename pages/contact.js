import React, { Component } from 'react';
import styled from 'styled-components';

import { validEmail } from '../helpers/strings';
import { mediaMin } from '../styles/mediaQueries';

import ThreeDots from '../components/loaders/ThreeDots';

const ContactWrapper = styled.div`
  height: 100%;
  text-align: center;
  width: 100%;
  background-image: url('/static/images/pages/contact/heidi_contact_background.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top right;
  display: flex;
  padding-top: 50px;
  opacity: ${props => (!props.mounted ? 0 : 1)};
  transition: opacity 500ms ease;
  ${mediaMin.tabletLandscape`
    padding-top: 0;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  `}

  form {
    margin: 0 auto;
    max-width: 90%;
    width: 600px;
    opacity: ${props => (!props.mounted ? 0 : 1)};
    transition: opacity 500ms ease 500ms;
    h1 {
      margin: 0;
      display: none;
      ${mediaMin.tabletLandscape`
        display: initial;
      `}
    }
    label {
      display: block;
      height: 70px;
      position: relative;
      margin: 1em 0;
      width: 100%;
      input {
        background: none;
        border-left: none;
        border-top: none;
        border-right: none;
        border-radius: 0;
        color: #000;
        font-size: 1rem;
        height: 40px;
        padding: 0 1em;
        width: 100%;

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
      font-size: 1rem;
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

  .form-success-message,
  .form-error-message {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: opacity 500ms ease;
    opacity: ${props => (props.animateSubmitted ? 1 : 0)};
  }

  #instagram-link {
    display: none;
    ${mediaMin.tabletLandscape`
      position: absolute;
      bottom: 20px;
      left: 20px;
      display: flex;
      img {
        height: 40px;
        width: 40px;
      }
    `}
  }
`;

const ContactLoadScreen = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

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
      },
      mounted: false,
      showLoadScreen: false,
      submitted: false,
      animateSubmitted: false,
      formSubmitError: false,
      formSubmitErrorMsg: ''
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ mounted: true });
    }, 200);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.isFormValid()) {
      const { email, name, textarea } = this.state;

      const emailBody = {
        to: 'heidi.hoelting@web.de',
        subject: `HeidiHoelting.com: ${name}`,
        from: 'HeidiHoelting.com',
        message: `Heidi, you have a new email from: ${email}\n\n${textarea}`
      };

      fetch('https://api.joelhoelting.com/aws/email/send-ses-email', {
        method: 'POST',
        body: JSON.stringify(emailBody), // data can be `string` or {object}!
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(res => {
          const { status, statusText } = res;

          this.setState({
            showLoadScreen: true
          });

          if (status === 200) {
            setTimeout(() => {
              this.setState({ showLoadScreen: false, submitted: true });
            }, 500);

            setTimeout(() => {
              this.setState({ animateSubmitted: true });
            }, 800);
          } else {
            setTimeout(() => {
              this.setState({ showLoadScreen: false, formSubmitError: true, formSubmitErrorMsg: statusText });
            }, 500);

            setTimeout(() => {
              this.setState({ animateSubmitted: true });
            }, 800);
          }
        })
        // eslint-disable-next-line
        .catch(error => console.error('Error:', error));
    }
  }

  isFormValid() {
    const { name, email, textarea } = this.state;

    let nameValid, emailValid, textareaValid;
    let isFormValid = true;

    nameValid = name.length > 2;
    emailValid = validEmail(email);
    textareaValid = textarea.length > 5;

    if (!nameValid || !emailValid || !textareaValid) {
      isFormValid = false;
    }

    this.setState({
      errors: {
        nameValid,
        emailValid,
        textareaValid
      }
    });

    return isFormValid;
  }

  renderForm() {
    const { name, email, textarea, showLoadScreen, submitted, formSubmitError, formSubmitErrorMsg } = this.state;

    if (showLoadScreen) {
      return (
        <ContactLoadScreen>
          <ThreeDots />
        </ContactLoadScreen>
      );
    } else if (!submitted && !formSubmitError) {
      return (
        <form onSubmit={e => this.handleSubmit(e)}>
          <h1>Contact</h1>
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
      );
    } else if (!submitted && formSubmitError) {
      return (
        <div className="form-success-message">
          <div>
            <p>We experienced an error:</p>
            <p>Message: {formSubmitErrorMsg}</p>
          </div>
        </div>
      );
    } else if (submitted && !formSubmitError) {
      return (
        <div className="form-error-message">
          <div>
            <p>Thank you for your message.</p>
            <p>--Heidi </p>
          </div>
        </div>
      );
    }
  }

  render() {
    const { errors, mounted, animateSubmitted } = this.state;

    return (
      <ContactWrapper errors={errors} mounted={mounted} animateSubmitted={animateSubmitted}>
        {this.renderForm()}
        <a id="instagram-link" href="https://www.instagram.com/heidi_c_nyc/" target="_blank" rel="noopener noreferrer">
          <img src="/static/images/logos/instagram_black.svg" alt="instagram_logo" />
        </a>
      </ContactWrapper>
    );
  }
}

export default Contact;
