import * as React from 'react';
import PostPresenter from './presenter/post.presenter';
import { ApplicationState } from '../../store';
import { connect } from 'react-redux';
import { doPostReaction, PostAction, doPostComment, doPostViewComment, doPostFetch } from '../../store/post';
import { Dispatch } from 'redux';
const mapStateToProps = ({post, user}: ApplicationState) => ({
  posts: post.posts,
  image: user.image, 
  displayName: user.displayName,
  selectedPost: post.selectedPost
})
const mapDispatchToProps = (dispatch: Dispatch) => ({
  onReact: (post: any, reactContent: any) => dispatch(doPostReaction(post, reactContent)),
  onComment: (post: any, commentContent: any) => dispatch(doPostComment(post, commentContent)),
  onViewComment: (post: any) => dispatch(doPostViewComment(post)),
  onFetch: (publicKey: string) => dispatch(doPostFetch(publicKey))
})
interface Props {
  posts: any[]
  image: any
  displayName: string
  onReact: (post: any, reactContent: any) => PostAction
  onComment: (post: any,commentContent: any) => PostAction
  onViewComment: (post: any) => PostAction
  onFetch: (publicKey: string) => PostAction
  selectedPost: any
}
class Post extends React.Component<Props> {
  handleReact = (post: any, reactContent: any) => {
    const { onReact } = this.props;
    onReact(post, reactContent);
  }
  handleComment = (post: any, commentContent: any) => {
    const { onComment } = this.props;
    onComment(post, commentContent);
  }
  handleViewComment = (post: any) => {
    const { onViewComment } = this.props;
    onViewComment(post);
  }
  render() {
    const { posts, image, displayName, selectedPost } = this.props;
    return(
      <PostPresenter 
      posts={posts} 
      image={image} 
      displayName={displayName} 
      handleReact={this.handleReact} 
      handleComment={this.handleComment}
      handleViewComment={this.handleViewComment}
      selectedPost={selectedPost}
      />
    )
  }
  componentDidMount() {
    const { onFetch } = this.props;
    const publicKey = window.sessionStorage.getItem('publicKey');
    if (publicKey) {
      onFetch(publicKey);
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Post);
