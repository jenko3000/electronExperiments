import React from 'react';
import RHLTest from '../containers/RHLTest';
import Introduction from './Introduction';
import Test from './Test';
import {hot} from 'react-hot-loader';

const App = () => (
  <div>
    <h2>React Hot Loader Quick Start</h2>
    <Introduction />
    <RHLTest />
    <Test />
  </div>
);

export default hot(module)(App);
