import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { paths } from "../../untils/constant";
import useCallApi from "../../untils/fetch";
import { apiUrls } from '../../untils/constant'
import { Button, Modal, Form, Col, Row } from "react-bootstrap";

const FactoryActions = () => {
    const subLang = useSelector(state => state.lang.FactoryActions)
    const listAgencies = useSelector(state => state.resources.holders.agencies)
    console.log("Agencies")
    console.log(listAgencies)

    return (
        <Form>
            <Form.Group as={Row} className="mb-3" controlId="agency">
                <Form.Label column sm="4">{subLang.destination_agency}</Form.Label>
                <Col sm="8">
                    <Form.Select>
                        {listAgencies.map(agency => (
                            <option value={agency.id} key={agency.id}>
                                {agency.id + " - " + agency.name}
                            </option>
                        ))}
                    </Form.Select>
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
                <Form.Label column sm="4">{subLang.delivery_date}</Form.Label>
                <Col sm="8">
                    <Form.Control type="date"/>
                </Col>
            </Form.Group>
        </Form>
    )
}

export default FactoryActions