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
  height:100vh;
  background-color: ${staticcss.color.RedBackground};
`
const Buttoncontainer = styled.div`
  position: absolute;
  top:2rem;
  right: 14rem;
`
const Contetscontainer = styled.div`
  width: 1300px;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const TextContainer = styled.div`
  h1 {
    font-size: ${staticcss.fontSize.RedMian};
    color: white;
    font-weight: bold;
  }
  span {
    font-size: ${staticcss.fontSize.RedSub};
    font-weight: 500;
  }
`;
const ImageContainer = styled.div`
  position: relative;
  width: 700px;
  height: 500px;
  .speacker1 {
    position: absolute;
    bottom: -3rem;
    right: 1rem;
  }
  .speacker2 {
    position: absolute;
    top:3rem;
    left:1rem;
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

 console.log(play)

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
