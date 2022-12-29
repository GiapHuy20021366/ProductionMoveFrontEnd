import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { paths } from "../../untils/constant";
import useCallApi from "../../untils/fetch";
import { apiUrls } from '../../untils/constant'
import { Redirect, useHistory } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import AgencyActions from './AgencyActions';
import { async } from "q";

const pagination = paginationFactory({
    page: 1,
    sizePerPage: 4,
    nextPageText: ">",
    prePageText: "<",
    alwaysShowAllBtns: false,
});

const ProductActions = ({ show, handleClose, rows, columns }) => {
    const subLang = useSelector(state => state.lang.ModelDisplay) // Language here
    const account = useSelector(state => state.user.account)
    const [action, setAction] = useState()

    // const getAuths = (product) => {
    //     const auths = {
    //         canExport: false,
    //         canReturnToCustomer: false,
    //         canStartRecall: false,
    //         canStartMaintain: false,
    //         canReturnToFactory: false
    //     }
    //     console.log(product)
    // }

    // if (rows.length > 0) {
    //     getAuths(rows[0])
    // }

    // const getActions = () => {

    // }

    const handleAction = async () => {
        if (action) {
            const result = await action()
            console.log(result)
        }
    }

    const regisAction = (action) => {
        setAction(action)
    }




    return (
        <>
            <Modal
                size="lg"
                show={show}
                onHide={handleClose}
            >
                <Modal.Header closeButton>
                    <Modal.Title>{'Title here'}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Các sản phẩm đã chọn
                    <BootstrapTable
                        keyField="id"
                        hover
                        data={rows}
                        columns={columns}
                        pagination={pagination}
                    />

                    {
                        account.role === 3 &&
                        <AgencyActions products={rows} regisAction={regisAction} />
                    }
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="primary">Hoan tat</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ProductActions




