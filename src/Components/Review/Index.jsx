import React from 'react'
import styled from 'styled-components'
import staticcss from '../../Staticcss'
import Button from '../util/Button';
import speaker1 from '../../Assets/smallspeaker1.png'
import speaker2 from '../../Assets/smallspeaker2.png';
import reviewdata from './reviewdata';
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
  width: 1300px;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 468px) {
    flex-direction: column;
    height: unset;
    justify-content: center;
    align-items: unset;

  }
`;
const Imagecontainer = styled.div`
  position: relative;
  width: 70%;
  height: 50%;
  @media screen and (max-width: 468px) {
    display:none;
  }
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
  @media screen and (max-width: 468px) {
  }


  .header {
    font-size: ${staticcss.fontSize.ReviewMainheader};
    color: white;
    text-transform: uppercase;
    text-align: start;
    @media screen and (max-width: 468px) {
      font-size: ${staticcss.fontSize.mobileReviewMainheader};
      margin-top:5rem;
    }
  }
`;
const ReviecontentswWrapper = styled.div`
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 468px) {
    flex-direction:column ;
  }
`;
const ReviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  @media screen and (max-width: 468px) {
    margin-bottom: 3rem;
  }

  h3 {
    font-size: ${staticcss.fontSize.Reviewsubtitle};
    color: white;
    text-transform: uppercase;
    font-weight: 700;
    @media screen and (max-width: 468px) {
      font-size: ${staticcss.fontSize.mobileReviewsubtitle};
    }
  }
  span {
    font-size: ${staticcss.fontSize.Reviewtext};
    text-transform: capitalize;
    font-weight: 300;
    text-align: start;
    @media screen and (max-width: 468px) {
      font-size: ${staticcss.fontSize.mobileReviewtext};
      width: 80vw;
      line-height: 1rem.5rem;
    }
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
