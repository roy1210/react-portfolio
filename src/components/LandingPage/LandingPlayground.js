import React from 'react';
import { Tab } from 'semantic-ui-react';
import Profile from '../../img/Profile.jpg';
import LandingRollDice from './LandingRollDice/LandingRollDice';
import LandingCoinContainer from './LandingCoinContainer/LandingCoinContainer';

const panes = [
  {
    menuItem: 'RollDice',
    render: () => (
      <Tab.Pane>
        <LandingRollDice />
      </Tab.Pane>
    )
  },
  {
    menuItem: 'FlipCoin',
    render: () => (
      <Tab.Pane>
        <LandingCoinContainer />
      </Tab.Pane>
    )
  }
];

const playgroundTab = () => (
  <Tab menu={{ fluid: true, vertical: true, tabular: true }} panes={panes} />
);

const LandingPlayground = () => {
  return (
    <div id='Landing-f1_container'>
      <div id='Landing-f1_card' className='Landing-shadow'>
        <div className='front Landing-face'>
          <img src={Profile} alt='avatar' id='Landing-profile' />
        </div>
        <div className='back center Landing-face'>
          <h4>You got me!</h4>
          <div className='Landing-tabs'>{playgroundTab()}</div>
        </div>
      </div>
    </div>
  );
};

export default LandingPlayground;
