import React, { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { paths } from "../../untils/constant";
import useCallApi from "../../untils/fetch";
import { apiUrls } from '../../untils/constant'
import { Button, Modal, Form, Col, Row } from "react-bootstrap";
import MaintainStart from './MaintainStart';
import ExportProducts from "./ExportProducts";

const canMaintain = (products) => {
    return products.every((product) => {
        const holders = product.holders
        return !holders.nowAt && !holders.willAt
    })
}





const FactoryActions = ({ products, regisAction }) => {
    const actionRef = useRef()
    const [actionKey, setActionKey] = useState('MAINTAIN')
    // const resources = useSelector(state => state.resources)

    // useEffect(() => {
    //     console.log(actionRef)
    // }, [actionRef.current])
    // console.log(products)

    const onChangeAction = (e) => {
        setActionKey(e.target.value)
        console.log(e.target.value)
    }

    useEffect(() => {
        if (actionRef.current) {
            setActionKey(actionRef.current.value)
        }
    }, [actionRef.current])

    const actions = [
        {
            key: 'MAINTAIN',
            title: 'Bắt đầu bảo hành',
            type: 'MAINTAIN',
            valid: canMaintain(products)
        },
        // {
        //     key: 'MAINTAIN_MOVING',
        //     type: 'EXPORT',
        //     title: 'Chuyển sản phẩm bảo hành đến Trung tâm bảo hành'
        // },
        // {
        //     key: 'RECALL_START',
        //     type: 'EXPORT',
        //     title: 'Xác nhận thu hồi sản phẩm'
        // },
        // {
        //     key: 'RECALL_MOVING',
        //     type: 'EXPORT',
        //     title: 'Chuyển sản phẩm thu hồi về trung tâm bảo hành'
        // },
        {
            key: 'EXPORT',
            type: 'EXPORT',
            valid: true,
            title: 'Xuất sản phẩm đến nơi khác'
        },
        {
            key: 'RETURN',
            type: 'RETURN',
            title: 'Chuyển sản phẩm cho khách hàng sau bảo hành'
        },
        {
            key: 'CONFIRM',
            type: 'CONFIRM',
            title: 'Xác nhận sản phẩm'
        }
    ]

    return (
        <Form>
            <Form.Group as={Row} className="mb-3" controlId="model">
                <Form.Label column sm="2">{'Hành động'}</Form.Label>
                <Col sm="10">
                    <Form.Select onChange={(e) => { onChangeAction(e) }} ref={actionRef}>
                        {
                            actions.map((action) =>
                                <option value={action.key} key={action.key} disabled={action.valid ? false : true}>
                                    {
                                        action.title
                                    }
                                </option>
                            )
                        }
                    </Form.Select>
                </Col>
            </Form.Group>
            {
                actionKey == 'MAINTAIN' &&
                <MaintainStart regisAction={regisAction} products={products} />
            }
            {
                actionKey == 'EXPORT' &&
                <ExportProducts regisAction={regisAction} products={products} />
            }
        </Form>
    )
}

export default FactoryActions



