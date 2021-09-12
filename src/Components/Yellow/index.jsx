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
  @media screen and (max-width: 468px) {
      display: flex;
      justify-content: center;
      align-items: center;
  }
`;
const Buttoncontainer = styled.div`
  position: absolute;
  top: 2rem;
  right: 14rem;
  @media screen and (max-width: 468px) {
    top:1.5rem;
    right:7rem;
  }
`;
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
  @media screen and (max-width: 468px) {
    background-position: -18em -5em;
    width: 200px;
    height: 200px;
    left: 1%;
    top: 30%;
  }
`;
const Imagecontainer2 = styled.div`
  z-index: 5;
  top: 10%;
  left: 20%;

  position: absolute;
  width: 25em;
  height: 25em;
  background: url(${image}) 50% 50% no-repeat fixed;
  background-position: -30em -10em;
  background-size: cover;
  border-radius: 50%;
  @media screen and (max-width: 468px) {
    background-position: -18em -5em;
    width: 200px;
    height: 200px;
  }
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
  @media screen and (max-width: 468px) {
    top: 35%;
    left: 40%;
    background-position: -18em -5em;
    width: 100px;
    height: 100px;
  }
`;
const Imagecontainer4 = styled.div`
  z-index: 5;
  bottom: -15%;
  right: -10%;
  position: absolute;
  width: 30em;
  height: 30em;
  background: url(${image}) 50% 50% no-repeat fixed;
  background-position: 0rem -2rem;
  background-size: cover;
  border-radius: 50%;
  @media screen and (max-width: 468px) {
    display: none;
  }
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
  @media screen and (max-width: 468px) {
    width: 100vw;
    margin-top: 3rem;
  }
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
    @media screen and (max-width: 468px) {
      display: none;
      
    }
  }
  h1 {
    z-index: 99;
    mix-blend-mode: difference;
    font-size: ${staticcss.fontSize.YellowMain};
    color: white;
    font-weight: bold;
    margin: 0;
    @media screen and (max-width: 468px) {
      margin: 2rem auto;
      text-align: center;
      width: 90%;
      font-size: ${staticcss.fontSize.mobileYellowMain};
      margin-top:3rem
      
    }
  }
  h3 {
    z-index: 99;
    mix-blend-mode: difference;
    font-size: ${staticcss.fontSize.YellowSub};
    font-weight: 500;
    color: #333333;
    text-align: start;
    margin: 2rem 0;
    @media screen and (max-width: 468px) {
      margin: 0 auto;
      text-align: center;
      width: 80%;
      font-size: ${staticcss.fontSize.mobileYellowSub};
    }
  }
`;
const Buttoncontainer2 = styled.div`
  @media screen and (max-width: 468px) {
    width: 100vw;
    margin-top: 2rem;
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
        <Buttoncontainer2>
          <HoverButton Text="See Demo" fontcolor="#FFB33F" background="#fff" />
        </Buttoncontainer2>
      </TextContainer>
    </YellowWrapper>
  );
}

export default Yellow;
