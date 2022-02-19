import { Action } from 'redux';
import { PrimaryPanelActionTypes } from './types';
export interface PrimaryPanelAction extends Action {
  payload: {
    tabId: number
  }
}
const doPrimaryPanelChange = (tabId: number): PrimaryPanelAction => ({
  type: PrimaryPanelActionTypes.PRIMARY_PANEL_CHANGE,
  payload: {
    tabId
  }
});
export {
  doPrimaryPanelChange
};
