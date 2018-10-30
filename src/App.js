import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { PageRouter } from './route';

import 'semantic-ui-css/semantic.min.css';

const App = () => (
  <BrowserRouter>
    <PageRouter />
  </BrowserRouter>
)

export default App;
