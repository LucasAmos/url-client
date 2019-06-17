import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import About from './About';

describe('About component', () => {
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
        <About />,
      ),
      div,
    );
    ReactDOM.unmountComponentAtNode(div);
  });
  it('matches the snapshot', () => {
    const tree = renderer.create(
      <About />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
