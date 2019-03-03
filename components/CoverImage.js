import styled from 'styled-components';

const CoverImage = styled.img`
  display: block;
  object-fit: cover;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  transition: opacity 600ms ease;
  opacity: ${props => props.active ? 1 : 0};
`;

export default CoverImage;