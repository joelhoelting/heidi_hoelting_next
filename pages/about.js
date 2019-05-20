import { Component } from 'react';
import styled from 'styled-components';
import { mediaMin } from '../styles/mediaQueries';

const AboutWrapper = styled.div`
  height: 100%;
  width: 100%;
  background-image: url('/static/images/pages/about/heidi_about_background_mobile.jpg');
  background-size: cover;
  background-position: center center;
  opacity: ${props => (!props.mounted ? 0 : 1)};
  transition: opacity 300ms ease;
  position: relative;
  ${mediaMin.tablet`
    background-image: url('/static/images/pages/about/heidi_about_background.jpg');
  `}
  .mobile-overlay {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    background: rgba(0, 0, 0, 0.5);
    ${mediaMin.tablet`
      display: none;
    `}
  }
  section {
    position: absolute;
    right: 0;
    height: 100%;
    width: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: #fff;
    transition: opacity 400ms ease-in-out 200ms;
    opacity: ${props => (!props.mounted ? 0 : 1)};
    ${mediaMin.tablet`
      width: 60%;
    `}
    h1 {
      font-size: 2rem;
      ${mediaMin.tablet`
        font-size: 3rem;
      `}
    }
    p {
      width: 90%;
      ${mediaMin.tablet`
        max-width: 750px;
      `}
    }
  }
  img.instagram-logo {
    position: absolute;
    bottom: 20px;
    right: 20px;
    width: 40px;
    cursor: pointer;
  }
`;

class About extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mounted: false
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ mounted: true });
    }, 200);
  }

  render() {
    const { mounted } = this.state;
    return (
      <AboutWrapper mounted={mounted}>
        <div className="mobile-overlay" />
        <section>
          <h1>Heidi Hoelting</h1>
          <p>
            Officia commodo consectetur anim ut veniam. Ex cillum exercitation ad cillum eiusmod veniam sunt irure culpa
            deserunt deserunt exercitation. Velit officia enim labore amet nisi esse reprehenderit ad. Officia commodo
            consectetur anim ut veniam. Ex cillum exercitation ad cillum eiusmod veniam sunt irure culpa deserunt
            deserunt exercitation. Velit officia enim labore amet nisi esse reprehenderit ad.
          </p>
        </section>
        <a href="https://www.instagram.com/heidi_c_nyc/">
          <img className="instagram-logo" src="/static/images/logos/instagram.svg" alt="instagram_logo" />
        </a>
      </AboutWrapper>
    );
  }
}

export default About;
