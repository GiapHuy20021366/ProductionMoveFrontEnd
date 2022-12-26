import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import '../../styles/Dashboard.css'
import "../../js/sb-admin-2.min";
import "../../vendor/jquery/jquery.min";
import "../../vendor/bootstrap/js/bootstrap.bundle.min";
import "../../styles/sb-admin-2.min.css";
import "../../styles/font.css";
import LanguageChooser from "../sub_components/LanguageChooser";
import { useHistory } from "react-router";
import { paths } from "../../untils/constant";
import AdminNavigator from "./AdminNavigator";
import FactoryNavigator from "./FactoryNavigator";




const SystemNagivator = (probs) => {
  const subLang = useSelector(state => state.lang.SystemNagivator)
  const history = useHistory()
  const account = useSelector(state => state.user.account)

  const onClickHome = () => {
    history.push(paths.HOME)
  }

  const onClickHomeSystem = () => {
    history.push(paths.SYSTEM)
  }

  const onClickAccount = () => {
    history.push(paths.ACCOUNT)
  }

  return (
    <ul
      className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
      id="accordionSidebar"
    >
      <a
        className="sidebar-brand d-flex align-items-center justify-content-center pointer"
        onClick={() => onClickHome()}
      >
        <div className="sidebar-brand-icon ">
          <img
            src="./img/z3948374885974_77bdf19764ef16c7dd1237d9644e22a0.png"
            alt=""
            style={{ height: "35px" }}
          />
        </div>
        <div className="sidebar-brand-text mx-3">ProductMove</div>
      </a>

      {/* **************************************************************** */}
      <hr className="sidebar-divider" />
      <hr className="sidebar-divider my-0" />
      <div className="sidebar-heading">General</div>

      <li className={`nav-item ${history.location.pathname === paths.SYSTEM ? 'active' : ''}`}>
        <a className="nav-link pointer" onClick={() => onClickHomeSystem()}>
          <i className="fas fa-fw fa-tachometer-alt"></i>
          <span>{subLang.home}</span>
        </a>
      </li>

      <li className={`nav-item ${history.location.pathname === paths.ACCOUNT ? 'active' : ''}`}>
        <a className="nav-link pointer" onClick={() => onClickAccount()}>
          <i className="fas fa-fw fa-tachometer-alt"></i>
          <span>{subLang.account}</span>
        </a>
      </li>

      <LanguageChooser />

      <hr className="sidebar-divider" />

      {/* **************************************************************** */}
      {
        account?.role === 1 ?
          <AdminNavigator /> :
          <></>
      }

      {/* **************************************************************** */}
      {
        account?.role === 2 ?
          <FactoryNavigator /> :
          <></>
      }

      {/* **************************************************************** */}
      {
        account?.role === 3 ?
          <AgencyNavigator /> :
          <></>
      }

      {/* **************************************************************** */}
      {
        account?.role === 4 ?
          <MaintenanceCenterNavigator /> :
          <></>
      }


      {/* <div className="sidebar-heading">Menu</div> */}

      {/* <li className="nav-item">
        <a
          className="nav-link collapsed"
          href="#"
          data-toggle="collapse"
          data-target="#collapseTwo"
          aria-expanded="true"
          aria-controls="collapseTwo"
        >
          <i className="fas fa-fw fa-cog"></i>
          <span>Components</span>
        </a>
        <div
          id="collapseTwo"
          className="collapse"
          aria-labelledby="headingTwo"
          data-parent="#accordionSidebar"
        >
          <div className="bg-white py-2 collapse-inner rounded">
            <h6 className="collapse-header">Custom Components:</h6>
            <a className="collapse-item" href="buttons.html">
              Buttons
            </a>
            <a className="collapse-item" href="cards.html">
              Cards
            </a>
          </div>
        </div>
      </li> */}

      {/* <li className="nav-item">
        <a
          className="nav-link collapsed"
          href="#"
          data-toggle="collapse"
          data-target="#collapseUtilities"
          aria-expanded="true"
          aria-controls="collapseUtilities"
        >
          <i className="fas fa-fw fa-wrench"></i>
          <span>Utilities</span>
        </a>

        <div
          id="collapseUtilities"
          className="collapse"
          aria-labelledby="headingUtilities"
          data-parent="#accordionSidebar"
        >
          <div className="bg-white py-2 collapse-inner rounded">
            <h6 className="collapse-header">Custom Utilities:</h6>
            <a className="collapse-item" href="utilities-color.html">
              Colors
            </a>
            <a className="collapse-item" href="utilities-border.html">
              Borders
            </a>
            <a className="collapse-item" href="utilities-animation.html">
              Animations
            </a>
            <a className="collapse-item" href="utilities-other.html">
              Other
            </a>
          </div>
        </div>
      </li> */}
    </ul>
  );
};

export default SystemNagivator;
