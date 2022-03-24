import * as React from 'react';
import * as ReactDOM from 'react-dom';
import FollowerList  from './presenter/follower-list.presenter';
it('FollowerList renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FollowerList followers={[]} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
