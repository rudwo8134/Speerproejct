import React from 'react'
import styled from 'styled-components'
import Footerdata from './Footer.Data';
import {MdEmail} from 'react-icons/md'

const Footerwrapeer = styled.footer`
  height: 35vh;
  width: 100vw;
  background: #5e33d1;
  @media screen and (max-width: 468px) {
    height: 30vh;
  }
`;
const ContentsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  max-width: 1300px;
  margin: 0 auto;
  height: 100%;
  color: white;
  h3 {
    align-self: flex-start;
    display: flex;
    align-items: center;
    font-size: 24px;
    font-weight: 700;
    @media screen and (max-width: 468px) {
      font-size: 14px;
      margin-left: 2rem;
    }
  }
  div {
    margin-top: 3rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    @media screen and (max-width: 468px) {
      margin-top: 0rem;
    }
    h1 {
      font-size: 40px;
      font-weight: bold;
    }
    span {
      @media screen and (max-width: 468px) {
        font-size: 10px;
      }
    }
  }
`;
const EmailLogo = styled(MdEmail)`
  font-size: 2rem;
  margin-right: 1rem;
`

const Footer = () => {
  return (
    <Footerwrapeer>
      <ContentsWrapper>
        <h3>
          <EmailLogo />
          {Footerdata.Email}
        </h3>
        <div>
          <h1>{Footerdata.Company}</h1>
          <span>{Footerdata.Copyright}</span>
        </div>
      </ContentsWrapper>
    </Footerwrapeer>
  );
}

export default Footer
