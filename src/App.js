import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import routes from './routes';

function App() {
  return (
    <Router>
      {routes().map(route =>
        <Route
          exact={route.pathname === '/'}
          path={route.pathname}
          key={route.id}
          component={route.component}
        />
      )}
    </Router>
  );
}

export default App;
