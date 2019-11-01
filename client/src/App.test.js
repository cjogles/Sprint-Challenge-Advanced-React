import React from 'react';
import ReactDOM from 'react-dom';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import App from './App';
import Fifa from './components/Fifa'
import PlayerCardList from './components/PlayerCardList';
import Player from './components/Player';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('Fifa renders without crashing', () => {
  render(<Fifa />);
});

it('PlayerCardList renders without crashing', () => {
  render(<PlayerCardList />);
});

it('Player renders without crashing', () => {
  render(<Player />);
});

