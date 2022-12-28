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
import AccountInfo from "./AccountInfo";
import SystemHome from "./SystemHome";
import ModelDisplay from "./ModelDisplay";
import AdminAccounts from "./AdminAccounts";
import AdminModels from "./AdminModels";
import AdminProducts from "./AdminProducts";
import FactoryProducts from "./FactoryProducts";
import AgencyProducts from "./AgencyProducts";
import MaintenanceProducts from "./MaintenanceProducts";
import FactoryModels from "./FactoryModels";

const System = (probs) => {
  return (
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
                <Route exact path={paths.SYSTEM} component={SystemHome} />
                <Route path={paths.ACCOUNT} component={AccountInfo} />
                <Route path={paths.ADMIN_ACCOUNTS} component={AdminAccounts} />
                <Route path={paths.ADMIN_PRODUCTS} component={AdminProducts} />
                <Route path={paths.ADMIN_MODELS} >
                  <Route path={paths.ADMIN_MODELS_SHOW_ONE} component={ModelDisplay} />
                  <Route exact path={paths.ADMIN_MODELS} component={AdminModels} />
                </Route>
                <Route path={paths.FACTORY_MODELS} component={FactoryModels} />
                <Route path={paths.FACTORY_PRODUCTS} component={FactoryProducts} />
                <Route path={paths.AGENCY_PRODUCTS} component={AgencyProducts} />
                <Route path={paths.MAINTENANCE_PRODUCTS} component={MaintenanceProducts} />
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
  );
};

export default System;
