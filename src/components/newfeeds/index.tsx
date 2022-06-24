import * as React from 'react';
import NewfeedsPresenter from './presenter/newfeeds.presenter';
import { ApplicationState } from '../../store';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { doFetchNewfeeds, PostAction, doPostViewComment, doNewfeedReaction, doNewfeedComment } from '../../store/post';
const mapStateToProps = ({post}: ApplicationState) => ({
  feeds: post.feeds,
  selectedPost: post.selectedPost
})
const mapDispatchToProps = (dispatch: Dispatch) => ({
  onFetch: () => dispatch(doFetchNewfeeds()),
  onReact: (post: any, reactContent: any) => dispatch(doNewfeedReaction(post, reactContent)),
  onViewComment: (post: any) => dispatch(doPostViewComment(post)),
  onFeedComment: (feed: any, commentContent: any) => dispatch(doNewfeedComment(feed, commentContent))
})
interface Props {
  feeds: any[]
  onFetch: () => PostAction
  onReact: (post: any, reactContent: any) => PostAction
  onViewComment: (post: any) => PostAction
  onFeedComment: (feed: any, commentContent: any) => PostAction
  selectedPost: any
}
class Newfeeds extends React.Component<Props> {
  handleReact= (post: any, reactContent: any) => {
    const { onReact } = this.props;
    onReact(post, reactContent);
  }
  handleFeedComment = (feed: any, commentContent: any) => {
    const { onFeedComment } =  this.props;
    onFeedComment(feed, commentContent);
  }
  handleViewComment = (post: any) => {
    const { onViewComment } = this.props;
    onViewComment(post);
  }
  render() {
    const { feeds, selectedPost } = this.props;
    return <NewfeedsPresenter 
    newfeeds={feeds} 
    selectedPost={selectedPost}
    handleReact={this.handleReact}
    handleViewComment={this.handleViewComment}
    handleFeedComment={this.handleFeedComment}
    />
  }
  componentDidMount() {
    const { onFetch } = this.props;
    onFetch();
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Newfeeds);
