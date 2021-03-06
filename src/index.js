import React from 'react';
import ReactDOM from 'react-dom';

import MoviepinIco from './images/moviepin.ico';
import Styles from './styles/main.scss';
import Index from './index.html';

import MainLayout from './views/main-layout';

const render = (component) => {
  ReactDOM.render(
    component,
    document.getElementById('root')
  );
};

render(<MainLayout/>)
