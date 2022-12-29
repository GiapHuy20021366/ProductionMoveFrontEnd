import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { paths } from "../../untils/constant";
import useCallApi from "../../untils/fetch";
import { apiUrls, roles } from '../../untils/constant'
import { Redirect, useHistory } from 'react-router-dom';
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import FactoryActions from './FactoryActions';
import AgencyActions from './AgencyActions';
import { async } from "q";
import { Button, Modal, Form, Col, Row } from "react-bootstrap";

const pagination = paginationFactory({
    page: 1,
    sizePerPage: 4,
    nextPageText: ">",
    prePageText: "<",
    alwaysShowAllBtns: false,
});

const ProductActions = ({ show, handleClose, rows, columns, onClickSubmit, subLang = useSelector(state => state.lang.ProductActions)}) => {
    const account = useSelector(state => state.user.account)
    if (account.role === roles.FACTORY) {
        subLang = useSelector(state => state.lang.FactoryActions)
    }
    if (account.role === roles.AGENCY) {
        subLang = useSelector(state => state.lang.AgencyActions)
    }

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
                    <Modal.Title>{'subLang.actions_title'}</Modal.Title>
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
                        account.role === roles.FACTORY &&
                        <FactoryActions products={rows} regisAction={regisAction} />
                    }
                    {
                        account.role === roles.AGENCY &&
                        <AgencyActions products={rows} regisAction={regisAction} />
                    }

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>{subLang.cancel}</Button>
                    <Button variant="primary" onClick={onClickSubmit}>{subLang.submit}</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ProductActions




