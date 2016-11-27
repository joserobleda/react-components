import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import Simulator from '../packages/simulator';

storiesOf('Simulator', module)
  .add('normal', () => (
    <Simulator />
  ));
