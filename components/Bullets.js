import styled from 'styled-components';

const BulletDiv = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  visibility: ${props => props.active ? 'visible' : 'hidden'};
  opacity: ${props => props.active ? 1 : 0};
`;

const Bullet = styled.button`
  transition: all 1000ms ease, background 300ms ease;
  cursor: pointer;
  margin: 10px 0;
  height: 15px;
  width: 15px;
  padding: 5px;
  border: 0;
  border-radius: 50%;
  background: ${props => props.active ? '#000' : '#fff'};
  &:hover {
    background: #000
  }
`;

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