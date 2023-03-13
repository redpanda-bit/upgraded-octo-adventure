/**
 * @format
 */

import 'react-native';
import React from 'react';
import App, {HomeScreen, DetailsScreen} from '../App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders App correctly', () => {
  renderer.create(<App />);
});

it('renders Home correctly', () => {
  const tree = renderer.create(<HomeScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders Details correctly', () => {
  const tree = renderer.create(<DetailsScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});
