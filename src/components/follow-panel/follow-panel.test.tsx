import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { FollowPanel } from '..';
import FollowPanelPresenter from './presenter/follow-panel.presenter'
import { string } from 'prop-types';
it('StatusBar renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FollowPanelPresenter
    publicKey=''
    handleFollow={(userPublicKey:string)=>console.log(userPublicKey)}
    userCanFollow={[]}
    handleFollowConfirm={()=>{}}
  />, div);
  ReactDOM.unmountComponentAtNode(div);
});
