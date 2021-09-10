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
  height: ${({ Price }) => (Price ? '65vh' : '100vh')};
  background: #1d1f20;
  text-align: center;
  overflow: hidden;
  background-color: ${({ Price }) =>
    Price ? '#D34848' : `${staticcss.color.PerksBackground}`};
`;
const Buttoncontainer = styled.div`
  position: absolute;
  top: 2rem;
  right: 14rem;
`;
const ContentsWrapper = styled.div`
  max-width: 1300px;
  height: ${({ Price }) => (Price ? '65vh' : '100%')};
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 3rem;
`;

const ContentMainHeader = styled.h1`
  text-transform: uppercase;
  text-align: start;
  color: white;
  margin-bottom: ${({ Price }) =>
    Price ? '40px' : `5rem`};
  font-size: ${({ Price }) =>
    Price ? '50px' : `${staticcss.fontSize.PerksmainHeader}`}; 
`;

const TextWrapper =styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

`
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: ${({ Price }) => (Price ? '12rem' : `2rem`)};
  margin-bottom: ${({ Price }) => (Price ? '5rem' : `2rem`)};
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
  font-size: ${({ Price }) =>
    Price ? '45px' : `${staticcss.fontSize.PerksMaincontents}`}; ;;
`;
const Textcontents = styled.span`
  font-size: ${staticcss.fontSize.PerksSubcontents};
  text-align: start;
  font-weight: 500;
  color: white;
  width: ${({ Price }) =>
    Price ? '300px' : `450px`};
  font-size: ${({ Price }) =>
    Price ? '28px' : `${staticcss.fontSize.PerksSubcontents}`};
`;


const Perks = ({Price}) => {
  return (
    <PekrsWrapper Price={Price}>
      {Price ? (
        ''
      ) : (
        <Buttoncontainer>
          <Button text="TRT IT NOW" />
        </Buttoncontainer>
      )}
      <ContentsWrapper>
        <ContentMainHeader Price={Price}>{Perksdata.main}</ContentMainHeader>
        <TextWrapper>
          {Perksdata.sublist.map((data) => {
            return (
              <TextContainer Price={Price} key={data.id}>
                <Line
                  id={data.id}
                  style={{ borderBottom: Price && '3px solid white' }}
                />
                <TextHead
                  Price={Price}
                  id={data.id}
                  style={{ color: Price && 'white' }}
                >
                  {data.subname}
                </TextHead>
                <Textcontents style={{ color: Price && 'black' }} Price={Price}>
                  {data.text}
                </Textcontents>
              </TextContainer>
            );
          })}
        </TextWrapper>
      </ContentsWrapper>
    </PekrsWrapper>
  );
}

export default Perks
