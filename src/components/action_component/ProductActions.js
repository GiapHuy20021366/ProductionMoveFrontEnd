import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { paths } from "../../untils/constant";
import useCallApi from "../../untils/fetch";
import { apiUrls } from '../../untils/constant'
import { Redirect, useHistory } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import AgencyActions from './AgencyActions';
import { async } from "q";
import ToastUtil from '../../untils/toastUtil';

const pagination = paginationFactory({
    page: 1,
    sizePerPage: 4,
    nextPageText: ">",
    prePageText: "<",
    alwaysShowAllBtns: false,
});

const ProductActions = ({ show, handleClose, rows, columns, handleResult }) => {
    const subLang = useSelector(state => state.lang.ModelDisplay) // Language here
    const account = useSelector(state => state.user.account)
    const actionRef = useRef()

    const handleAction = async () => {
        if (actionRef.current) {
            await actionRef.current().then(async (productIds) => {
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

                    ToastUtil.success('Bảo hành sản phẩm thành công', 1000);
                    handleClose && handleClose()
                })
            }).catch((error) => {
                console.log(error)
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
                    <Modal.Title>{'Title here'}</Modal.Title>
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
                        account.role === 3 &&
                        <AgencyActions products={rows} regisAction={regisAction} />
                    }
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={handleAction}>Hoan tat</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ProductActions




