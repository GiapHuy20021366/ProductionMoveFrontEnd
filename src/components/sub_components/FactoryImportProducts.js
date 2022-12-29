import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import '../../styles/AdminAddAccount.scss'
import ToastUtil from "../../untils/toastUtil";
import useCallApi from "../../untils/fetch";
import { apiUrls } from '../../untils/constant'
import { Button, Modal, Form, Col, Row } from "react-bootstrap";

const FactoryImportProducts = ({ handleResult, handleClose, show }) => {
    const subLang = useSelector(state => state.lang.FactoryImportProducts)
    const account = useSelector(state => state.user.account)

    const quantityRef = useRef()
    const modelNameRef = useRef()
    const birthRef = useRef()
    const stateRef = useRef()

    const [errorMessage, setErrorMessage] = useState('')

    const onClickSubmit = async (e) => {
        setErrorMessage('')
        const newProduct = {
            modelId: modelNameRef.current.value,
            birth: birthRef.current.value,
            quantity: quantityRef.current.value,
            state: stateRef.current.value,
        }

        const testAPI = () => {
            Promise.resolve(newProduct).then((data) => {
                modelNameRef.current.value = ''
                birthRef.current.value = ''
                quantityRef.current.value = ''
                stateRef.current.value = ''

                ToastUtil.success(subLang.import_success, 1000);
                handleClose && handleClose()
            }).catch((error) => {
                const messageResponse = error.response.data.message
                setErrorMessage(messageResponse)
            })
        }

        // await useCallApi(
        //     apiUrls.CREATE_PRODUCTS,
        //     newProduct
        // ).then((data) => {
        //     handleResult && handleResult({
        //         ...newProduct,
        //         id: data.data.id
        //     })

        //     quantityRef.current.value = ''
        //     modelNameRef.current.value = ''
        //     birthRef.current.value = ''
        //     stateRef.current.value = ''

        //     ToastUtil.success(subLang.import_success, 1000);
        //     handleClose && handleClose(e)
        //     // console.log(data)
        // }).catch((error) => {
        //     // console.log(error)
        //     const messageResponse = error.response.data.message
        //     setErrorMessage(messageResponse)
        // })

        testAPI()
    }

    const getRole = (roleId) => {
        switch (roleId) {
            case 1:
                return subLang.admin
            case 2:
                return subLang.factory
            case 3:
                return subLang.agency
            case 4:
                return subLang.maintain_center
            default:
                return subLang.unknown
        }
    }

    {
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();
    
        today = dd + '/' + mm + '/' + yyyy;
        console.log(today);
    }

    return (
        <Modal
            size="lg"
            show={show}
            onHide={handleClose}
        >
            <Modal.Header closeButton>
                <Modal.Title>{subLang.import_products}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group as={Row} className="mb-3" controlId="produced_factory">
                        <Form.Label column sm="4">{subLang.produced_factory}</Form.Label>
                        <Col sm="8">
                            <Form.Control plaintext readOnly defaultValue={account.name}/>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="model">
                        <Form.Label column sm="4">{subLang.model}</Form.Label>
                        <Col sm="8">
                            {/* <Form.Select aria-label="Default select example">
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select> */}
                            <Form.Control type="text" ref={modelNameRef}/>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="birth">
                        <Form.Label column sm="4">{subLang.birth}</Form.Label>
                        <Col sm="8">
                            <Form.Control type="date" ref={birthRef}/>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="quantity">
                        <Form.Label column sm="4">{subLang.quantity}</Form.Label>
                        <Col sm="8">
                            <Form.Control type="number" ref={quantityRef}/>
                        </Col>
                    </Form.Group>
                    {/* <Form.Group as={Row} className="mb-3" controlId="state">
                        <Form.Label column sm="4">{subLang.state}</Form.Label>
                        <Col sm="8">
                        <Form.Control plaintext readOnly defaultValue="Tồn kho"/>
                        </Col>
                    </Form.Group> */}
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cancel
                </Button>
                <Button variant="primary" onClick={onClickSubmit}>{subLang.submit}</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default FactoryImportProducts

