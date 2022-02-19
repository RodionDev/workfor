import { combineReducers } from 'redux';
import { primaryPanelReducer, PrimaryPanelState } from './primary-panel';
export interface ApplicationState {
  primaryPanel: PrimaryPanelState,
};
export const rootReducer = combineReducers<ApplicationState>({
  primaryPanel: primaryPanelReducer
});
