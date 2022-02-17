import primaryPanelReducer from './primary-panel.reducer';
import { combineReducers } from 'redux';
export default combineReducers({
  primaryPanelState: primaryPanelReducer
});
