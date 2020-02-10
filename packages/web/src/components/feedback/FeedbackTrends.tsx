import React, { useEffect } from 'react';
import { ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { FeedbackTrendsChartItem, RequestState } from '../../models';

export const RATING_COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#FF0000'];

export interface FeedbackTrendsProps {
  readonly items: FeedbackTrendsChartItem[];
  readonly request: RequestState;
  readonly fetchItems: () => void;
}

export const FeedbackTrends = ({ items, fetchItems }: FeedbackTrendsProps) => {
  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div style={{ width: '100%', height: 400 }}>
      <ResponsiveContainer>
        <PieChart>
          <Pie dataKey="value" data={items} label={entry => entry.name}>
            {items.map((_, index) => (
              <Cell key={`cell-${index}`} fill={RATING_COLORS[index % RATING_COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};
