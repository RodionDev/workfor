import { Reducer, AnyAction } from 'redux';
import { PrimaryPanelState, PrimaryPanelActionTypes } from './types';
const initialState: PrimaryPanelState = {
  tabId: 0
};
const applyPrimaryPanelChange = (state: PrimaryPanelState, action: AnyAction) => {
  return {
    ...action.payload
  }
}
const reducer: Reducer<PrimaryPanelState> = (state = initialState, action) => {
  switch(action.type) {
    case PrimaryPanelActionTypes.PRIMARY_PANEL_CHANGE: {
      return applyPrimaryPanelChange(state, action);
    }
    default: return state;
  }
}
export {
  reducer as primaryPanelReducer
}
