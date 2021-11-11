import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import UploadImage from './page/Page_UploadImage';
import Album from './page/Page_Album';
import Home from './page/Page_Home';
import App from './App';
import { BrowserRouter, Route } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <App/>
    <Route path="/" exact component={Home} />
    <Route path="/transfer" exact component={UploadImage} />
    <Route path="/album" component={Album} />
  </BrowserRouter>,
  document.getElementById('root')
);