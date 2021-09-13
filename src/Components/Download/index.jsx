import React from 'react'
import styled from 'styled-components'
import staticcss from '../../Staticcss'
import Button from '../util/Button'
import DownloadData from './Download.data'

const DownloadWrapper = styled.div`
  width: 100vw;
  height: 65vh;
  background-color: ${staticcss.color.downloadbackground};
  @media screen and (max-width: 468px) {
    height: 70vh;
  }
`;
const ContentsWrapper = styled.div`
  max-width: 1300px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  @media screen and (max-width: 468px) {
    flex-direction: column;
  }
  .text {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    @media screen and (max-width: 468px) {
      margin-left: 2rem;
      align-items: center;
      justify-content: center;
      height: 100%;
    }

    h1 {
      font-size: ${staticcss.fontSize.downloadHeaderfont};
      color: ${staticcss.color.downloadHeader};
      margin: 0;
      @media screen and (max-width: 468px) {
        font-size: ${staticcss.fontSize.mobiledownloadHeaderfont};
      }
    }
    h3 {
      font-size: ${staticcss.fontSize.downloadsubfont};
      color: white;
      margin: 0;
      margin-top: 1rem;
      @media screen and (max-width: 468px) {
        font-size: ${staticcss.fontSize.mobiledownloadsubfont};
      }
    }
  }
  .button {
    margin-left: 15rem;
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 468px) {
      margin:3rem auto;
    }
  }
`;

const Download = () => {
  return (
    <DownloadWrapper>
      <ContentsWrapper>
        <div className="text">
          <h1>{DownloadData.Header}</h1>
          <h3>{DownloadData.subhead}</h3>
        </div>
        <div className="button">
          <Button text={DownloadData.Buttonlogo} big="true"/>
        </div>
      </ContentsWrapper>
    </DownloadWrapper>
  );
}

export default Download
