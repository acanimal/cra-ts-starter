import * as React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import App from '../App';
import { Button } from '../components/Button';
import TicTacToeCell from '../components/TicTacToeCell';

const stories = storiesOf('App', module);

stories
  .add('default', () => <App />)
  .add('default 2', () => <App />);

const columnStories = storiesOf('Button', module);
columnStories
  .add(
    'default',
    () => <Button onClick={action('clicked')} prop2={2} prop3={() => {}} prop4={'option1'} />,
  );

storiesOf('Tic', module).add(
  "TicTacToeCell",
  () => (
    <TicTacToeCell
      value="X"
      position={{ x: 0, y: 0 }}
      onClick={action("onClick")}
    />
  )
);