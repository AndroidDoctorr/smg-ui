import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import routes from './routes';
import Suppliers from './routes/Suppliers';

function App() {
  return (
    <Suppliers />
  );
  return (
    <Router>
      {/* This is to reduce the app to just suppliers until more routes become available */}
      {true ?
        <Route
          exact={true}
          path={'/'}
          key={'suppliers'}
          component={Suppliers}
        />
        :
        routes().map(route =>
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
