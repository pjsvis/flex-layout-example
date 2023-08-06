import * as React from 'react';
import * as ReactDOM from 'react-dom';

import AppAlt from './AppAlt';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <AppAlt />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
