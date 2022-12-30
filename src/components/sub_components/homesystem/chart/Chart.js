import "./chart.scss";
import "../../../../styles/sb-admin-2.min.css"

import React, { useRef, useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "01/2022", total: 1200 },
  { name: "02/2022", total: 3000 },
  { name: "03/2022", total: 1002 },
  { name: "04/2022", total: 900 },
  { name: "05/2022", total: 500 },
  { name: "06/2022", total: 3200 },
  { name: "07/2022", total: 1200 },
  { name: "08/2022", total: 2300 },
  { name: "09/2022", total: 1300 },
  { name: "10/2022", total: 1700 },
  { name: "112022", total: 200 },
  { name: "12/2022", total: 700 },
];

const Chart = () => {
  return (
    <div class="col-xl-8 col-lg-7">
      <div class="card shadow mb-4">
        <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
          <h6 class="m-0 font-weight-bold text-primary">Sales</h6>
          <div class="dropdown no-arrow">
            <a
              class="dropdown-toggle"
              href="#"
              role="button"
              id="dropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i class="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
            </a>
            <div
              class="dropdown-menu dropdown-menu-right shadow animated--fade-in"
              aria-labelledby="dropdownMenuLink"
            >
              <div class="dropdown-header">Dropdown Header:</div>
              <a class="dropdown-item" href="#">
                Action
              </a>
              <a class="dropdown-item" href="#">
                Another action
              </a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">
                Something else here
              </a>
            </div>
          </div>
        </div>
        <div class="card-body">
          <div class="chart-area">
            <ResponsiveContainer width="100%" aspect={4 / 1}>
              <AreaChart
                width={"100%"}
                height={"auto"}
                data={data}
                margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="name" />
                <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="total"
                  stroke="#8884d8"
                  fillOpacity={1}
                  fill="url(#total)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chart;
