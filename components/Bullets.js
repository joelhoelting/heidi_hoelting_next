import styled from 'styled-components';
import { mediaMin } from '~/styles/mediaQueries';

const Bullets = (props) => {
  let bullets = [];
  let bulletLength = props.imageCount;
  for (let index = 1; index <= bulletLength; index++) {
    bullets.push(
      <Bullet 
        onClick={() => props.stopImageRotation(index)}
        key={`image-bullet-${index}`}
        active={props.activeImage === index}
      />
    );
  }

  return (
    <BulletDiv active={props.active}>
      {bullets}
    </BulletDiv>
  );
};

export default Bullets;

const BulletDiv = styled.div`
  display: flex;
  flex-direction: row;
  opacity: ${props => props.active ? 1 : 0};
  position: absolute;
  right: 50%;
  top: 95%;
  transform: translateX(50%);
  visibility: ${props => props.active ? 'visible' : 'hidden'};
  
  ${mediaMin.tabletLandscape`
    flex-direction: column;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
  `}
`;

const Bullet = styled.button`
  background: ${props => props.active ? '#000' : '#fff'};
  border: 0;
  border-radius: 50%;
  cursor: pointer;
  height: 15px;
  margin: 0 10px;
  padding: 5px;
  width: 15px;
  transition: background 300ms ease;
  
  ${mediaMin.tabletLandscape`
    margin: 10px 0;
    &:hover {
      background: #000
    }
  `}
`;