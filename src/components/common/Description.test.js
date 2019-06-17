import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Description from './Description';

describe('Description component', () => {
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
        <Description />,
      ),
      div,
    );
    ReactDOM.unmountComponentAtNode(div);
  });
  it('matches the snapshot', () => {
    const tree = renderer.create(
      <Description />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
