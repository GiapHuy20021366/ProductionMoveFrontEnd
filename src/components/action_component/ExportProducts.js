

import React, { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { paths } from "../../untils/constant";
import useCallApi from "../../untils/fetch";
import { apiUrls } from '../../untils/constant'
import { Button, Modal, Form, Col, Row } from "react-bootstrap";
import { roles } from "../../untils/constant";


const ExportProducts = ({ products, regisAction, hanldeResult }) => {
    const account = useSelector(state => state.user.account)
    const noteRef = useRef()
    const desRef = useRef()
    const reasonRef = useRef()
    const resources = useSelector(state => state.resources)
    const [partners, setPartners] = useState([])
    const [reasons, setReasons] = useState([])

    useEffect(() => {
        if (account.role === roles.AGENCY) {
            setReasons([
                {
                    id: 1,
                    title: 'Bảo hành'
                },
                {
                    id: 3,
                    title: 'Thu hồi'
                }
            ])
        }
        if (account.role === roles.FACTORY) {
            setReasons([
                {
                    id: 0,
                    title: 'Xuất kho'
                }
            ])
        }
        if (account.role === roles.MAINTERNANCE) {
            setReasons([
                {
                    id: 1,
                    title: 'Bảo hành'
                },
                {
                    id: 3,
                    title: 'Thu hồi'
                },
                {
                    id: 2,
                    title: 'Lỗi'
                }
            ])
        }
    }, [])

    useEffect(() => {
        if (account.role === roles.AGENCY) {
            setPartners(resources.holders.maintainCenters)
        }
        if (account.role === roles.FACTORY) {
            setPartners(resources.holders.agencies)
        }
        if (account.role === roles.MAINTERNANCE) {
            setPartners([...resources.holders.agencies, resources.holders.maintainCenters])
        }
        console.log(partners)
    }, [])


    useEffect(() => {
        const productIds = []
        products.forEach((product) => {
            productIds.push(product.id)
        })

        const action = async () => {
            return new Promise(async (resolve, reject) => {
                await useCallApi(
                    apiUrls.EXPORT_PRODUCTS,
                    {
                        listId: productIds,
                        toPartnerId: desRef.current?.value,
                        type: reasonRef.current?.value,
                        note: noteRef.current?.value
                    }
                ).then((res) => {
                    // const productIds = []
                    // res.data.forEach((export_) => {
                    //     productIds.push(export_.productId)
                    // })
                    resolve(productIds, 'Sucess message')
                }).catch((err) => {
                    console.log(err)
                    reject('Error Message')
                })
            })
        }
        regisAction(action)
    }, [products])

    return (
        <>
            <Form.Group as={Row} className="mb-3" controlId="model">
                <Form.Label column sm="2">{'Điểm đến'}</Form.Label>
                <Col sm="10">
                    <Form.Select ref={desRef}>
                        {
                            partners.map((partner) =>
                                <option value={partner.id} key={partner.id}>
                                    {
                                        partner.name
                                    }
                                </option>
                            )
                        }
                    </Form.Select>
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="model">
                <Form.Label column sm="2">{'Lý do'}</Form.Label>
                <Col sm="10">
                    <Form.Select ref={reasonRef}>
                        {
                            reasons.map((reason) =>
                                <option value={reason.id} key={reason.id}>
                                    {
                                        reason.title
                                    }
                                </option>
                            )
                        }
                    </Form.Select>
                </Col>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Note</Form.Label>
                <Form.Control as="textarea" ref={noteRef} rows={3} />
            </Form.Group>
        </>
    )
}

export default ExportProducts