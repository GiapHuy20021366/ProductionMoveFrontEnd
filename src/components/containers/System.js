import React from "react";
import { Navigate, Route, Switch, useHistory, NavLink } from "react-router-dom";
import ToastUtil from "../../untils/toastUtil";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { userLogout } from "../../store/slices/userSlices";
import { paths } from "../../untils/constant";
import "../../js/sb-admin-2.min";
import "../../vendor/jquery/jquery.min";
import "../../vendor/bootstrap/js/bootstrap.bundle.min";
import "../../styles/sb-admin-2.min.css";
import "../../styles/font.css";

const System = (probs) => {
  const history = useHistory();
  useEffect(() => {
    ToastUtil.success("Wellcome back", 1500);
  }, []);
  const dispatch = useDispatch();
  const onClickLogout = () => {
    history.push(paths.HOME);
    dispatch(userLogout());
  };
  return (
    <>
      <div id="page-top">
        <div id="wrapper">
          <ul
            className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
            id="accordionSidebar"
          >
            <a
              className="sidebar-brand d-flex align-items-center justify-content-center"
              href="index.html"
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

            <hr className="sidebar-divider my-0" />

            <li className="nav-item active">
              <a className="nav-link" href="index.html">
                <i className="fas fa-fw fa-tachometer-alt"></i>
                <span>Dashboard</span>
              </a>
            </li>

            <hr className="sidebar-divider" />

            <div className="sidebar-heading">Interface</div>

            <li className="nav-item">
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
            </li>

            <li className="nav-item">
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
            </li>

            <hr className="sidebar-divider" />

            <div className="sidebar-heading">Addons</div>

            <li className="nav-item">
              <a
                className="nav-link collapsed"
                href="#"
                data-toggle="collapse"
                data-target="#collapsePages"
                aria-expanded="true"
                aria-controls="collapsePages"
              >
                <i className="fas fa-fw fa-folder"></i>
                <span>Pages</span>
              </a>
              <div
                id="collapsePages"
                className="collapse"
                aria-labelledby="headingPages"
                data-parent="#accordionSidebar"
              >
                <div className="bg-white py-2 collapse-inner rounded">
                  <h6 className="collapse-header">Login Screens:</h6>
                  <a className="collapse-item" href="login.html">
                    Login
                  </a>
                  <a className="collapse-item" href="register.html">
                    Register
                  </a>
                  <a className="collapse-item" href="forgot-password.html">
                    Forgot Password
                  </a>
                  <div className="collapse-divider"></div>
                  <h6 className="collapse-header">Other Pages:</h6>
                  <a className="collapse-item" href="404.html">
                    404 Page
                  </a>
                  <a className="collapse-item" href="blank.html">
                    Blank Page
                  </a>
                </div>
              </div>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="charts.html">
                <i className="fas fa-fw fa-chart-area"></i>
                <span>Charts</span>
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="tables.html">
                <i className="fas fa-fw fa-table"></i>
                <span>Tables</span>
              </a>
            </li>

            <hr className="sidebar-divider d-none d-md-block" />

            <div className="text-center d-none d-md-inline">
              <button
                className="rounded-circle border-0"
                id="sidebarToggle"
              ></button>
            </div>
          </ul>

          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
              <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
                <ul className="navbar-nav ml-auto">
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
                        Douglas McGee
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
                        onClick={ () => {
                          onClickLogout();
                        }}
                      >
                        <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                        Logout
                      </a>
                    </div>
                  </li>
                </ul>
              </nav>

              <div className="container-fluid">
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                  <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
                </div>

                <div className="row">
                  <div className="col-xl-3 col-md-6 mb-4">
                    <div className="card border-left-primary shadow h-100 py-2">
                      <div className="card-body">
                        <div className="row no-gutters align-items-center">
                          <div className="col mr-2">
                            <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                              Earnings (Monthly)
                            </div>
                            <div className="h5 mb-0 font-weight-bold text-gray-800">
                              $40,000
                            </div>
                          </div>
                          <div className="col-auto">
                            <i className="fas fa-calendar fa-2x text-gray-300"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-xl-3 col-md-6 mb-4">
                    <div className="card border-left-success shadow h-100 py-2">
                      <div className="card-body">
                        <div className="row no-gutters align-items-center">
                          <div className="col mr-2">
                            <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                              Earnings (Annual)
                            </div>
                            <div className="h5 mb-0 font-weight-bold text-gray-800">
                              $215,000
                            </div>
                          </div>
                          <div className="col-auto">
                            <i className="fas fa-dollar-sign fa-2x text-gray-300"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-xl-3 col-md-6 mb-4">
                    <div className="card border-left-info shadow h-100 py-2">
                      <div className="card-body">
                        <div className="row no-gutters align-items-center">
                          <div className="col mr-2">
                            <div className="text-xs font-weight-bold text-info text-uppercase mb-1">
                              Tasks
                            </div>
                            <div className="row no-gutters align-items-center">
                              <div className="col-auto">
                                <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">
                                  50%
                                </div>
                              </div>
                              <div className="col">
                                <div className="progress progress-sm mr-2">
                                  <div
                                    className="progress-bar bg-info"
                                    role="progressbar"
                                    style={{ width: "50%" }}
                                    aria-valuenow="50"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                  ></div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-auto">
                            <i className="fas fa-clipboard-list fa-2x text-gray-300"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-xl-3 col-md-6 mb-4">
                    <div className="card border-left-warning shadow h-100 py-2">
                      <div className="card-body">
                        <div className="row no-gutters align-items-center">
                          <div className="col mr-2">
                            <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                              Pending Requests
                            </div>
                            <div className="h5 mb-0 font-weight-bold text-gray-800">
                              18
                            </div>
                          </div>
                          <div className="col-auto">
                            <i className="fas fa-comments fa-2x text-gray-300"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-xl-8 col-lg-7">
                    <div className="card shadow mb-4">
                      <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                        <h6 className="m-0 font-weight-bold text-primary">
                          Earnings Overview
                        </h6>
                        <div className="dropdown no-arrow">
                          <a
                            className="dropdown-toggle"
                            href="#"
                            role="button"
                            id="dropdownMenuLink"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                          </a>
                          <div
                            className="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                            aria-labelledby="dropdownMenuLink"
                          >
                            <div className="dropdown-header">
                              Dropdown Header:
                            </div>
                            <a className="dropdown-item" href="#">
                              Action
                            </a>
                            <a className="dropdown-item" href="#">
                              Another action
                            </a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">
                              Something else here
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="card-body">
                        <div className="chart-area">
                          <canvas id="myAreaChart"></canvas>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-xl-4 col-lg-5">
                    <div className="card shadow mb-4">
                      <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                        <h6 className="m-0 font-weight-bold text-primary">
                          Revenue Sources
                        </h6>
                        <div className="dropdown no-arrow">
                          <a
                            className="dropdown-toggle"
                            href="#"
                            role="button"
                            id="dropdownMenuLink"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                          </a>
                          <div
                            className="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                            aria-labelledby="dropdownMenuLink"
                          >
                            <div className="dropdown-header">
                              Dropdown Header:
                            </div>
                            <a className="dropdown-item" href="#">
                              Action
                            </a>
                            <a className="dropdown-item" href="#">
                              Another action
                            </a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">
                              Something else here
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="card-body">
                        <div className="chart-pie pt-4 pb-2">
                          <canvas id="myPieChart"></canvas>
                        </div>
                        <div className="mt-4 text-center small">
                          <span className="mr-2">
                            <i className="fas fa-circle text-primary"></i>{" "}
                            Direct
                          </span>
                          <span className="mr-2">
                            <i className="fas fa-circle text-success"></i>{" "}
                            Social
                          </span>
                          <span className="mr-2">
                            <i className="fas fa-circle text-info"></i> Referral
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-6 mb-4">
                    <div className="card shadow mb-4">
                      <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-primary">
                          Projects
                        </h6>
                      </div>
                      <div className="card-body">
                        <h4 className="small font-weight-bold">
                          Server Migration{" "}
                          <span className="float-right">20%</span>
                        </h4>
                        <div className="progress mb-4">
                          <div
                            className="progress-bar bg-danger"
                            role="progressbar"
                            style={{ width: "20%" }}
                            aria-valuenow="20"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                        <h4 className="small font-weight-bold">
                          Sales Tracking{" "}
                          <span className="float-right">40%</span>
                        </h4>
                        <div className="progress mb-4">
                          <div
                            className="progress-bar bg-warning"
                            role="progressbar"
                            style={{ width: "40%" }}
                            aria-valuenow="40"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                        <h4 className="small font-weight-bold">
                          Customer Database{" "}
                          <span className="float-right">60%</span>
                        </h4>
                        <div className="progress mb-4">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: "60%" }}
                            aria-valuenow="60"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                        <h4 className="small font-weight-bold">
                          Payout Details{" "}
                          <span className="float-right">80%</span>
                        </h4>
                        <div className="progress mb-4">
                          <div
                            className="progress-bar bg-info"
                            role="progressbar"
                            style={{ width: "80%" }}
                            aria-valuenow="80"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                        <h4 className="small font-weight-bold">
                          Account Setup{" "}
                          <span className="float-right">Complete!</span>
                        </h4>
                        <div className="progress">
                          <div
                            className="progress-bar bg-success"
                            role="progressbar"
                            style={{ width: "100%" }}
                            aria-valuenow="100"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-lg-6 mb-4">
                        <div className="card bg-primary text-white shadow">
                          <div className="card-body">
                            Primary
                            <div className="text-white-50 small">#4e73df</div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 mb-4">
                        <div className="card bg-success text-white shadow">
                          <div className="card-body">
                            Success
                            <div className="text-white-50 small">#1cc88a</div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 mb-4">
                        <div className="card bg-info text-white shadow">
                          <div className="card-body">
                            Info
                            <div className="text-white-50 small">#36b9cc</div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 mb-4">
                        <div className="card bg-warning text-white shadow">
                          <div className="card-body">
                            Warning
                            <div className="text-white-50 small">#f6c23e</div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 mb-4">
                        <div className="card bg-danger text-white shadow">
                          <div className="card-body">
                            Danger
                            <div className="text-white-50 small">#e74a3b</div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 mb-4">
                        <div className="card bg-secondary text-white shadow">
                          <div className="card-body">
                            Secondary
                            <div className="text-white-50 small">#858796</div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 mb-4">
                        <div className="card bg-light text-black shadow">
                          <div className="card-body">
                            Light
                            <div className="text-black-50 small">#f8f9fc</div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 mb-4">
                        <div className="card bg-dark text-white shadow">
                          <div className="card-body">
                            Dark
                            <div className="text-white-50 small">#5a5c69</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6 mb-4">
                    <div className="card shadow mb-4">
                      <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-primary">
                          Illustrations
                        </h6>
                      </div>
                      <div className="card-body">
                        <div className="text-center">
                          <img
                            className="img-fluid px-3 px-sm-4 mt-3 mb-4"
                            style={{ width: "25rem" }}
                            src="img/undraw_posting_photo.svg"
                            alt="..."
                          />
                        </div>
                        <p>
                          Add some quality, svg illustrations to your project
                          courtesy of{" "}
                          <a
                            target="_blank"
                            rel="nofollow"
                            href="https://undraw.co/"
                          >
                            unDraw
                          </a>
                          , a constantly updated collection of beautiful svg
                          images that you can use completely free and without
                          attribution!
                        </p>
                        <a
                          target="_blank"
                          rel="nofollow"
                          href="https://undraw.co/"
                        >
                          Browse Illustrations on unDraw &rarr;
                        </a>
                      </div>
                    </div>

                    <div className="card shadow mb-4">
                      <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-primary">
                          Development Approach
                        </h6>
                      </div>
                      <div className="card-body">
                        <p>
                          SB Admin 2 makes extensive use of Bootstrap 4 utility
                          classes in order to reduce CSS bloat and poor page
                          performance. Custom CSS classes are used to create
                          custom components and custom utility classes.
                        </p>
                        <p className="mb-0">
                          Before working with this theme, you should become
                          familiar with the Bootstrap framework, especially the
                          utility classNamees.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <footer className="sticky-footer bg-white">
              <div className="container my-auto">
                <div className="copyright text-center my-auto">
                  <span>Copyright &copy; Your Website 2021</span>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
};

export default System;
