import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Email } from '../.';

const App = () => {
  return (
    <div>
      <Email email="test@example.com" />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
