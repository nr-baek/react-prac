import React from 'react';
import { Route } from 'react-router-dom';
// import Categories from './components/Categories';
// import axios from 'axios';
//a4cfe1e61f894d438a24d8be00504399
import NewsPage from './pages/NewsPage';

const App = () => {
  return <Route path="/:category?" component={NewsPage} />;
};

export default App;
