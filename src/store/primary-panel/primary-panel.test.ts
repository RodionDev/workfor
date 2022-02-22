import { doPrimaryPanelChange, PrimaryPanelActionTypes, primaryPanelReducer } from '.';
test('doPrimaryPanelChage action creator return right action', () => {
  expect(doPrimaryPanelChange(1)).toEqual({
    type: PrimaryPanelActionTypes.PRIMARY_PANEL_CHANGE,
    payload: {
      tabId: 1
    }
  });
});
describe('primaryPanelReducer', () => {
  it('shoule return initial state', () => {
    expect(primaryPanelReducer(undefined, {type: ''})).toEqual({
      tabId: 0
    })
  });
  it('shoule handle PRIMARY_PANEL_CHANGE', () => {
    expect(primaryPanelReducer(undefined, doPrimaryPanelChange(2))).toEqual({
      tabId: 2
    })
  })
});
