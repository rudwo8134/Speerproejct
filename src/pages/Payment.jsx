import React from 'react'
import Paymentcomponent from '../Components/Payment/paymentcomponent'

// redux
import { connect } from 'react-redux'
import { selectoptionvalue } from '../Redux/Paymnet/Payment.selector'
import { createStructuredSelector } from 'reselect'

const Payment = ({option}) => {
  return (
    <Paymentcomponent option={option}/>
  )
}

const mapStatetoprops = createStructuredSelector({
  option: selectoptionvalue
})

export default connect(mapStatetoprops)(Payment);
