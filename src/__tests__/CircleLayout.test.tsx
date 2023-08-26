import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import { CircleLayout } from '../components/circle/CircleLayout';

describe('running CircleLayout', () => {
  it('renders without errors', () => {
    const { container } = render(
      <CircleLayout radius={100}>
        <div>Child 1</div>
        <div>Child 2</div>
        <div>Child 3</div>
      </CircleLayout>
    );

    expect(container).toBeInTheDocument();
  });

  it('renders child components with correct positioning', () => {
    const { getByText } = render(
      <CircleLayout radius={100}>
        <div>Child 1</div>
        <div>Child 2</div>
        <div>Child 3</div>
      </CircleLayout>
    );

    const child1 = getByText('Child 1').parentElement;
    const child2 = getByText('Child 2').parentElement;
    const child3 = getByText('Child 3').parentElement;

    const xStyleChild1 = child1?.style.getPropertyValue('--x');
    const yStyleChild1 = child1?.style.getPropertyValue('--y');
    const xStyleChild2 = child2?.style.getPropertyValue('--x');
    const yStyleChild2 = child2?.style.getPropertyValue('--y');
    const xStyleChild3 = child3?.style.getPropertyValue('--x');
    const yStyleChild3 = child3?.style.getPropertyValue('--y');

    expect(xStyleChild1).toBe(`calc(50% + 100px)`);
    expect(yStyleChild1).toBe(`calc(50% - 0px)`);
    expect(xStyleChild2).toBe(`calc(50% + -50px)`);
    expect(yStyleChild2).toBe(`calc(50% - 86.6px)`);
    expect(xStyleChild3).toBe(`calc(50% + -50px)`);
    expect(yStyleChild3).toBe(`calc(50% - -86.6px)`);
  });

  it('applies animation properties if animation is enabled', () => {
    const { container } = render(
      <CircleLayout radius={100} animation={true} delay={10}>
        <div>Child 1</div>
      </CircleLayout>
    );

    expect(container.firstChild).toHaveStyle('--delay: 10s');
  });

  it('does not apply animation properties if animation is disabled', () => {
    const { container } = render(
      <CircleLayout radius={100} animation={false} delay={500}>
        <div>Child 1</div>
      </CircleLayout>
    );

    expect(container.firstChild).toHaveStyle('--delay: 0s');
  });
});
