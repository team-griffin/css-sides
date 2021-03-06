import cssLonghand from '@team-griffin/css-longhand';
import reduce from 'lodash.reduce';

export const Side = {
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
  [Side.A]: [ 0, 1, 2, 3 ],
  [Side.X]: [ 0, 2 ],
  [Side.Y]: [ 1, 3 ],
};

const cssSides = (prop, sides, value) => {
  return cssLonghand(prop, reduce(sidesMap[sides], (result, idx) => {
    return {
      ...result,
      [actualSides[idx]]: value,
    };
  }, {
  }));
};

export default cssSides;