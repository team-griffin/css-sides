# css-sides

`npm install @team-griffin/css-sides --save`

`yarn add @team-griffin/css-sides`

A css util to make doing multiple sides at once shorter.

## Usage

```jsx
import cssSides, { Side } from '@team-griffin/css-sides';

cssSides('margin', Side.A, 10);
///
{
  marginLeft: 10,
  marginTop: 10,
  marginRight: 10,
  marginBottom: 10,
}

cssSides('margin', Side.X, 10);
///
{
  marginLeft: 10,
  marginRight: 10,
}

cssSides('margin', Side.Y, 10);
{
  marginTop: 10,
  marginBottom: 10,
}

// Placing into a styles object

const styles = {
  ...cssSides('margin', Side.A, 10),
};
```