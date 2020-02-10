import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { feedbackListLoad } from '../../middlewares/feedbackList';
import { FeedbackItem, RequestState } from '../../models';
import { FeedbackList } from '../feedback/FeedbackList';
import { ApplicationState } from '../../state';

export interface FeedbackListProps {
  readonly items: FeedbackItem[];
  readonly request: RequestState;
  readonly fetchItems: () => void;
}

const mapStateToProps = (state: ApplicationState) => ({
  request: state.feedbackList.request,
  items: state.feedbackList.data,
});

const mapDispatchToProps = (dispatch: Dispatch<ReturnType<typeof feedbackListLoad>>) => ({
  fetchItems: () => dispatch(feedbackListLoad()),
});

export default connect(mapStateToProps, mapDispatchToProps)(FeedbackList);
