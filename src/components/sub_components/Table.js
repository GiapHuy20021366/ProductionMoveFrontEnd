import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import BootstrapTable from "react-bootstrap-table-next";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import "../../styles/Dashboard.css";
import "../../js/sb-admin-2.min";
import "../../vendor/jquery/jquery.min";
import "../../vendor/bootstrap/js/bootstrap.bundle.min";
import "../../styles/sb-admin-2.min.css";
import "../../styles/font.css";
import "../../vendor/datatables/dataTables.bootstrap4.min.css";
import { Redirect } from "react-router";
import { paths } from "../../untils/constant";
import axios from "../../axios";
import AccountCreater from "../sub_components/AccountCreater";
import Table from "../sub_components/Table";
import ToastUtil from "../../untils/toastUtil";
import paginationFactory from "react-bootstrap-table2-paginator";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
import "react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css";
import { Button } from "react-bootstrap";

const TableBase = ({ isLoading, data, columns, title }) => {
  let checkb = false;

  function Check() {
    if (checkb == true) {
      checkb = false;
    } else {
      checkb = true;
    }
    console.log(checkb)
  }

  const pagination = paginationFactory({
    page: 2,
    sizePerPage: 10,
    nextPageText: ">",
    prePageText: "<",
    alwaysShowAllBtns: false,
    // onPageChange: function (page, sizePerPage) {
    //   console.log('page', page);
    //   console.log('sizePerPage', sizePerPage);
    // },
    // onSizePerPageChange: function (page, sizePerPage) {
    //   console.log('page', page);
    //   console.log('sizePerPage', sizePerPage);
    // }
  });
  function addCheckbox() {
    if (checkb == true) {
      return { mode: 'checkbox', clickToSelect: true }
    } 
  }
  return (
    <div className="card shadow mb-4">
      <div className="card-header py-3">
        <h6 className="m-0 font-weight-bold text-primary">{title}</h6>
        <Button 
            onClick = {Check}
        >
            Select
        </Button>
        {/* selectRow={ { mode: 'checkbox', clickToSelect: true } } */}
      </div>
      <div className="card-body">
        <div className="table-responsive">
          {isLoading && <div>Loading...</div>}

          <BootstrapTable
            bootstrap4
            keyField="id"
            hover
            data={data}
            columns={columns}
            pagination={pagination}
            filter={filterFactory()}
            // selectRow = {addCheckbox()}
            selectRow={ { mode: 'checkbox', clickToSelect: true } }
          />
        </div>
      </div>
    </div>
  );
};

export default TableBase;
