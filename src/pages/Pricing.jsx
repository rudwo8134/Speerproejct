import React from 'react'
import Perks from '../Components/Perks';
import Price from '../Components/PriceComponents/Price';

const Pricing = () => {
  return (
    <> 
      <Price/>
      <Perks Price={true}/>
    </>
  );
}

export default Pricing;
