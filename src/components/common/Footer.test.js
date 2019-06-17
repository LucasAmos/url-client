import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Footer from './Footer';

describe('Footer component', () => {
  let savedError;
  beforeEach(() => {
    savedError = console.error;
    console.error = jest.fn();
  });

  afterEach(() => {
    console.error = savedError;
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      shallow(
        <Footer />,
      ),
      div,
    );
    ReactDOM.unmountComponentAtNode(div);
  });
  it('matches the snapshot', () => {
    const tree = renderer.create(
      <Footer />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
