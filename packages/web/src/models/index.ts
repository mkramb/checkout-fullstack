import { FeedbackItem, decode } from '@feedback/server';

export * from './feedbackTrends';

export const isValidFeedback = (data: Partial<FeedbackItem>) => {
  try {
    decode(FeedbackItem, data);
    return true;
  } catch (e) {
    return false;
  }
};

export enum RequestState {
  None,
  Fetching,
  Failed,
}

export { FeedbackItem };
