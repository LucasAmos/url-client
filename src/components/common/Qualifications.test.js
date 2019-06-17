import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Qualifications from './Qualifications';

describe('Portfolio component', () => {
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
        <Qualifications />,
      ),
      div,
    );
    ReactDOM.unmountComponentAtNode(div);
  });
  it('matches the snapshot', () => {
    const tree = renderer.create(
      <Qualifications />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
