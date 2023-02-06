/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';
import NYTimesArticles from '../Screens/NYTimesArticles';
import renderer from 'react-test-renderer';

// import NYTimesArticlesDetails from '../Screens/NYTimesArticleDetail';
// import { Header } from '../Components/Header';
test('renders correctly', () => {
  const tree = renderer.create(<NYTimesArticles />).toJSON();
  expect(tree).toMatchSnapshot();
});
