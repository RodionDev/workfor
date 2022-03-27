import * as React from 'react';
import PostPanelPresenter from './presenter/post-panel.presenter';
class PostPanel extends React.Component {
  onContentSubmit = (content: string) => {
    console.log(content);
  }
  render() {
    return <PostPanelPresenter onContentSubmit = {this.onContentSubmit}/>
  }
}
export default PostPanel;
