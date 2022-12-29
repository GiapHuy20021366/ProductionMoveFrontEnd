import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { paths } from "../../untils/constant";
import useCallApi from "../../untils/fetch";
import { apiUrls } from '../../untils/constant'
import { Redirect, useHistory } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import TableBase from "../sub_components/Table";
import Table from 'react-bootstrap/Table';

const ProductActions = ({ show, handleClose, rows }) => {
    const subLang = useSelector(state => state.lang.AdminProducts) // Language here
    const resources = useSelector(state => state.resources)
    const tableColumns = [
        { dataField: 'id', text: 'Id' },
        { dataField: 'modelName', text: subLang.model },
        { dataField: 'factoryName', text: subLang.produced_factory },
        { dataField: 'birth', text: subLang.birth },
        { dataField: 'location', text: subLang.location }
    ]


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


                </Modal.Body>
                <Modal.Footer>
                    Implement here
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ProductActions




