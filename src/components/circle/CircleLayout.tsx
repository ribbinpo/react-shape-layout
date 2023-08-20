import React from 'react';

import styles from './CircleLayout.module.css';
import { DEGREE_CIRCLE } from 'constants/circle.constant';
import { findCoordinate } from 'utils/circle.util';
import { degreeToRadian } from 'utils/angle.util';

export interface ICircleLayout {
  children: React.ReactNode;
  radius: number;
  animation?: boolean;
  delay?: number;
}

export const CircleLayout: React.FC<ICircleLayout> = (props) => {
  const { children, radius, animation = true, delay = 10 } = props;

  const childCount = React.Children.count(children);

  const layoutStyle = {
    '--width': `${radius * 2}px`,
    '--height': `${radius * 2}px`,
    '--delay': `${animation ? delay : 0}s`,
  } as React.CSSProperties;

  const rotatedChildren = React.Children.map(children, (child, index) => {
    const degree = (DEGREE_CIRCLE * index) / childCount;
    const radians = degreeToRadian(degree);
    const [x, y] = findCoordinate(radius, radians);

    const childStyle = {
      '--x': `calc(50% + ${x}px)`,
      '--y': `calc(50% - ${y}px)`,
      '--delay': `${animation ? delay : 0}s`,
    } as React.CSSProperties;

    return (
      <div style={childStyle} className={styles.child}>
        {child}
      </div>
    );
  });

  return (
    <div className={styles.layout} style={layoutStyle}>
      {rotatedChildren}
    </div>
  );
};
