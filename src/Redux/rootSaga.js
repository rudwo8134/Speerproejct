import {all,call} from 'redux-saga/effects'


export default function* rootSaga(){
  yield all[
    call()
  ]
}

// I just add to add the function. if company need the other requirement such as save the data on database.