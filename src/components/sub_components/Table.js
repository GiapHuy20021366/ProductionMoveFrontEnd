import React from "react";
import BootstrapTable from 'react-bootstrap-table-next';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import '../../styles/Dashboard.css'
import "../../js/sb-admin-2.min";
import "../../vendor/jquery/jquery.min";
import "../../vendor/bootstrap/js/bootstrap.bundle.min";
import "../../styles/sb-admin-2.min.css";
import "../../styles/font.css";
import "../../vendor/datatables/dataTables.bootstrap4.min.css";
import paginationFactory from 'react-bootstrap-table2-paginator';



const TableBase = ({ isLoading, data, columns, title, rowEvents }) => {

    const pagination = paginationFactory({
        page: 2,
        sizePerPage: 10,
        nextPageText: '>',
        prePageText: '<',
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
    return (
        <div className="card shadow mb-4">
            <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">{title}</h6>
            </div>
            <div className="card-body">
                <div className="table-responsive">
                    {isLoading && <div>Loading...</div>}

                    <BootstrapTable
                        keyField="id"
                        hover
                        data={data}
                        columns={columns}
                        pagination={pagination}
                        rowEvents={rowEvents}
                    />
                </div>
            </div>
        </div>
    );
};

export default TableBase