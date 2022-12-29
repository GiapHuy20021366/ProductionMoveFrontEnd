import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { paths } from "../../untils/constant";
import useCallApi from "../../untils/fetch";
import { apiUrls } from '../../untils/constant'
import { Button, Modal, Form, Col, Row } from "react-bootstrap";

// const canMaintain = (products) => {
//     return products.every((product) => {
//         const holders = product.holders
//         return holders.nowAt
//     })
// }


const MaintainStart = ({ products, regisAction }) => {
    const account = useSelector(state => state.user.account)

    useEffect(() => {
        // const productids
        const action = async () => {
            // await 
        }
        // console.log('begin', products)
        // console.log('begin', regisAction)
    }, [products])

    return (
        <>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Example textarea</Form.Label>
                <Form.Control as="textarea" rows={3} />
            </Form.Group>
        </>
    )
}

const AgencyActions = ({ products, regisAction }) => {
    const actionRef = useRef()
    const [actionKey, setActionKey] = useState('MAINTAIN_START')
    // const resources = useSelector(state => state.resources)

    // useEffect(() => {
    //     console.log(actionRef)
    // }, [actionRef.current])
    console.log(products)

    const onChangeAction = (e) => {
        setActionKey(e.target.value)
    }

    const actions = [
        {
            key: 'MAINTAIN_START',
            title: 'Bắt đầu bảo hành'
        },
        {
            key: 'MAINTAIN_MOVING',
            title: 'Chuyển sản phẩm bảo hành đến Trung tâm bảo hành'
        },
        {
            key: 'RECALL_START',
            title: 'Xác nhận thu hồi sản phẩm'
        },
        {
            key: 'RECALL_MOVING',
            title: 'Chuyển sản phẩm thu hồi về trung tâm bảo hành'
        },
        {
            key: 'RETURN_PRODUCT',
            title: 'Chuyển sản phẩm cho khách hàng sau bảo hành'
        },
        {
            key: 'CONFIRM_EXPORT',
            title: 'Xác nhận sản phẩm'
        }
    ]

    return (
        <Form>
            <Form.Group as={Row} className="mb-3" controlId="model">
                <Form.Label column sm="2">{'Hành động'}</Form.Label>
                <Col sm="10">
                    <Form.Select onChange={(e) => { onChangeAction(e) }} ref={actionRef} aria-label="Default select example" >
                        {
                            actions.map((action) =>
                                <option value={action.key} key={action.key} >
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
                actionKey == 'MAINTAIN_START' &&
                <MaintainStart regisAction={regisAction} products={products} />
            }
        </Form>
    )
}

export default AgencyActions


