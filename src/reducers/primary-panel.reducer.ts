import { PRIMARY_PANEL_CHANGE } from '../actions';
const INITIAL_STATE = {
  tabId: 0
};
const applyPrimaryPanelChange = (state: any, {payload}: any) => ({
  ...payload
});
export default (state = INITIAL_STATE, action: any) => {
  switch(action.type) {
    case PRIMARY_PANEL_CHANGE: {
      return applyPrimaryPanelChange(state, action);
    }
    default: return state;
  }
}
