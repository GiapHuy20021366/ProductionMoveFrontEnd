import React, { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { paths } from "../../untils/constant";
import useCallApi from "../../untils/fetch";
import { apiUrls } from '../../untils/constant'
import { Button, Modal, Form, Col, Row } from "react-bootstrap";
import MaintainStart from './MaintainStart';
import ExportProducts from "./ExportProducts";

const isSold = (products) => {
    return products.every(product =>{
        const holders = product.holders
        return Boolean(holders.customer)
    })
}

// product can maintain or recall: is sold (exist customer) & now at agency (??????)
const canMaintainOrRecall = (products) => {
    console.log("products")
    console.log(products)
    return products.every((product) => {
        const holders = product.holders
        console.log(product)
        console.log(holders.customer)
        console.log(holders.nowAt)
        console.log(holders.willAt)
        // return !holders.nowAt && !holders.willAt
        return holders.customer && !holders.willAt
    })
}

// product can export: is sold (exist customer) & now at factory (?: làm sao biết holders.nowAt là factory hay ko?)
const canExport = (products) => {
    console.log("products")
    console.log(products)
    return products.every((product) => {
        console.log("product")
        console.log(product)
        const holders = product.holders
        console.log(holders.customer)
        console.log(holders.nowAt)
        console.log(Boolean(holders.customer && holders.nowAt))
        return holders.customer && !holders.nowAt
    })
}

const AgencyActions = ({ products, regisAction }) => {
    const subLang = useSelector(state => state.lang.AgencyActions)
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
            valid: canMaintainOrRecall(products)
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
            title: 'Xuất sản phẩm đến nơi khác',
            valid: canExport(products)
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
                <Form.Label column sm="2">{subLang.actions_selection}</Form.Label>
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

export default AgencyActions



