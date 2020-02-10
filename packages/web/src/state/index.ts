import { combineReducers } from 'redux';
import feedback, { FeedbackState } from './feedback';
import feedbackList, { FeedbackListState } from './feedbackList';
import feedbackTrends, { FeedbackTrendsState } from './feedbackTrends';

export interface ApplicationState {
  feedback: FeedbackState;
  feedbackList: FeedbackListState;
  feedbackTrends: FeedbackTrendsState;
}

const rootReducer = combineReducers({
  feedback,
  feedbackList,
  feedbackTrends,
});

export default rootReducer;
