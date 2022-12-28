import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import '../../styles/AdminAddAccount.scss'
import ToastUtil from "../../untils/toastUtil";
import useCallApi from "../../untils/fetch";
import { apiUrls } from '../../untils/constant'
import { Button, Modal, Form } from "react-bootstrap";


const FactoryImportProducts = ({ handleResult, handleClose, show }) => {
    const subLang = useSelector(state => state.lang.FactoryImportProducts)

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
                    <Form.Group className="mb-3" controlId="Model">
                        <Form.Label>{subLang.model}</Form.Label>
                        <Form.Control type="text"/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="produced_factory">
                        <Form.Label>{subLang.produced_factory}</Form.Label>
                        <Form.Control type="text"/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="birth">
                        <Form.Label>{subLang.birth}</Form.Label>
                        <Form.Control type="date"/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="birth">
                        <Form.Label>{subLang.location}</Form.Label>
                        <Form.Control type="text"/>
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

export default FactoryImportProducts

