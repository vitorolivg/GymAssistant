/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

// added the below line for test passing
// accordingly to https://github.com/facebook/jest/issues/6434#issuecomment-525576660
jest.useFakeTimers()

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<App />);
});
