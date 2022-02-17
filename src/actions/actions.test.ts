import { doPrimaryPanelChange } from './primary-panel.action';
import { PRIMARY_PANEL_CHANGE } from '.';
test('doPrimaryPanelChange create right action', () => {
  expect(doPrimaryPanelChange(1)).toEqual({
    type: PRIMARY_PANEL_CHANGE,
    payload: {
      tabId: 1
    }
  });
})
