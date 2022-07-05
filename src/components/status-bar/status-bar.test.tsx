import * as React from 'react';
import * as ReactDOM from 'react-dom';
import StatusBarPresenter from './presenter/status-bar.presenter';
import { handleAccountSubmit } from 'src/sagas/handler';
const dummy = () => {};
it('StatusBar renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<StatusBarPresenter handleTabChange={dummy} handleAccountSubmit={account => console.log('test')} handlePayment={(account, amount) => console.log('test')}/> , div);
  ReactDOM.unmountComponentAtNode(div);
});
