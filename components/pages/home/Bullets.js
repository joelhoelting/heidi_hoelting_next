import styled from 'styled-components';
import { mediaMin } from '../../../styles/mediaQueries';

const Bullets = ({ active, activeImage, imageCount, stopImageRotation }) => {
  const bullets = [];
  const bulletLength = imageCount;
  for (let index = 1; index <= bulletLength; index += 1) {
    bullets.push(
      <Bullet onClick={() => stopImageRotation(index)} key={`image-bullet-${index}`} active={activeImage === index} />
    );
  }

  return <BulletDiv active={active}>{bullets}</BulletDiv>;
};

export default Bullets;

const BulletDiv = styled.div`
  display: none;
  ${mediaMin.tablet`
    display: flex;
    flex-direction: row;
    opacity: ${props => (props.active ? 1 : 0)};
    position: absolute;
    right: 50%;
    top: 95%;
    transform: translateX(50%);
    visibility: ${props => (props.active ? 'visible' : 'hidden')};
    flex-direction: column;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
  `}
`;

const Bullet = styled.button`
  background: ${props => (props.active ? '#000' : '#fff')};
  border: 0;
  border-radius: 50%;
  cursor: pointer;
  height: 8px;
  width: 8px;
  margin: 0 10px;
  padding: 5px;
  transition: background 300ms ease;

  ${mediaMin.tablet`
    margin: 10px 0;
    &:hover {
      background: #000
    }
  `}
`;
