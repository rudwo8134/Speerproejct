import React from 'react'
import styled from 'styled-components'
import Button from '../util/Button';
import staticcss from '../../Staticcss';
import Perksdata from './Perks.data';

const PekrsWrapper = styled.div`
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
  background-color: ${staticcss.color.PerksBackground};
`;
const Buttoncontainer = styled.div`
  position: absolute;
  top: 2rem;
  right: 14rem;
`;
const ContentsWrapper = styled.div`
  max-width: 1300px;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 3rem;
`;

const ContentMainHeader = styled.h1`
  font-size: ${staticcss.fontSize.PerksmainHeader};
  text-transform: uppercase;
  text-align: start;
  color: white;
  margin-bottom: 5rem;
`;

const TextWrapper =styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

`
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 2rem;
`;

const Line = styled.div`
  border-bottom: 3px solid
    ${({ id }) =>
      id === 1
        ? `${staticcss.color.Perksmodel1}`
        : id === 2
        ? `${staticcss.color.Perksmodel2}`
        : id === 3
        ? `${staticcss.color.Perksmodel3}`
        : 'black'};
  width: 200px;
`;

const TextHead = styled.h1`
  font-size: ${staticcss.fontSize.PerksMaincontents};
  color: ${({ id }) =>
    id === 1
      ? `${staticcss.color.Perksmodel1}`
      : id === 2
      ? `${staticcss.color.Perksmodel2}`
      : id === 3
      ? `${staticcss.color.Perksmodel3}`
      : 'black'};
  text-align: start;
  font-weight: bold;
  width: 300px;
  
`;
const Textcontents = styled.span`
  font-size: ${staticcss.fontSize.PerksSubcontents};
  text-align: start;
  font-weight: 500;
  color: white;
  width: 450px;
`;


const Perks = () => {
  return (
    <PekrsWrapper>
      <Buttoncontainer>
        <Button text="TRT IT NOW" />
      </Buttoncontainer>
      <ContentsWrapper>
        <ContentMainHeader>{Perksdata.main}</ContentMainHeader>
        <TextWrapper>
          {Perksdata.sublist.map((data)=>{
            return(
              <TextContainer key={data.id}>
                <Line id={data.id}/>
                <TextHead id={data.id}>{data.subname}</TextHead>
                <Textcontents>{data.text}</Textcontents>
              </TextContainer>
            )
          })}
        </TextWrapper>
      </ContentsWrapper>
     
    </PekrsWrapper>
  )
}

export default Perks
