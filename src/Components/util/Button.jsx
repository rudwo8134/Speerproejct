import React from 'react'
import styled,{keyframes} from 'styled-components'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

const mix = keyframes`
0%{
  background-position: 0%;
}
100%{
   background-position: 400%;
}

`;

const Buttonlink = styled(Link)`
  width: 200px;
  height: 60px;
  position: absolute;
  text-align: center;
  line-height: 60px;
  color: #fff;
  font-size: 1.3rem;
  font-weight: bold;
  text-transform: uppercase;
  text-decoration: none;
  background: linear-gradient(90deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4);
  background-size: 400%;
  border-radius: 30px;
  animation: ${mix} 8s linear infinite;
  transition: all 1s ease-in-out;
  z-index: 3;
  :hover {
    transition: all 0.5s ease-in-out;
    animation: none;
    :before {
      filter: blur(20px);
      opacity: 1;
    }
  }
  :before {
    content: '';
    position: absolute;
    top: -5px;
    left: -5px;
    right: -5px;
    bottom: -5px;
    z-index: -1;
    background: linear-gradient(90deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4);
    background-size: 400%;
    border-radius: 30px;
    opacity: 0;
    transition: all 0.5s ease-in-out;
  }
`;
const Button = ({text}) => {
  return (
      <Buttonlink>{text}</Buttonlink>
  );
}

export default Button
