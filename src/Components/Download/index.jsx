import React from 'react'
import styled from 'styled-components'
import staticcss from '../../Staticcss'
import Button from '../util/Button'
import DownloadData from './Download.data'

const DownloadWrapper = styled.div`
  width: 100vw;
  height: 65vh;
  background-color: ${staticcss.color.downloadbackground};
`
const ContentsWrapper = styled.div`
  max-width: 1300px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  .text {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    h1 {
      font-size: ${staticcss.fontSize.downloadHeaderfont};
      color: ${staticcss.color.downloadHeader};
      margin: 0;
    }
    h3 {
      font-size: ${staticcss.fontSize.downloadsubfont};
      color: white;
      margin: 0;
      margin-top: 1rem;
    }
  }
  .button {
    margin-left: 15rem;
    display: flex;
    justify-content: center;
    align-items: center;
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
          <Button text={DownloadData.Buttonlogo} big={true}/>
        </div>
      </ContentsWrapper>
    </DownloadWrapper>
  );
}

export default Download
