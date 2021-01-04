import { Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ErrorBoundary } from 'react-error-boundary';

// pages
import Error from './pages/Error';
import Signin from './pages/Signin';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

// redux
import store, { history } from './redux/create';

function App() {
  return (
    <ErrorBoundary FallbackComponent={Error}>
      <Provider store={store}>
        <Router history={history}>
          <Switch>
            <Route path="/signin" component={Signin} />
            <Route path="/" exact component={Home} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </Provider>
    </ErrorBoundary>
  );
}

export default App;
