import React, { useState } from 'react';
import styled from 'styled-components'
import staticcss from '../../Staticcss'
import Button from '../util/Button'
import speaker1 from '../../Assets/speaker1.png'
import speaker2 from '../../Assets/speaker2.png';
import music from '../../Assets/music.mp3'
import { Howl,Howler } from 'howler'
import HoverButton from '../util/HoverButton';


const RedWrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: ${staticcss.color.RedBackground};
  @media screen and (max-width: 468px) {
    height: unset;
  }
`;
const Buttoncontainer = styled.div`
  position: absolute;
  top: 2rem;
  right: 14rem;
  @media screen and (max-width: 468px) {
    top:1.5rem;
    right: 7rem;
  }
`;
const Contetscontainer = styled.div`
  max-width: 1300px;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 468px) {
    flex-direction: column;
    justify-content: center;
    padding: 1rem;
    height: unset;
  }
`;
const TextContainer = styled.div`
  @media screen and (max-width: 468px) {
    width: 80vw;
    margin: 0 auto;
    display: flex;
    align-items: center;
    flex-direction: column;
  
  }
  h1 {
    font-size: ${staticcss.fontSize.RedMian};
    color: white;
    font-weight: bold;
    @media screen and (max-width: 468px) {
      font-size: ${staticcss.fontSize.mobileRedMian};
      text-align: center;
      width: 100vw;
      margin-top:3rem;
    }
  }
  span {
    font-size: ${staticcss.fontSize.RedSub};
    font-weight: 500;
    @media screen and (max-width: 468px) {
      font-size: ${staticcss.fontSize.mobileRedSub};
      text-align: center;
      width: 90vw;
    }
  }
`;
const ImageContainer = styled.div`
  position: relative;
  width: 700px;
  height: 500px;
  @media screen and (max-width: 468px) {
    width: 30vw;
    height: 30vh;
    margin-bottom: 3rem;
    margin-top: 3rem;
  }
  .speacker1 {
    position: absolute;
    bottom: -3rem;
    right: 1rem;
    @media screen and (max-width: 468px) {
      width: 150px;
      height: 150px;
      bottom: -2.5rem;
    }
  }
  .speacker2 {
    position: absolute;
    top: 3rem;
    left: 1rem;
    @media screen and (max-width: 468px) {
      width: 150px;
      height: 150px;
      top: 1.5rem;
    }
  }
  img {
    width: 254px;
    height: 397px;
  }
`;
const Playbutton = styled.div`
  font-size: 1.4rem;
  text-transform: uppercase;
  border-radius: 50%;
  border: 3px solid white;
  width: 40px;
  height: 40px;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  transition: all 0.3s ease-in-out;
  @media screen and (max-width: 468px) {
    width: 15px;
    height: 15px;
    padding: 1rem;
    font-size: 0.8rem;
    bottom:1.5rem;
  }
  :hover {
    background-image: linear-gradient(
      45deg,
      #d34848,
      #d31111,
      #d13333,
      #f01111,
      #ffffff
    );
    transform: translateX(-50%) scale(1.03);
  }
`;



const Redsection = () => {
const [play,setplay] = useState(false);

 function playSound(src) {
    if(!play){
      var sound = new Howl({
        src,
      });
      sound.play()
    }else{
      Howler.stop();
    }
 }


  Howler.volume(1.0);


  return (
    <RedWrapper>
      <Buttoncontainer>
        <Button text="TRY IT NOW" />
      </Buttoncontainer>
      <Contetscontainer>
        <TextContainer>
          <h1>SUPERIOR SOUND</h1>
          <span>Experience live versions of your favourite songs.</span>
          <div style={{marginTop: "3rem"}}>
            <HoverButton Text="See Demo"/>
          </div>
        </TextContainer>
        <ImageContainer>
          <img src={speaker1} alt="speaer1" className="speacker1" />
          <img src={speaker2} alt="speaer2" className="speacker2" />
          <Playbutton
            onClick={()=>{playSound(music); setplay(!play);}}
          >
            {play ? "Stop":"Click"}
          </Playbutton>
        </ImageContainer>
      </Contetscontainer>
    </RedWrapper>
  );
}

export default Redsection
