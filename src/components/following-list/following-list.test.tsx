import * as React from 'react';
import * as ReactDOM from 'react-dom';
import FollowingListPresenter  from './presenter/following-list.presenter';
it('FollowerList renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FollowingListPresenter followings={[]} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
