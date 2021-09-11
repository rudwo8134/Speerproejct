import PaymentActionTypes from "./Payment.type";

export const selectoption = (option) => ({
  type: PaymentActionTypes.SELEC_OPTION_START,
  payload:option
})