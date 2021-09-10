import React from 'react'
import styled from 'styled-components'
import staticcss from '../../Staticcss'
import Button from '../util/Button';
import speaker1 from '../../Assets/smallspeaker1.png'
import speaker2 from '../../Assets/smallspeaker2.png';
import reviewdata from './reviewdata';
import {BsFillStarFill} from 'react-icons/bs'
import Star from '../util/Star';

const ReviewWrapper = styled.div`
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
  background-color: ${staticcss.color.ReviewBackground};
`;
const Buttoncontainer = styled.div`
  position: absolute;
  top: 2rem;
  right: 14rem;
`;
const Contetscontainer = styled.div`
  width: 1300px;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Imagecontainer = styled.div`
  position: relative;
  width: 70%;
  height: 50%;
  .small1 {
    position: absolute;
    top: 15rem;
    left: 3rem;

    width: 400px;
    height: 450px;
  }
  .small2 {
    position: absolute;
    right: 6rem;
    top: 1rem;

    width: 400px;
    height: 450px;
  }
`;
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 2rem;

.header{
  font-size: ${staticcss.fontSize.ReviewMainheader};
  color:white;
  text-transform: uppercase;
  text-align: start;
}
`
const ReviecontentswWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
const ReviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  h3 {
    font-size: ${staticcss.fontSize.Reviewsubtitle};
    color: white;
    text-transform: uppercase;
    font-weight: 700;
  }
  span {
    font-size: ${staticcss.fontSize.Reviewtext};
    text-transform: capitalize;
    font-weight: 300;
    text-align:start;
  }
`;

const Review = () => {
  return (
    <ReviewWrapper>
      <Buttoncontainer>
        <Button text="TRY IT NOW" />
      </Buttoncontainer>
      <Contetscontainer>
        <Imagecontainer>
          <img src={speaker1} alt="speaker1" className="small1" />
          <img src={speaker2} alt="speaker1" className="small2" />
        </Imagecontainer>
        <TextContainer>
          <h1 className="header">{reviewdata.name}</h1>
          <ReviecontentswWrapper>
            {reviewdata.data.map((data,index)=>{
              return(
                <ReviewContainer key={index}>
                  <Star index={data.star}/>
                  <h3>{data.name}</h3>
                  <span>{data.reveiw}</span>
                </ReviewContainer>
              )
            })}
          </ReviecontentswWrapper>
        </TextContainer>
      </Contetscontainer>
    </ReviewWrapper>
  );
}

export default Review
