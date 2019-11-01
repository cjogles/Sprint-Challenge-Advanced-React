import React from 'react';
import ReactDOM from 'react-dom';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import App from './App';
import Fifa from './components/Fifa'
import PlayerCardList from './components/PlayerCardList';
import Player from './components/Player';

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('Fifa renders without crashing', () => {
  render(<Fifa />);
});

test('PlayerCardList renders without crashing', () => {
  render(<PlayerCardList />);
});

test('Player renders without crashing', () => {
  render(<Player />);
});

test("LocaleStorage is working without crashing", () => {
  const {getTestById} = render(<App/>);
  fireEvent.click(getEventById(dark-btn));
})

