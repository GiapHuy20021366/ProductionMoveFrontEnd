import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { paths } from "../../untils/constant";
import useCallApi from "../../untils/fetch";
import { apiUrls } from '../../untils/constant'
import { Redirect, useHistory } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const ProductActions = ({ show, handleClose, rows }) => {
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
                    Implement here
                    {
                        JSON.stringify(rows)
                    }
                </Modal.Body>
                <Modal.Footer>
                    Implement here
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ProductActions




