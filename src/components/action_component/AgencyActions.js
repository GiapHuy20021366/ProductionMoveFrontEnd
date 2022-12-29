import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { paths } from "../../untils/constant";
import useCallApi from "../../untils/fetch";
import { apiUrls } from '../../untils/constant'
import { Button, Modal, Form, Col, Row } from "react-bootstrap";


const AgencyActions = ({ products }) => {
    const actionRef = useRef()

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
                <Form.Label column sm="4">{'lable here'}</Form.Label>
                <Col sm="8">
                    <Form.Select ref={actionRef} aria-label="Default select example" >
                        {
                            actions.map((action) =>
                                <option key={action.key}>
                                    {
                                        action.title
                                    }
                                </option>
                            )
                        }
                    </Form.Select>
                </Col>
            </Form.Group>
        </Form>
    )
}

export default AgencyActions



