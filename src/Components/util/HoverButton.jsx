import React, { useState } from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom'


const HoverBUtton = styled(Link)`
  position: relative;
  appearance: none;
  padding: 1em 3em;
  border: none;
  cursor: pointer;
  outline: none;
  border-radius: 100px;
  overflow: hidden;
  text-decoration: none;
  text-transform: uppercase;
  span {
    position: relative;
    pointer-events: none;
  }

  ::before {
    content: '';
    position: absolute;
    left: ${({ x }) => `${x}px`};
    top: ${({ y }) => `${y}px`};
    width: 0;
    height: 0;
    background: radial-gradient(circle closest-side, #5505f7, transparent);
    transform: translate(-50%, -50%);
    transition: width 0.2s ease, height 0.2s ease;
  }

  :hover::before {
    width: 200px;
    height: 200px;
  }
`;

const HoverButton = ({ Text, fontcolor = '#f72359', background="#fff" ,price,Link="/" }) => {
  const [x, setx] = useState(0);
  const [y, sety] = useState(0);

  const handlemove = (e) => {
    var x = e.clientX - e.target.offsetLeft;
    var y = e.clientY - e.target.offsetTop;
    setx(x);
    sety(y);
  };

  return (
    <HoverBUtton
      to={Link}
      onMouseMoveCapture={(e) => handlemove(e)}
      x={x}
      y={y}
      style={{
        color: fontcolor,
        backgroundColor: background,
      }}
    >
      <span
        style={{
          fontSize: price ? '26px' : '20px',
          fontWeight: price ? 'bold' : 'normal',
        }}
      >
        {Text}
      </span>
    </HoverBUtton>
  );
};

export default HoverButton
