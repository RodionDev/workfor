import { takeEvery, all } from 'redux-saga/effects';
import { UserActionTypes } from 'src/store/user';
import { handlePrivateKeySubmit } from './handler';
function *rootSaga() {
  yield all([
    takeEvery(UserActionTypes.PRIVATE_KEY_SUBMIT, handlePrivateKeySubmit)
  ]);
}
export default rootSaga;
