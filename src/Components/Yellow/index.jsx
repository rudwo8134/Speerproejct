import React from 'react'
import styled from 'styled-components'
import staticcss from '../../Staticcss'
import Button from '../util/Button'
import image from '../../Assets/YellowBackground.png'
import HoverButton from '../util/HoverButton'


const YellowWrapper = styled.div`
  position: relative;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  margin: auto;
  width: 100vw;
  height: 100vh;
  background: #1d1f20;
  text-align: center;
  overflow: hidden;
  background-color: ${staticcss.color.YellowBackground};
`;
const Buttoncontainer = styled.div`
  position: absolute;
  top:2rem;
  right: 14rem;
`
const Imagecontainer = styled.div`
  z-index: 5;
  top: 40%;
  left: 10%;
  position: absolute;
  width: 30em;
  height: 30em;
  background: url(${image}) 50% 50% no-repeat fixed;
  background-size: cover;
  background-position: -30em -10em;
  border-radius: 50%;
`;
const Imagecontainer2 = styled.div`
  z-index: 5;
  top: 10%;
  left: 20%;

  position: absolute;
  width: 25em;
  height: 25em;
  background: url(${image}) 50% 50% no-repeat fixed;
  background-position:  -30em -10em ;
  background-size: cover;
  border-radius: 50%;
`;
const Imagecontainer3 = styled.div`
  z-index: 5;
  top: 40%;
  left: 33%;
  position: absolute;
  width: 13em;
  height: 13em;
  background: url(${image}) 50% 50% no-repeat fixed;
  background-position: -30em -10em;
  background-size: cover;
  border-radius: 50%;
`;
const Imagecontainer4 = styled.div`
  z-index: 5;
  bottom:-15%;
  right: -10%;
  position: absolute;
  width: 30em;
  height: 30em;
  background: url(${image}) 50% 50% no-repeat fixed;
  background-position: 0rem -2rem;
  background-size: cover;
  border-radius: 50%;
`;

const TextContainer = styled.div`
  position: absolute;
  z-index: 99;
  width: 40%;
  top: 40%;
  left: 80%;
  transform: translate(-80%, -40%);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  ::before {
    content: '';
    z-index: 3;
    top: -5rem;
    left: 10rem;
    position: absolute;
    width: 20em;
    height: 20em;
    background: url(${image}) 50% 50% no-repeat fixed;
    background-position: 20em 2em;
    background-size: cover;
    border-radius: 50%;
  }
  h1 {
    z-index: 99;
    mix-blend-mode: difference;
    font-size: ${staticcss.fontSize.YellowMain};
    color: white;
    font-weight: bold;
    margin: 0;
  }
  h3 {
    z-index: 99;
    mix-blend-mode: difference;
    font-size: ${staticcss.fontSize.YellowSub};
    font-weight: 500;
    color: #333333;
    text-align: start;
    margin: 2rem 0;
  }
`;



const Yellow = () => {
  return (
    <YellowWrapper>
      <Buttoncontainer>
        <Button text="TRY IT NOW" />
      </Buttoncontainer>
      <Imagecontainer />
      <Imagecontainer2 />
      <Imagecontainer3 />
      <Imagecontainer4 />
      <TextContainer>
        <h1>FRONT ROW SEATS</h1>
        <h3>Experience concerts up close and personal.</h3>
        <HoverButton Text="See Demo" fontcolor="#FFB33F" background="#fff" />
      </TextContainer>
    </YellowWrapper>
  );
}

export default Yellow;
