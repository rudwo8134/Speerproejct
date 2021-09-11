import { createSelector } from "reselect";

const SelectPaymnet = state => state.Payment

export const selectoptionvalue = createSelector(
  [SelectPaymnet],
  Payment => Payment.option
)