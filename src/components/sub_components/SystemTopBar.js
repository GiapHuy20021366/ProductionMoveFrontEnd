import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../../styles/Dashboard.css";
import "../../js/sb-admin-2.min";
import "../../vendor/jquery/jquery.min";
import "../../vendor/bootstrap/js/bootstrap.bundle.min";
import "../../styles/sb-admin-2.min.css";
import "../../styles/font.css";
import { useHistory } from "react-router-dom";
import { FaBell } from 'react-icons/fa';
import { FaFileAlt } from 'react-icons/fa';
import { TbNotification } from "react-icons/tb";

import { paths } from "../../untils/constant";
import { userLogout } from "../../store/slices/userSlices";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SystemTopBar = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const subLang = useSelector((state) => state.lang.SystemTopBar);
  const onClickLogout = () => {
    history.push(paths.HOME);
    dispatch(userLogout());
  };
  const onClickAccount = () => {
    history.push(paths.ACCOUNT);
  };
  const account = useSelector((state) => state.user.account);
  return (
    <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
      <ul className="navbar-nav ml-auto">
        <li class="nav-item dropdown no-arrow mx-1">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="alertsDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i className="fas fa-fw fa-bell"></i>
            <span class="badge badge-danger badge-counter">3+</span>
          </a>
          <div
            class="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
            aria-labelledby="alertsDropdown"
          >
            <h6 class="dropdown-header">Alerts Center</h6>
            <a class="dropdown-item d-flex align-items-center" href="#">
              <div class="mr-3">
                <div class="icon-circle bg-primary">
                  <TbNotification/>
                </div>
              </div>
              <div>
                <div class="small text-gray-500">December 12, 2019</div>
                <span class="font-weight-bold">
                  A new monthly report is ready to download!
                </span>
              </div>
            </a>
            <a class="dropdown-item d-flex align-items-center" href="#">
              <div class="mr-3">
                <div class="icon-circle bg-success">
                  <i class="fas fa-donate text-white"></i>
                </div>
              </div>
              <div>
                <div class="small text-gray-500">December 7, 2019</div>
                $290.29 has been deposited into your account!
              </div>
            </a>
            <a class="dropdown-item d-flex align-items-center" href="#">
              <div class="mr-3">
                <div class="icon-circle bg-warning">
                  <i class="fas fa-exclamation-triangle text-white"></i>
                </div>
              </div>
              <div>
                <div class="small text-gray-500">December 2, 2019</div>
                Spending Alert: We've noticed unusually high spending for your
                account.
              </div>
            </a>
            <a class="dropdown-item text-center small text-gray-500" href="#">
              Show All Alerts
            </a>
          </div>
        </li>
        <div className="topbar-divider d-none d-sm-block"></div>

        <li className="nav-item dropdown no-arrow">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            id="userDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <span className="mr-2 d-none d-lg-inline text-gray-600 small">
              {account.name}
            </span>
            <img
              className="img-profile rounded-circle"
              src="img/undraw_profile.svg"
            />
          </a>
          <div
            className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
            aria-labelledby="userDropdown"
          >
            <a
              className="dropdown-item"
              href="#"
              data-toggle="modal"
              onClick={() => {
                onClickAccount();
              }}
            >
              <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
              {subLang.account}
            </a>

            <a
              className="dropdown-item"
              href="#"
              data-toggle="modal"
              onClick={() => {
                onClickLogout();
              }}
            >
              <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
              {subLang.logout}
            </a>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default SystemTopBar;
