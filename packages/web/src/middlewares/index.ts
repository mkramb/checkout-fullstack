import { combineEpics } from 'redux-observable';
import feedbackEpic from './feedback';
import feedbackListEpic from './feedbackList';
import feedbackTrendsEpic from './feedbackTrends';

export default combineEpics(feedbackEpic, feedbackListEpic, feedbackTrendsEpic);
