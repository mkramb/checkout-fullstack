export interface FeedbackTrends {
  readonly [index: number]: number;
}

export interface FeedbackTrendsChartItem {
  readonly name: string;
  readonly value: number;
}
