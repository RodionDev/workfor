import * as React from 'react';
import PostPanelPresenter from './presenter/post-panel.presenter';
import { Dispatch } from 'redux';
import { doPostSubmit, PostAction } from '../../store/post';
import { connect } from 'react-redux';
import { ApplicationState } from '../../store';
const mapDispatchToProps = (dispatch: Dispatch) => ({
  onSubmit: (publicKey: string, content: string, privateKey: string) => dispatch(doPostSubmit(publicKey, content, privateKey))
});
const mapStateToProps = ({user}: ApplicationState) => ({
  publicKey: user.publicKey ? user.publicKey : '',
  privateKey: user.privateKey? user.privateKey: ''
})
interface Props {
  onSubmit: (publicKey: string, content: string, privateKey: string) => PostAction
  publicKey: string,
  privateKey: string
}
class PostPanel extends React.Component<Props> {
  onContentSubmit = (content: string) => {
    const { onSubmit, publicKey, privateKey } = this.props;
    onSubmit(publicKey, content, privateKey);
  }
  render() {
    return <PostPanelPresenter onContentSubmit = {this.onContentSubmit}/>
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostPanel);
