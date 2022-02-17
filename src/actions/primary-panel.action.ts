import {
  PRIMARY_PANEL_CHANGE
} from '.';
const doPrimaryPanelChange = (tabId: number) => ({
  type: PRIMARY_PANEL_CHANGE,
  payload: {
    tabId,
  }
});
export {
  doPrimaryPanelChange
}
