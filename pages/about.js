import styled from 'styled-components';

import React, { Component } from 'react';

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
    return <AboutWrapper mounted={mounted}>Hello World</AboutWrapper>;
  }
}

export default About;

const AboutWrapper = styled.div`
  height: 100%;
  width: 100%;
  background-image: url('/static/images/pages/about/heidi_hoelting_black_background.jpg');
  background-size: cover;
  background-position: center center;
  opacity: ${props => (!props.mounted ? 0 : 1)};
  transition: opacity 300ms ease;
`;
