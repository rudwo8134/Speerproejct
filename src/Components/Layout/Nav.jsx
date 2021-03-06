import React,{useState} from 'react'
import styled,{keyframes} from 'styled-components'
import { GiHamburgerMenu, GiCancel } from 'react-icons/gi';
import NavData from './Navdata';
import { Link } from 'react-router-dom';


const mix = keyframes`
0%{
  background-position: 0%;
}
100%{
   background-position: 400%;
}`;

const NavWrapper = styled.div`
  position: fixed;
  z-index: 99;
  display: flex;
  align-items: center;
  top: 1rem;
  left: 2rem;
  transition: all 0.3s ease-in-out;

  @media screen and (max-width: 468px) {
    top: 0.5rem;
    left: 1rem;
  }
  .normal {
    position: fixed;
    margin: 0;
    top: 0;
    left: 0;
    justify-content: center;
    align-items: space-between;
    background-color: #5b78c7;
    height: 40vh;
    width: 40vw;
    flex-direction: column;
    transition: all 0.5s ease-in-out;
    clip-path: circle(400px at 10% -10%);
    opacity: 0;
    transform: translate(-50%, -50%) scale(0);
    pointer-events: none;
    display: flex;
    @media screen and (max-width: 468px) {
      height: 30vh;
      width: 40vw;
      clip-path: circle(250px at 10% -10%);
    }
  }
  .normal.open {
    opacity: 1;
    display: flex;
    transform: translate(0%, 0%) scale(1);
    pointer-events: all;
    @media screen and (max-width: 468px) {
      background: transparent;

    }
    :before {
      content: '';
      position: absolute;
      top: -30px;
      left: -30px;
      right: -30px;
      bottom: -30px;
      z-index: -1;
      background: linear-gradient(90deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4);
      background-size: 400%;
      border-radius: 30px;
      opacity: 1;
      transition: all 0.5s ease-in-out;
      animation: ${mix} 8s linear infinite;
      filter: blur(20px);
      transition: all 0.5s ease-in-out;
    }
  }
`;
const Hamberger = styled(GiHamburgerMenu)`
  color: black;
  font-size: 2rem;
  border-radius: 50%;
  background-color: white;
  padding: 0.5rem;

  @media screen and (max-width:468px){
    font-size: 1rem;
  }
`
const Logotext = styled.h1`
  color: #ffffff;
  margin-left: 1rem;
  font-size: 2.4rem;
  letter-spacing: 3px;
  line-height: 30px;
  background-color: transparent;
  @media screen and (max-width: 468px) {
    font-size: 1.4rem;
  }
`;
const NavLinks = styled.ul`
  @media screen and (max-width: 468px) {
    top: 0;
    left: 0;
    display: flex;
    justify-content: flex-start;
    align-items: space-between;
  }
  li {
    list-style: none;
    margin-top: 2rem;
    @media screen and (max-width: 468px) {
      margin-top: 1rem;
    }
  }
`;
const Cancelbutton = styled(GiCancel)`
  position: absolute;
  top: 3rem;
  left: 2rem;
  font-size: 2.5rem;
  color: white;
  @media screen and (max-width: 468px) {
    font-size: 1.5rem;
    top: 1rem;
    left: 1rem;
  }
`;
const LinkComponent = styled(Link)`
  color: white;
  text-transform: capitalize;
  font-size: 2rem;
  text-decoration: none;
  font-weight: bold;
  letter-spacing: 3px;
  @media screen and (max-width: 468px) {
    font-size: 1.2rem;
  }
`;
const HomeLink =styled(Link)`
  text-decoration: none;
`

const Nav = () => {
  const [open, setOpen] =useState(false)

  const handleClick=()=>{
    setOpen(!open)
  }
  return (
    <NavWrapper>
      <Hamberger onClick={handleClick} />
      <HomeLink to="/"><Logotext>EXP|CON</Logotext></HomeLink>
      <NavLinks className={open ? "normal open":"normal"} onMouseLeave={()=>setOpen(false)}>
        {NavData.map((link,index)=>{
          return(
            <li key={index} onClick={()=>setOpen(false)}><LinkComponent to={link.Link}>{link.name}</LinkComponent></li>
          )
        })}
        <Cancelbutton onClick={()=>setOpen(false)} />
      </NavLinks>
    </NavWrapper>
  );
}

export default Nav
