import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Header, Main, Footer } from './layout';
import './App.css';
class App extends React.Component {
  render() {
    return (
      <Router>
        <>
          <Header className='header-layout' />
          <Main className='main-layout' />
          {}
        </>
      </Router>
    );
  }
}
export default App;
