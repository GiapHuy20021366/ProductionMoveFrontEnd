import React, { useRef, useState } from "react";
import "../../../styles/sb-admin-2.min.css";
import { PieChart, Pie,ResponsiveContainer } from "recharts";



const Piee = () => {
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
  return (
      <div class="col-xl-4 col-lg-5">
        <div class="card shadow mb-4">
          <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
            <h6 class="m-0 font-weight-bold text-primary">Revenue Sources</h6>
          </div>
          <div class="card-body">
            <div class="chart-pie pt-4 pb-2">
            <ResponsiveContainer width="100%" aspect={2 / 1}>
              <PieChart width={300}height={100}>
                <Pie
                  data={data}
                  dataKey="total"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={125}
                  fill="#8884d8"
                />
              </PieChart>
              </ResponsiveContainer>
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
