import React from "react";
import { Navigate, Route, Switch, useHistory, NavLink } from "react-router-dom";
import ToastUtil from "../../untils/toastUtil";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { paths } from "../../untils/constant";
import SystemNagivator from "../routes/SystemNavigator";
import SystemTopBar from "../sub_components/SystemTopBar";
import "../../js/sb-admin-2.min";
import "../../vendor/jquery/jquery.min";
import "../../vendor/bootstrap/js/bootstrap.bundle.min";
import "../../styles/sb-admin-2.min.css";
import "../../styles/font.css";
import Account from "./Account";
import HomeSystem from "./HomeSystem";
import AdminAccounts from "./AdminAccounts";
import AdminModels from "./AdminModels";
import AdminProducts from "./AdminProducts";

const System = (probs) => {
  // useEffect(() => {
  //   ToastUtil.success("Wellcome back", 1500);
  // }, []);
  return (
    <>
      <div id="page-top">
        <div id="wrapper">
          {/* Nagivator here */}
          <SystemNagivator />

          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
              {/* TopBar here */}
              <SystemTopBar />
              {/* Redirect depend on path */}
              <Switch>
                <Route exact path={paths.SYSTEM} component={HomeSystem} />
                <Route path={paths.ACCOUNT} component={Account} />
                <Route path={paths.ADMIN_ACCOUNTs} component={AdminAccounts} />
                <Route path={paths.ADMIN_MODELs} component={AdminModels} />
                <Route path={paths.ADMIN_PRODUCTs} component={AdminProducts} />
              </Switch>
            </div>
            {/* <footer className="sticky-footer bg-white">
              <div className="container my-auto">
                <div className="copyright text-center my-auto">
                  <span>Copyright &copy; Your Website 2021</span>
                </div>
              </div>
            </footer> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default System;
