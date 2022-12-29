import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { paths } from "../../untils/constant";
import useCallApi from "../../untils/fetch";
import { apiUrls } from '../../untils/constant'
import { Redirect, useHistory } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import TableBase from "../sub_components/Table";
import BootstrapTable from "react-bootstrap-table-next";

const ProductActions = ({ show, handleClose, rows, columns}) => {
    const subLang = useSelector(state => state.lang.ModelDisplay) // Language here


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
                    Implement Header
                    <BootstrapTable
                         bootstrap4
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




