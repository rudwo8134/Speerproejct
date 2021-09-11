import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import PaymentReducer from "./Paymnet/Payment.reducer";

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['Payment'],
};

const rootReducer = combineReducers({
  Payment: PaymentReducer,
});

export default persistReducer(persistConfig, rootReducer)