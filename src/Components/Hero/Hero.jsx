import React,{ useState, useEffect } from 'react'
import Data from './Herodata'
import styled from 'styled-components'
import staticcss from '../../Staticcss'
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'
import Button from '../util/Button'



const HeroWrapper = styled.div`
  width: 100vw;
  height: 100vh;
`
const SliderWrapper = styled.div`
  position: relative;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .slide.active {
    opacity: 1;
    transition: all 1s ease-in-out;
  }
`;
const Slidercontents = styled.div`
  position: relative;
  opacity: 0;
  transition: all 1s ease-in-out;

  img {
    width: 100vw;
    height: 100vh;
  }
`;
const SlidertextWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const SliderHeader = styled.h1`
  font-size: ${staticcss.fontSize.HeroMain};
  color:${staticcss.color.herotextcolor};
  font-weight: bold;
`
const SlederSubtitle = styled.h4`
  font-size: ${staticcss.fontSize.HeroSub};
  color: ${staticcss.color.herotextcolor};
  font-weight: 500;
`;

const Leftbutton = styled(FaArrowAltCircleLeft)`
  position: absolute;
  top:50%;
  left:32px;
  font-size: 3rem;
  color:white;
  z-index: 10;
  cursor: pointer;
  user-select: none;
`
const RIghtbutton = styled(FaArrowAltCircleRight)`
  position: absolute;
  top: 50%;
  right: 32px;
  font-size: 3rem;
  color: white;
  z-index: 10;
  cursor: pointer;
  user-select: none;
`;
const Radiobuttonwrapeer = styled.div`
  margin: 0 auto;
  position: absolute;
  bottom:32px;
  left: 50%;
  transform: translateX(-60%);
  display: flex;
  align-items: center;
  z-index: 33;
  justify-content: space-between;
`
const Radiobutton = styled.div`
  width: 30px;
  height: 30px;
  background-color: white;
  border-radius: 50%;
  margin-left: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  font-weight: bold;
  :hover {
    background-color: #FCE2BA;
  }
`;
const MouseCursor = styled.div`
  width: 60px;
  height: 60px;
  background-color: #fff;
  position: fixed;
  border-radius: 50%;
  pointer-events: none;
  mix-blend-mode: difference;
  transform: translate(-50%,-50%);
  z-index: 1000;
  transition: all 0.3s ease-in-out;
  transition-property: background,transform;

`


const Hero = () => {
  const [cursorX,setCursorX] = useState()
  const [cursorY, setCursorY] = useState();
  const [cursorgrow, setcursorgrow] = useState(false)
  const [current,setCurrent] = useState(0)
  const length = Data.length

  const nextSlide = () =>{
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? length-1 : current-1);
  };




  useEffect(()=>{
    const interval = setInterval(()=>{
      setCurrent(current === length-1 ? current + 1 : 0 );
    },10000)
    document.addEventListener("mousemove",(e)=>{
      const {clientX, clientY} =e;
      setCursorX(clientX)
      setCursorY(clientY)
    })
    
    return () => clearInterval(interval);
  },[])


    

  if(!Array.isArray(Data) || Data.length <= 0){
    return null;
  }





  return (
    <HeroWrapper>
      <SliderWrapper>
        <Leftbutton
          onClick={prevSlide}
          onMouseEnter={() => setcursorgrow(true)}
          onMouseLeave={() => setcursorgrow(false)}
        />
        <RIghtbutton
          onClick={nextSlide}
          onMouseEnter={() => setcursorgrow(true)}
          onMouseLeave={() => setcursorgrow(false)}
        />
        <Radiobuttonwrapeer>
          {Data.map((num, index) => (
            <Radiobutton
              key={index}
              onClick={() => setCurrent(index)}
              onMouseEnter={() => setcursorgrow(true)}
              onMouseLeave={() => setcursorgrow(false)}
            >
              {index + 1}
            </Radiobutton>
          ))}
        </Radiobuttonwrapeer>
        {Data.map((source, index) => {
          return (
            <Slidercontents
              key={index}
              className={index === current ? 'slide active' : 'slide'}
            >
              {index === current && (
                <>
                  <img src={source.img} alt={source.alt} />
                  <SlidertextWrapper
                    onMouseEnter={() => setcursorgrow(true)}
                    onMouseLeave={() => setcursorgrow(false)}
                  >
                    <SliderHeader>{source.Header}</SliderHeader>
                    <SlederSubtitle>{source.subHeader}</SlederSubtitle>
                    <Button text={source.buttontext}/>
                  </SlidertextWrapper>
                </>
              )}
            </Slidercontents>
          );
        })}
      </SliderWrapper>
      <MouseCursor
        cursorgrow={cursorgrow}
        style={{
          top: cursorY + 'px',
          left: cursorX + 'px',
          transform: cursorgrow ? 'scale(1.5)' : ' ',
          background: cursorgrow ? 'blue' : ' ',
        }}
      />
    </HeroWrapper>
  );
}

export default Hero
