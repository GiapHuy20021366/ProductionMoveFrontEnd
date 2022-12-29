import React, { useEffect, useRef, useState } from "react";
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
import paginationFactory from "react-bootstrap-table2-paginator";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
import "react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css";
import { Button } from "react-bootstrap";

const TableBase = ({ isLoading, data, columns, title, rowEvents }) => {
  const [choose, setChoose] = useState(false)
  const [node, setNode] = useState(undefined)
  const [choosedRows, setChoosedRows] = useState([])
  const ref = useRef()
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

//   useEffect(() => {
//     console.log(choosedRows)
//   }, [choosedRows])


  const select = () => {
    console.log(choosedRows)
  }
  const selectRow = {
    mode: 'checkbox',
    // clickToSelect: true,
    onSelect: (row, isSelect, rowIndex, e) => {
      if (isSelect) {
        const isNotExist = choosedRows.every(rowc => rowc.id != row.id)
        if (isNotExist) {
          setChoosedRows([...choosedRows, row])
        }
      } else {
        setChoosedRows(choosedRows.filter((rowc) => rowc.id != row.id))
      }
    },
    onSelectAll: (isSelect, rows, e) => {
      const uniqueRows = {}
      rows.forEach(row => uniqueRows[row.id] = row)
      if (isSelect) {
        choosedRows.forEach(row => uniqueRows[row.id] = row)
        setChoosedRows(Object.values(uniqueRows))
      } else {
        setChoosedRows(choosedRows.filter(rowc => !uniqueRows[rowc.id]))
      }
    }
  }

  return (
    <div className="card shadow mb-4">
      <div className="card-header py-3">
        <h6 className="m-0 font-weight-bold text-primary">{title}</h6>
        <Button
          onClick={() => { select() }}
        >
          Select
        </Button>
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
            selectRow={selectRow}
            rowEvents={rowEvents}
            classes = "table-base"
          />
          {/* {
            choose && <BootstrapTable
              bootstrap4
              keyField="id"
              hover
              data={data}
              columns={columns}
              pagination={pagination}
              filter={filterFactory()}
              selectRow={selectRow}
              rowEvents={rowEvents}
            />
          }
          {
            !choose && <BootstrapTable
              bootstrap4
              keyField="id"
              hover
              data={data}
              columns={columns}
              pagination={pagination}
              filter={filterFactory()}
              rowEvents={rowEvents}
            />
          } */}
        </div>
      </div>
    </div>
  );
};

export default TableBase;

// const pagination = paginationFactory({
//   page: 1,
//   sizePerPage: 10,
//   nextPageText: ">",
//   prePageText: "<",
//   alwaysShowAllBtns: false,
// });
// export default class TableBase extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { rowCount: this.props.data.length };
//   }
//   handleDataChange = ({ dataSize }) => {
//     this.setState({ rowCount: dataSize });
//   };

//   render() {
//     return (
//       <div className="card shadow mb-4">
//         <div className="card-header py-3">
//           <h6 className="m-0 font-weight-bold text-primary">
//             {this.state.rowCount}
//           </h6>
//           <button
//             className="btn-primary"
//             onClick={() => {
//               console.log(this.node.selectionContext.selected);
//             }}
//             style={this.props.getBtn}
//           >
//             Get Current Selected Rows
//           </button>
//         </div>
//         <div className="card-body">
//           <div className="table-responsive">
//             {this.props.isLoading && <div>Loading...</div>}

//             <BootstrapTable
//               ref={(n) => (this.node = n)}
//               onDataSizeChange={this.handleDataChange}
//               bootstrap4
//               keyField="id"
//               hover
//               data={this.props.data}
//               columns={this.props.columns}
//               pagination={pagination}
//               filter={filterFactory()}
//               selectRow={{ mode: "checkbox", clickToSelect: true }}
//             // rowEvents={rowEvents}
//             />
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
