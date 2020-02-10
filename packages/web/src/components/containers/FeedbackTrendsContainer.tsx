import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { FeedbackTrends } from '../feedback/FeedbackTrends';
import { feedbackTrendsLoad } from '../../middlewares/feedbackTrends';
import { getTrendsChartItems } from '../../state/feedbackTrends';
import { ApplicationState } from '../../state';

const mapStateToProps = (state: ApplicationState) => ({
  request: state.feedbackTrends.request,
  items: getTrendsChartItems(state),
});

const mapDispatchToProps = (dispatch: Dispatch<ReturnType<typeof feedbackTrendsLoad>>) => ({
  fetchItems: () => dispatch(feedbackTrendsLoad()),
});

export default connect(mapStateToProps, mapDispatchToProps)(FeedbackTrends);
