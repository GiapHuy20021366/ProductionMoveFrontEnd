import React, { Fragment } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from '../components/containers/Login';
import Home from '../components/containers/Home';


import '../styles/App.css';
import About from '../components/containers/About';

const App = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/check/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
