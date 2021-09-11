import PaymentActionTypes from "./Payment.type";

const INITIAL_STATE = {
  option:null,
}

const PaymentReducer = (state = INITIAL_STATE, action) =>{
  switch(action.type){
    case PaymentActionTypes.SELEC_OPTION_START:
      return{
        ...state,
        option: action.payload,
      }
    default:
      return state;
  }
}

export default PaymentReducer;