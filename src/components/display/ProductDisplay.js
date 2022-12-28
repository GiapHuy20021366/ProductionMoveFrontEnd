import Modal from 'react-bootstrap/Modal';
import React, { useEffect, useRef, useState } from "react";
import useCallApi from "../../untils/fetch";
import { apiUrls } from '../../untils/constant'
import { useDispatch, useSelector } from "react-redux";


const ProductDisplay = ({ show, handleClose, row }) => {
    const subLang = useSelector(state => state.lang.ProductDisplay)
    const [loadingProduct, setLoadingProduct] = useState(false)
    const [product, setProduct] = useState({})

    const parseHistory = (product) => {
        console.log(product)
        const history = []
        history.push({
            key: 'BIRTH',
            time: product.birth
        })
        if (product.purchase) {
            history.push({
                key: 'PURCHASE',
                time: product.purchase.date,
                agency: product.purchase.dealer,
                customer: product.purchase.customer
            })
        }

        if (product?.maintains) {
            for (const maintain of product.maintains) {
                history.push({
                    key: 'MAINTAIN_START',
                    time: maintain.date,
                    agency: product.purchase.dealer,
                    customer: product.purchase.customer
                })
            }
        }

        if (product?.recalls) {
            for (const recall of product.recalls) {
                history.push({
                    key: 'RECALL_START',
                    time: recall.date,
                    agency: product.purchase.dealer,
                    customer: product.purchase.customer
                })
            }
        }

        if (product?.exports) {
            for (const _export of product.exports) {
                const sample = {
                    time: _export.date,
                    sender: _export.sender,
                    reciever: _export.reciever
                }
                switch (_export.type) {
                    case 0: {
                        sample.key = 'EXPORT_OUT'
                        break
                    }
                    case 1: {
                        sample.key = 'MAINTAIN_MOVING'
                        break
                    }
                    case 2: {
                        sample.key = 'FAIL'
                        break
                    }
                    case 3: {
                        sample.key = 'RECALL_MOVING'
                        break
                    }
                }
                history.push(sample)
            }
        }
        history.sort((a, b) => Date.parse(a.time) - Date.parse(b.time))
        return history
    }

    useEffect(async () => {
        if (row) {
            setLoadingProduct(true)
            await useCallApi(
                apiUrls.GET_PRODUCTS_BY_QUERY,
                {
                    attributes: {
                        id: {
                            eq: row.id
                        }
                    },
                    associates: {
                        model: { factory: true },
                        purchase: {
                            dealer: true,
                            customer: true
                        },
                        exports: {
                            sender: true,
                            reciever: true
                        },
                        maintains: true,
                        recalls: true,
                        holders: true
                    }
                }
            ).then((response) => {
                const { data } = response
                if (data.rows.length === 1) {
                    const product = data.rows[0]
                    setProduct(product)
                    const productHistory = parseHistory(product)
                    product.history = productHistory
                    // console.log(Date.parse('2004-01-11T17:00:00.000Z'))
                    // console.log(product)
                    // console.log(productHistory)
                }
                setLoadingProduct(false)

            }).catch((error) => {
                console.log(error)
            })
        }
    }, [row])

    return (
        <>
            <Modal
                size="lg"
                show={show}
                onHide={handleClose}
            >
                <Modal.Header closeButton>
                    <Modal.Title>{subLang.product_details}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {
                        loadingProduct && <div>Loading...</div>
                    }
                    <ul>
                        {JSON.stringify(product.history)}
                    </ul>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default ProductDisplay