import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import '../../styles/AdminAddAccount.scss'
import ToastUtil from "../../untils/toastUtil";
import useCallApi from "../../untils/fetch";
import { apiUrls } from '../../untils/constant'
import { Button, Modal, Form, Col, Row } from "react-bootstrap";

const FactoryAddModel = ({ handleResult, handleClose, show }) => {
    const subLang = useSelector(state => state.lang.FactoryAddModel)
    const account = useSelector(state => state.user.account)

    const userNameRef = useRef()
    const passwordRef = useRef()
    const emailRef = useRef()
    const nameRef = useRef()
    const phoneRef = useRef()
    const addressRef = useRef()
    const roleRef = useRef()

    const [errorMessage, setErrorMessage] = useState('')

    const onClickSubmit = async (e) => {
        setErrorMessage('')
        const newAcc = {
            userName: userNameRef.current.value,
            password: passwordRef.current.value,
            email: emailRef.current.value,
            name: nameRef.current.value,
            address: addressRef.current.value,
            phone: phoneRef.current.value,
            role: roleRef.current.value
        }

        const testAPI = () => {
            Promise.resolve(newAcc).then((data) => {
                userNameRef.current.value = ''
                passwordRef.current.value = ''
                emailRef.current.value = ''
                nameRef.current.value = ''
                addressRef.current.value = ''
                phoneRef.current.value = ''

                ToastUtil.success(subLang.create_success, 1000);
                handleClose && handleClose()
            }).catch((error) => {
                const messageResponse = error.response.data.message
                setErrorMessage(messageResponse)
            })
        }

        // await useCallApi(
        //     apiUrls.CREATE_PARTNER,
        //     newAcc
        // ).then((data) => {
        //     handleResult && handleResult({
        //         ...newAcc,
        //         id: data.data.id
        //     })

        //     userNameRef.current.value = ''
        //     passwordRef.current.value = ''
        //     emailRef.current.value = ''
        //     nameRef.current.value = ''
        //     addressRef.current.value = ''
        //     phoneRef.current.value = ''

        //     ToastUtil.success(subLang.create_success, 1000);
        //     handleClose && handleClose(e)
        //     window.document.body.querySelector('.modal-backdrop').remove()
        //     window.document.body.classList.remove('modal-open')
        //     window.document.body.style = null
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
                <Modal.Title>{subLang.add_new_model}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group as={Row} className="mb-3" controlId="name">
                        <Form.Label column sm="4">{subLang.name}</Form.Label>
                        <Col sm="8">
                            <Form.Control type="text"/>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="sign_name">
                        <Form.Label column sm="4">{subLang.sign_name}</Form.Label>
                        <Col sm="8">
                            <Form.Control type="text"/>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="generation">
                        <Form.Label column sm="4">{subLang.generation}</Form.Label>
                        <Col sm="8">
                            <Form.Control type="text"/>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="produced_factory">
                        <Form.Label column sm="4">{subLang.produced_factory}</Form.Label>
                        <Col sm="8">
                            <Form.Control plaintext readOnly defaultValue={account.name}/>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="birth">
                        <Form.Label column sm="4">{subLang.birth}</Form.Label>
                        <Col sm="8">
                            <Form.Control type="date" defaultValue={today}/>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="series">
                        <Form.Label column sm="4">{subLang.series}</Form.Label>
                        <Col sm="8">
                            <Form.Control type="text"/>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="trim">
                        <Form.Label column sm="4">{subLang.trim}</Form.Label>
                        <Col sm="8">
                            <Form.Control type="text"/>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="length">
                        <Form.Label column sm="4">{subLang.length}</Form.Label>
                        <Col sm="8">
                            <Form.Control type="text"/>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="width">
                        <Form.Label column sm="4">{subLang.width}</Form.Label>
                        <Col sm="8">
                            <Form.Control type="text"/>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="height">
                        <Form.Label column sm="4">{subLang.height}</Form.Label>
                        <Col sm="8">
                            <Form.Control type="text"/>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="body_type">
                        <Form.Label column sm="4">{subLang.body_type}</Form.Label>
                        <Col sm="8">
                            <Form.Control type="text"/>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="engine_type">
                        <Form.Label column sm="4">{subLang.engine_type}</Form.Label>
                        <Col sm="8">
                            <Form.Control type="text"/>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="max_speed">
                        <Form.Label column sm="4">{subLang.max_speed}</Form.Label>
                        <Col sm="8">
                            <Form.Control type="text"/>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="acceleration">
                        <Form.Label column sm="4">{subLang.acceleration}</Form.Label>
                        <Col sm="8">
                            <Form.Control type="text"/>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="city_fuel">
                        <Form.Label column sm="4">{subLang.city_fuel}</Form.Label>
                        <Col sm="8">
                            <Form.Control type="text"/>
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

export default FactoryAddModel

