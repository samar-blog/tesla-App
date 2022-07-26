import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

function Section({ title, description, leftBtnText, rightBtnText, backgroundImg  }) {
  // console.log(props);
  return (
      <Wrap bgImage={backgroundImg}>
      <Fade bottom>
      <ItemText>
        <h2>{ title }</h2>
        <span>{ description }</span>
      </ItemText>
      </Fade>
      <Buttons>
      <Fade top>
      <ButtonGroup>
        <LeftButton>
            {leftBtnText}
              </LeftButton>
      { rightBtnText && 
          <RightButton>
          {rightBtnText}
          </RightButton>
      }
      </ButtonGroup>
      </Fade>
      <DownArrow src="/images/down-arrow.svg" />
      </Buttons>
    </Wrap>
  )
}

export default Section;

// styling Components

const Wrap = styled.div` 
 width:100vw;
 height:100vh;
 background-size:cover;
 background-position:center;
 background-repeat:no-repeat;
 background-image: ${props => `url("/images/${props.bgImage}")`};
 display:flex;
 flex-direction:column;
 justify-content:space-between;
 align-items:center;
 scroll-snap-align:start;
 scroll-snap-stop:always;
 scroll-snap-type:y mandatory;
 overflow-y:scroll;
`;

const ItemText = styled.div` 
 padding-top:15vh;
 text-align:center;
`;

const ButtonGroup = styled.div` 
 display:flex;
 margin-bottom:30px;
 @media (max-width:768px) { 
  flex-direction:column;
 }
`;

const LeftButton = styled.div` 
  height:40px;
  width:256px;
  color:white;
  display:flex;
  justify-content:center;
  align-items:center;
  background-color:rgba(23,26,32,0.8);
  border-radius:100px;
  opacity:0.85;
  text-transform:uppercase;
  font-size:12px;
  cursor:pointer;
  margin:8px;
`;
const RightButton = styled(LeftButton)`
 opacity:0.65;
 color:black;
 background:white;
`;

const DownArrow = styled.img`
 height:40px;
 overflow-x:hidden;
 animation: animateDown infinite 1.5s;
`;

const Buttons = styled.div``