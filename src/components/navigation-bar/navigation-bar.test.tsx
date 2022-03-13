import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import NavigationBarPresenter from './presenter/navigation-bar.presenter';
it('Navigation bar renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Router>
      <NavigationBarPresenter
       brandName='Vortex' 
       searchBarPlaceHolder='search'
       handleBrandClick={() => {console.log('test')}}
       handleKeySubmit={() => {console.log('test')}}
      />
    </Router>
    , div
  );
  ReactDOM.unmountComponentAtNode(div);
});
