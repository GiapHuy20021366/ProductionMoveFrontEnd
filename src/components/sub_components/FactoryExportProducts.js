import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import '../../styles/AdminAddAccount.scss'
import ToastUtil from "../../untils/toastUtil";
import useCallApi from "../../untils/fetch";
import { apiUrls } from '../../untils/constant'
import { Button, Modal, Form, Col, Row } from "react-bootstrap";

const FactoryExportProducts = ({ handleResult, handleClose, show }) => {
    const subLang = useSelector(state => state.lang.FactoryExportProducts)
    const account = useSelector(state => state.user.account)
    const listAgencies = useSelector(state => state.resources.holders.agencies)
    console.log("Agencies")
    console.log(listAgencies)

    const quantityRef = useRef()
    const modelIdRef = useRef()
    const birthRef = useRef()
    
    const agencyIdRef = useRef()

    const [errorMsgCreateProducts, setErrorMsgCreateProducts] = useState('')
    const [errorMsgGetModels, setErrorMsgGetModels] = useState('')

    // *** call API to export products
    const onClickSubmit = async (e) => {
        setErrorMsgCreateProducts('')
        const quantity = quantityRef.current.value
        const newProduct = {
            modelId: modelIdRef.current.value,
            birth: birthRef.current.value,
        }
        let listNewProducts = []
        for (let i = 0; i < quantity; i++) {
            listNewProducts.push(newProduct)
        }

        // const testAPI = () => {
        //     Promise.resolve(listNewProducts).then((data) => {
        //         modelIdRef.current.value = ''
        //         birthRef.current.value = ''

        //         ToastUtil.success(subLang.import_success, 1000);
        //         handleClose && handleClose()
        //     }).catch((error) => {
        //         const messageResponse = error.response.data.message
        //         setErrorMessage(messageResponse)
        //     })
        // }
        // console.log(modelIdRef.current)

        await useCallApi(
            apiUrls.CREATE_PRODUCTS,
            {
                products: listNewProducts
            }
        ).then((data) => {
            handleResult && handleResult({
                ...listNewProducts,
            })

            modelIdRef.current.value = ''
            birthRef.current.value = ''

            ToastUtil.success(subLang.import_success, 1000);
            handleClose && handleClose(e)
            // console.log(data)
        }).catch((error) => {
            console.log(error)
            const messageResponse = error.response.data.message
            setErrorMsgCreateProducts(messageResponse)
        })

        // testAPI()
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
                <Modal.Title>{subLang.export_products}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group as={Row} className="mb-3" controlId="produced_factory">
                        <Form.Label column sm="4">{subLang.produced_factory}</Form.Label>
                        <Col sm="8">
                            <Form.Control plaintext readOnly defaultValue={account.name}/>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="agency">
                        <Form.Label column sm="4">{subLang.destination_agency}</Form.Label>
                        <Col sm="8">
                            <Form.Select>
                                {listAgencies.map(agency => (
                                    <option ref={agencyIdRef} value={agency.id} key={agency.id}>
                                        {agency.id + " - " + agency.name}
                                    </option>
                                ))}
                            </Form.Select>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm="4">{subLang.delivery_date}</Form.Label>
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

export default FactoryExportProducts
