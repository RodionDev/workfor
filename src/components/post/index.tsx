import * as React from 'react';
import PostPresenter from './presenter/post.presenter';
import { ApplicationState } from '../../store';
import { connect } from 'react-redux';
import { doPostReaction, PostAction } from '../../store/post';
import { Dispatch } from 'redux';
const mapStateToProps = ({post, user}: ApplicationState) => ({
  posts: post.posts,
  image: user.image, 
  displayName: user.displayName
})
const mapDispatchToProps = (dispatch: Dispatch) => ({
  onReact: (post: any, reactContent: any) => dispatch(doPostReaction(post, reactContent))
})
interface Props {
  posts: any[]
  image: any
  displayName: string
  onReact: (post: any, reactContent: any) => PostAction
}
class Post extends React.Component<Props> {
  handleReact = (post: any, reactContent: any) => {
    const { onReact } = this.props;
    onReact(post, reactContent);
  }
  render() {
    const { posts, image, displayName } = this.props;
    return(
      <PostPresenter posts={posts} image={image} displayName={displayName} handleReact={this.handleReact}/>
    )
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Post);
