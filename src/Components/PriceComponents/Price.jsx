import React from 'react'
import styled from 'styled-components'
import staticcss from '../../Staticcss'
import Pricedata from './Pricedata';
import { BsMusicNoteBeamed } from 'react-icons/bs';
import HoverButton from '../util/HoverButton';




const PriceWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${staticcss.color.Pricebackground};
  @media screen and (max-width: 468px) {
    height: unset;
  }
`;
const ContentWrapper = styled.div`
  max-width: 1300px;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 468px) {
    height: unset;
  }
`;
const Headercontents = styled.div`
  @media screen and (max-width: 468px) {
    width: 100vw;
  }
  h1 {
    font-size: ${staticcss.fontSize.PriceMainHead};
    color: white;
    text-transform: uppercase;
    @media screen and (max-width: 468px) {
      font-size: ${staticcss.fontSize.mobilePriceMainHead};
      margin-top: 5rem;
      width: 100vw;
      text-align: center;
    }
  }
  span {
    font-size: ${staticcss.fontSize.PriceMainsub};
    color: white;
    font-weight: 300;
    @media screen and (max-width: 468px) {
      font-size: ${staticcss.fontSize.mobilePriceMainsub};
      display: flex;
      justify-content: center;
      align-items: center;
      text-align:center;
      width: 90vw;
      margin: 0 auto;
    }
  }
`;
const Cardcontents = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 1000px;
  margin: 0 auto;
  margin-top: 3rem;
  @media screen and (max-width: 468px) {
    width: 100vw;
    flex-direction: column;
  }
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  align-items: flex-start;
  @media screen and (max-width: 468px) {
    align-items: center;
  }
  button {
  }
  .title {
    margin: 0;
    font-size: ${staticcss.fontSize.Priceboxmain};
    text-transform: uppercase;
    color: ${({ name }) =>
      name === 'basic'
        ? `${staticcss.color.PriceColor1}`
        : name === 'Advanced'
        ? `${staticcss.color.PriceColor2}`
        : name === 'pro'
        ? `${staticcss.color.PriceColor3}`
        : 'white'};
  }
  .length {
    margin: 0;
    margin: 1rem 0;
    font-size: ${staticcss.fontSize.Priceboxsub};
    text-transform: uppercase;
    color: ${({ name }) =>
      name === 'basic'
        ? `${staticcss.color.PriceColor1}`
        : name === 'Advanced'
        ? `${staticcss.color.PriceColor2}`
        : name === 'pro'
        ? `${staticcss.color.PriceColor3}`
        : 'white'};
  }
  .price {
    margin: 0;
    margin-bottom: 1rem;
    font-size: ${staticcss.fontSize.Priceboxprice};
    color: ${({ name }) =>
      name === 'basic'
        ? `${staticcss.color.PriceColor1}`
        : name === 'Advanced'
        ? `${staticcss.color.PriceColor2}`
        : name === 'pro'
        ? `${staticcss.color.PriceColor3}`
        : 'white'};
  }
  .list {
    margin: 0;
    font-size: ${staticcss.fontSize.Priceboxlist};
    list-style: none;
    text-transform: capitalize;
    padding: 0;
    margin-bottom: 1.5rem;
    li {
      text-align: start;
      color: white;
      line-height: 40px;
    }
  }
`;
const Musicicons = styled(BsMusicNoteBeamed)`
  color: white;
  margin-right: 1rem;
`;
const Buttoncontainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 468px) {
    margin-bottom:5rem;
  }
`;

const Price = () => {
  return (
    <PriceWrapper>
      <ContentWrapper>
        <Headercontents>
          <h1>{Pricedata.Name}</h1>
          <span>{Pricedata.subtitle}</span>
        </Headercontents>
        <Cardcontents>
          {Pricedata.Card.map((data,index)=>{
            return (
              <CardContainer key={index} name={data.name}>
                <h3 className="title">{data.name}</h3>
                <h2 className="length">{data.length}</h2>
                <h1 className="price">${data.price}</h1>
                <ul className="list">
                  {data.options.map((list, ind) => {
                    return (
                      <li key={ind}>
                        <Musicicons />
                        {list}
                      </li>
                    );
                  })}
                </ul>
                <Buttoncontainer>
                  <HoverButton
                    select={data.select}
                    Text="Select"
                    Link="/payment"
                    price={true}
                    fontcolor="white"
                    background={
                      data.name === 'basic'
                        ? `${staticcss.color.PriceColor1}`
                        : data.name === 'Advanced'
                        ? `${staticcss.color.PriceColor2}`
                        : data.name === 'pro'
                        ? `${staticcss.color.PriceColor3}`
                        : 'white'
                    }
                  />
                </Buttoncontainer>
              </CardContainer>
            );
          })}

        </Cardcontents>
      </ContentWrapper>
    </PriceWrapper>
  )
}



export default Price;
