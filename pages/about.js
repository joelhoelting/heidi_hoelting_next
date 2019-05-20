import { Component } from 'react';
import styled from 'styled-components';

const AboutWrapper = styled.div`
  height: 100%;
  width: 100%;
  background-image: url('/static/images/pages/about/heidi_about_background.jpg');
  background-size: cover;
  background-position: center center;
  opacity: ${props => (!props.mounted ? 0 : 1)};
  transition: opacity 300ms ease;
  position: relative;
  section {
    position: absolute;
    right: 0;
    height: 100%;
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: #fff;
    transition: opacity 400ms ease-in-out 200ms;
    opacity: ${props => (!props.mounted ? 0 : 1)};
    h1 {
      font-size: 3rem;
    }
    p {
      max-width: 750px;
    }
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
        <section>
          <h1>Heidi Hoelting</h1>
          <p>
            Officia commodo consectetur anim ut veniam. Ex cillum exercitation ad cillum eiusmod veniam sunt irure culpa
            deserunt deserunt exercitation. Velit officia enim labore amet nisi esse reprehenderit ad. Officia commodo
            consectetur anim ut veniam. Ex cillum exercitation ad cillum eiusmod veniam sunt irure culpa deserunt
            deserunt exercitation. Velit officia enim labore amet nisi esse reprehenderit ad.
          </p>
        </section>
      </AboutWrapper>
    );
  }
}

export default About;
