import * as React from 'react';
import PostPresenter from './presenter/post.presenter';
import { ApplicationState } from '../../store';
import { connect } from 'react-redux';
const mapStateToProps = ({post, user}: ApplicationState) => ({
  posts: post.posts,
  image: user.image, 
  displayName: user.displayName
})
interface Props {
  posts: any[]
  image: any
  displayName: string
}
class Post extends React.Component<Props> {
  render() {
    const { posts, image, displayName } = this.props;
    return(
      <PostPresenter posts={posts} image={image} displayName={displayName}/>
    )
  }
}
export default connect(mapStateToProps)(Post);
