import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { paths } from "../../untils/constant";
import useCallApi from "../../untils/fetch";
import { apiUrls, roles } from '../../untils/constant'
import { Redirect, useHistory } from 'react-router-dom';
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import FactoryActions from './FactoryActions';
import AgencyActions from './AgencyActions';
import { async } from "q";
import ToastUtil from '../../untils/toastUtil';
import { Button, Modal, Form, Col, Row } from "react-bootstrap";

const pagination = paginationFactory({
    page: 1,
    sizePerPage: 4,
    nextPageText: ">",
    prePageText: "<",
    alwaysShowAllBtns: false,
});

const ProductActions = ({ show, handleClose, rows, columns, handleResult }) => {
    const subLang = useSelector(state => state.lang.ProductActions) // Language here
    const account = useSelector(state => state.user.account)
    const actionRef = useRef()

    const handleAction = async () => {
        if (actionRef.current) {
            await actionRef.current().then(async (productIds, successMessage) => {
                console.log(productIds)
                await useCallApi(
                    apiUrls.GET_CURRENT_PRODUCTS_BY_QUERY,
                    {
                        associates: {
                            product: {
                                model: { factory: true }
                            },
                            nowAt: true,
                            willAt: true,
                            customer: true
                        },
                        attributes: {
                            id: {
                                or: productIds
                            }
                        }
                    }
                ).then((data) => {
                    const holdersRequest = data.data.rows
                    const products = {}
                    for (const holder of holdersRequest) {
                        const { product, nowAt, willAt, customer } = holder
                        product.holders = { nowAt, willAt, customer }
                        products[product.id] = product
                    }
                    handleResult && handleResult(products)

                    ToastUtil.success(successMessage, 1000);
                    handleClose && handleClose()
                })
            }).catch((error) => {
                console.log(error)
                ToastUtil.error(error, 1000);
            })
        }
    }

    const regisAction = (actionR) => {
        actionRef.current = actionR
    }

    return (
        <>
            <Modal
                size="lg"
                show={show}
                onHide={handleClose}
            >
                <Modal.Header closeButton>
                    <Modal.Title>{subLang.actions_title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Các sản phẩm đã chọn
                    <BootstrapTable
                        keyField="id"
                        hover
                        data={rows}
                        columns={columns}
                        pagination={pagination}
                    />

                    {
                        account.role === roles.FACTORY &&
                        <FactoryActions products={rows} regisAction={regisAction} />
                    }
                    {
                        account.role === roles.AGENCY &&
                        <AgencyActions products={rows} regisAction={regisAction} />
                    }

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        {subLang.cancel}
                    </Button>
                    <Button variant="primary" onClick={handleAction}>{subLang.submit}</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ProductActions




