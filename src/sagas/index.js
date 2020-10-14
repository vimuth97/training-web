import { take,put,call, all,fork,takeEvery, select } from 'redux-saga/effects';
import { requestData,requestDataError,requestDataSuccess,currentState } from '../actions';
import { databaseRef } from '../firebase_config'
 

  
 
 
//worker saga
function* fetchDairyCards() {
    try {
      
      yield put(requestData());
      const data = yield call(() => {
        
        return databaseRef.once('value').then( function(snapshot){
           return snapshot.val().Diarycards;
           });
        }
      );
      yield put(requestDataSuccess(data));
    } catch (error) {
      console.log(error);
      yield put(requestDataError());
    }
  }

 
function* add(){
  const state = yield select();
  yield put(currentState(state));
}

// watcher saga
export default function* rootSaga() {
    yield take('FETCH_DATA');
    yield call(fetchDairyCards);
    yield takeEvery('ADD_TODO',add);
    //yield take('GET_CURRENT_STATE');
    //yield call(getState);
  }


//export default function* rootSaga(){
//     yield takeEvery('Hello', workerSaga);
//     yield take('Login');
//     yield call(workerSaga);
//     yield take('Logout');
//     yield call(workerSaga);
// 
//}