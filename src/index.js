import cssLonghand from '@team-griffin/css-longhand';
import reduce from 'lodash.reduce';

export const Sides = {
  A: 'a',
  X: 'x',
  Y: 'y',
};

const actualSides = [
  'left',
  'top',
  'right',
  'bottom',
];

const sidesMap = {
  [Sides.A]: [0, 1, 2, 3],
  [Sides.X]: [0, 2],
  [Sides.Y]: [1, 3],
};

const cssSides = (prop, sides, value) => {
  return cssLonghand(prop, reduce(sidesMap, (result, idx) => {
    return {
      ...result,
      [actualSides[idx]]: value,
    };
  }, {}))
};

export default cssSides;