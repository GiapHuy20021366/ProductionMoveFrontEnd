import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { paths } from "../../untils/constant";
import useCallApi from "../../untils/fetch";
import { apiUrls } from '../../untils/constant'
import { Redirect, useHistory } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import BootstrapTable from "react-bootstrap-table-next";

const ProductActions = ({ show, handleClose, rows, columns }) => {
    const subLang = useSelector(state => state.lang.ModelDisplay) // Language here


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

    const getActions = () => {

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
                    Implement Here
                    <BootstrapTable
                        keyField="id"
                        hover
                        data={rows}
                        columns={columns}
                    />
                </Modal.Body>
                <Modal.Footer>
                    Implement here
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ProductActions




