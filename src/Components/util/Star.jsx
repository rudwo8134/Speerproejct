import React from 'react'
import { BsFillStarFill } from 'react-icons/bs';
import styled from 'styled-components';
import staticcss from '../../Staticcss';
const StarWrapper = styled.div`
`

const StarComponent = styled(BsFillStarFill)`
  font-size: ${staticcss.fontSize.Reviewstar};
  margin-left: 3px;
`

const Star = ({index}) => {
  return (
    <StarWrapper>
      {index === 1 ? (
        <StarComponent />
      ) : index === 2 ? (
        <>
          <StarComponent />
          <StarComponent />
        </>
      ) : index === 3 ? (
        <>
          <StarComponent />
          <StarComponent />
          <StarComponent />
        </>
      ) : index === 4 ? (
        <>
          <StarComponent />
          <StarComponent />
          <StarComponent />
          <StarComponent />
        </>
      ) : index === 5 ? (
        <>
          <StarComponent />
          <StarComponent />
          <StarComponent />
          <StarComponent />
          <StarComponent />
        </>
      ) : (
        <StarComponent />
      )}
    </StarWrapper>
  );
}

export default Star
