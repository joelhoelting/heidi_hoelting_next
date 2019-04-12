import styled from 'styled-components';

const Contact = () => {
  return (
    <ContactWrapper>
      <h1>Contact</h1>
      <form>
        <section>
          <span class="input input--ruri">
            <input className="input__field input__field--ruri" type="text" id="name" />
            <label className="input__label input__label--ruri" for="name">
              <span className="input__label-content input__label-content--ruri">Your Name*</span>
            </label>
          </span>
          <span className="input input--ruri">
            <input className="input__field input__field--ruri" type="text" id="email" />
            <label className="input__label input__label--ruri" for="email">
              <span className="input__label-content input__label-content--ruri">Your Email Address *</span>
            </label>
          </span>
          <textarea placeholder="Your message to me..." />
          <button type="submit">Send</button>
        </section>
      </form>
    </ContactWrapper>
  );
};

export default Contact;

const ContactWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  form {
    width: 40%;
    .input {
      position: relative;
      z-index: 1;
      display: inline-block;
      margin: 1em;
      max-width: 100%;
      width: calc(100% - 2em);
      vertical-align: top;
    }
    .input__field {
      position: relative;
      display: block;
      float: right;
      padding: 0.8em;
      width: 60%;
      border: none;
      border-radius: 0;
      color: #aaa;
      font-weight: 400;
      font-family: 'Avenir Next', 'Helvetica Neue', Helvetica, Arial, sans-serif;
      -webkit-appearance: none; /* for box shadows to show on iOS */
    }

    .input__field:focus {
      outline: none;
    }

    .input__label {
      display: inline-block;
      float: right;
      padding: 0 1em;
      width: 40%;
      color: #696969;
      font-weight: bold;
      font-size: 70.25%;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      -webkit-touch-callout: none;
      -webkit-user-select: none;
      -khtml-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
    }

    .input__label-content {
      position: relative;
      display: block;
      padding: 1.6em 0;
      width: 100%;
    }
    .input__field--ruri {
      width: 100%;
      background: transparent;
      padding: 0.5em 0;
      margin-bottom: 2em;
      color: #000;
    }

    .input__label--ruri {
      width: 100%;
      position: absolute;
      text-align: left;
      font-size: 1em;
      padding: 10px 0 5px;
      pointer-events: none;
    }

    .input__label--ruri::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 5px;
      background: #000;
      left: 0;
      top: 100%;
      -webkit-transform-origin: 50% 100%;
      transform-origin: 50% 100%;
      -webkit-transition: -webkit-transform 0.3s, background-color 0.3s;
      transition: transform 0.3s, background-color 0.3s;
    }

    .input__label-content--ruri {
      padding: 0;
      -webkit-transform-origin: 0 0;
      transform-origin: 0 0;
      -webkit-transition: -webkit-transform 0.3s, color 0.3s;
      transition: transform 0.3s, color 0.3s;
    }

    .input__field--ruri:focus + .input__label--ruri::after,
    .input--filled .input__label--ruri::after {
      background: #000;
      -webkit-transform: scale3d(1, 0.25, 1);
      transform: scale3d(1, 0.25, 1);
    }

    .input__field--ruri:focus + .input__label--ruri .input__label-content--ruri,
    .input--filled .input__label--ruri .input__label-content--ruri {
      color: #000;
      -webkit-transform: translate3d(0, 2em, 0) scale3d(0.655, 0.655, 1);
      transform: translate3d(0, 2em, 0) scale3d(0.655, 0.655, 1);
    }

    textarea {
      width: calc(100% - 2em);
      height: 200px;
      border: 2px solid #000;
      padding: 1em 1em;
      background-image: url(bg.gif);
      background-position: bottom right;
      background-repeat: no-repeat;
      resize: none;
      margin: 1em;
      transition: border 300ms;
      display: flex;
    }
    button {
      border: 2px solid #000;
      background: none;
      width: calc(100% - 2em);
      padding: 1em 1em;
      margin: 1em;
      transition: all 300ms ease;
      cursor: pointer;
      &:hover {
        background: #000;
        color: #fff;
      }
    }
  }
`;
