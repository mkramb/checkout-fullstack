import React from 'react';
import { DashboardTitle, DashboardTitleProps } from './DashboardTitle';
import { shallow } from 'enzyme';

describe('DashboardTitle', () => {
  const renderComponent = (props: DashboardTitleProps) => {
    return shallow(<DashboardTitle {...props} />);
  };

  it('should pass', () => {
    expect(renderComponent({ title: 'Feedback Dashboard' })).toMatchSnapshot();
  });
});
