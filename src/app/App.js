import React, { Fragment, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Login from '../components/containers/Login';
import Home from '../components/containers/Home';
import '../styles/App.scss';
import { paths } from '../untils/constant';
import { userIsAuthenticated, userIsNotAuthenticated } from '../components/hoc/authentication'
import System from '../components/containers/System';
import { updateToken } from './../untils/authenticate';
import { toast, ToastContainer } from 'react-toastify';
import ToastUtil from '../untils/toastUtil';
import 'react-toastify/dist/ReactToastify.css';
import { connectServer } from '../socket';
import { useRef } from 'react';
const App = () => {
  const socket = useRef()
  useEffect(async () => {
    const auth = await updateToken()
    if (auth) {
      socket.current = connectServer()
    }
    console.log("Render")
  }, [])

  return (
    <Fragment>
      <BrowserRouter>
        <Switch>
          <Route exact path={paths.HOME} component={Home} />
          <Route path={paths.LOGIN} component={userIsNotAuthenticated(Login)} />
          <Route path={paths.SYSTEM} component={userIsAuthenticated(System)} />
        </Switch>
      </BrowserRouter>
      <ToastContainer />
    </Fragment>
  );
}

export default App;
