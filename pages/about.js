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
  transition: opacity 500ms ease;
  position: relative;
  ${mediaMin.tabletLandscape`
    background-image: url('/static/images/pages/about/heidi_about_background.jpg');
  `}
  .mobile-overlay {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    background: rgba(0, 0, 0, 0.5);
    ${mediaMin.tabletLandscape`
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
    transition: opacity 500ms ease-in-out 500ms;
    opacity: ${props => (!props.mounted ? 0 : 1)};
    ${mediaMin.tabletLandscape`
      width: 60%;
    `}
    h1 {
      font-size: 2rem;
      ${mediaMin.tabletLandscape`
        font-size: 3rem;
      `}
    }
    p {
      width: 90%;
      ${mediaMin.tabletLandscape`
        max-width: 750px;
      `}
    }
  }
  #instagram-link {
    display: none;
    ${mediaMin.tabletLandscape`
      position: absolute;
      bottom: 20px;
      right: 20px;
      display: flex;
      img {
        height: 40px;
        width: 40px;
      }
    `}
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
            Heidi Hölting is a highly experienced professional fashion and fit model based in New York City. She works
            for international clients including Tommy Hilfiger, Gap Inc., Calvin Klein, Vineyard Vines, Jessica Simpson
            Swimwear, Club Monaco, Sofía Vergara, Juicy Couture and many more.
          </p>
        </section>
        <a id="instagram-link" href="https://www.instagram.com/heidi_c_nyc/" target="_blank" rel="noopener noreferrer">
          <img src="/static/images/logos/instagram_white.svg" alt="instagram_logo" />
        </a>
      </AboutWrapper>
    );
  }
}

export default About;
