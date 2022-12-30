import React, { useRef, useState } from "react";
import "../../../styles/sb-admin-2.min.css";
import { PieChart, Pie, ResponsiveContainer } from "recharts";
import { Chart } from "react-google-charts";

const Piee = () => {
  const data = [
    ["Đại lý", "Số lượng"],
    ["DL1", 11],
    ["DL2", 2],
    ["DL2", 2],
    ["DL2", 2],
    ["DL2", 7],
  ];

  const options = {
    title: "Doanh số",
  };
  return (
    <div class="col-xl-4 col-lg-5">
      <div class="card shadow mb-4">
        <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
          <h6 class="m-0 font-weight-bold text-primary">Revenue Sources</h6>
        </div>
        <div class="card-body">
          <div class="chart-pie pt-4 pb-2">
            <Chart
              chartType="PieChart"
              data={data}
              options={options}
              width={"500px"}
              height={"300px"}
            />
          </div>
          <div class="mt-4 text-center small">
            <span class="mr-2">
              <i class="fas fa-circle text-primary"></i> Direct
            </span>
            <span class="mr-2">
              <i class="fas fa-circle text-success"></i> Social
            </span>
            <span class="mr-2">
              <i class="fas fa-circle text-info"></i> Referral
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Piee;
