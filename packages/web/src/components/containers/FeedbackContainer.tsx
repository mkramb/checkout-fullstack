import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { Feedback } from '../feedback/Feedback';
import { FeedbackItem } from '../../models';
import { ApplicationState } from '../../state';
import { feedbackPost } from '../../middlewares/feedback';

const mapStateToProps = (state: ApplicationState) => ({
  request: state.feedbackList.request,
});

const mapDispatchToProps = (dispatch: Dispatch<ReturnType<typeof feedbackPost>>) => ({
  submitFeedback: (item: FeedbackItem) => dispatch(feedbackPost(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Feedback);
