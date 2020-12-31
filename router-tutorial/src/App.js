import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
// import Profile from './components/Profile';
import Profiles from './components/Profiles';
import HistorySample from './components/HistorySample';

const App = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
        <li>
          <Link to="/profiles">프로필</Link>
        </li>
        <li>
          <Link to="/history">History Example</Link>
        </li>
      </ul>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path={['/about', '/info']} component={About} />
        {/* <Route path="/profile/:username" component={Profile} /> */}
        <Route path="/profiles" component={Profiles} />
        <Route path="/history" component={HistorySample} />
        <Route
          render={({ location }) => (
            <div>
              <h2>이 페이지는 존재하지 않습니다:</h2>
              <p>{location.pathname}</p>
            </div>
          )}
        />
      </Switch>
    </div>
  );
};

export default App;
