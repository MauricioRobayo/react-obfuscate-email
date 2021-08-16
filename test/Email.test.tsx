import React from 'react';
import * as ReactDOM from 'react-dom';
import { Email } from '../src/index';

describe('Email', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Email email="test@example.com" />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
