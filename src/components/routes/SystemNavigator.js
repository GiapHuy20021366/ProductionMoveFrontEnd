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
            src="/logo.png"
            alt=""
            style={{ height: "35px" }}
          />
        </div>
        <div className="sidebar-brand-text mx-3">ProductMove</div>
      </a>

      {/* **************************************************************** */}
      <hr className="sidebar-divider" />
      <hr className="sidebar-divider my-0" />
      <div className="sidebar-heading">{subLang.system}</div>

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
    </ul>
  );
};

export default SystemNagivator;
