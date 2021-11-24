import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { CoverImage } from '..';
it('CoverImage renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CoverImage  imageUrl='https:
  ReactDOM.unmountComponentAtNode(div);
});
