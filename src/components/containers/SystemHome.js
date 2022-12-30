import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../../js/sb-admin-2.min";
import "../../vendor/jquery/jquery.min";
import "../../vendor/bootstrap/js/bootstrap.bundle.min";
import "../../styles/sb-admin-2.min.css";
import "../../styles/font.css";
import Chart from "../sub_components/homesystem/chart/Chart";
import Piee from "../sub_components/homesystem/PieChart";


const SystemHome = () => {
  const subLang = useSelector((state) => state.lang.SystemHome);
  return (
    <div className="container-fluid">
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">{subLang.home}</h1>
      </div>
      <div className="row">
          <Chart />
          <Piee />
      </div>
    </div>
  );
};

export default SystemHome;
