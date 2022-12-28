import React ,{ useEffect, useState } from "react";
import { useSelector } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import '../../styles/Dashboard.css'
import "../../js/sb-admin-2.min";
import "../../vendor/jquery/jquery.min";
import "../../vendor/bootstrap/js/bootstrap.bundle.min";
import "../../styles/sb-admin-2.min.css";
import "../../styles/font.css";
import "../../vendor/datatables/dataTables.bootstrap4.min.css";
import { Redirect } from "react-router";
import { paths } from "../../untils/constant";
import useCallApi from "../../untils/fetch";
import { apiUrls } from '../../untils/constant'
import TableBase from "../sub_components/Table"
import FactoryImportProducts from "../sub_components/FactoryImportProducts";

const FactoryProducts = () => {
    const account = useSelector(state => state.user.account)
    const subLang = useSelector(state => state.lang.FactoryProducts)
    const [listProducts, setListProducts] = useState({})
    const [productsLoading, setProductLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const [arrayProducts, setArrayProducts] = useState([])
    const [showModal, setShowModal] = useState(false)

    // *** prevent another role from accessing to link which just only for admin ***
    if (account?.role !== 2) {
        return (
            <Redirect to={paths.SYSTEM} />
        )
    }

    // *** API load data ***
    useEffect(async () => {
        setErrorMessage('')
        setProductLoading(true)
        await useCallApi(
            apiUrls.GET_CURRENT_PRODUCTS_BY_QUERY,
            {
                associates: {
                    product: {
                        model: { factory: true }
                    }
                }
            }
        ).then((data) => {
            setProductLoading(false)
            const productsRequest = data.data.rows
            const products = {}
            for (const product of productsRequest) {
                products[product.product.id] = product.product
            }
            setListProducts({
                ...listProducts,
                ...products
            })
        }).catch((error) => {
            setErrorMessage('Some error occur, please try again!')
        })
    }, [])

    // *** update table of list products when numOfProduct or language is changed ***
    useEffect(() => {
        const transProducts = []
        Object.values(listProducts).forEach((product) => {
            const productCopy = { ...product }
            productCopy.model = `${product?.model?.name} - ${product?.model?.signName}`
            productCopy.factory = product?.model?.factory?.name
            transProducts.push(productCopy)
        })
        setArrayProducts(transProducts)
    }, [subLang, listProducts])
    
    const tableColumns = [
        { dataField: 'id', text: 'Id' },
        { dataField: 'model', text: subLang.model },
        { dataField: 'factory', text: subLang.produced_factory },
        { dataField: 'birth', text: subLang.birth },
        { dataField: 'location', text: subLang.location }
    ]

    // *** update new account -> to table of accounts list -> when add new account ***
    const handleResult = (newAccount) => {
        const listCopy = { ...listPartners }
        listCopy[newAccount.id] = newAccount
        setListPartners(listCopy)
    }

    const handleCloseModal = (e) => {
        setShowModal(false)
    }

    const onClickModalBtn = () => {
        setShowModal(true)
    }

    return (
        <div className="container-fluid">
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">{subLang.manage_products}</h1>
            </div>

            {/* Button Import Products Data */}
            <button className="btn btn-primary" onClick={() => onClickModalBtn()}>{subLang.import_products_btn}</button>

            {/* Popup Form **************************************************************** */}
            {
                <FactoryImportProducts
                    handleResult={handleResult}
                    handleClose={handleCloseModal}
                    show={showModal} 
                />
            }

            <TableBase
                title={subLang.sumary_re(arrayProducts.length)}
                data={arrayProducts}
                columns={tableColumns}
                isLoading={productsLoading}
            />
        </div>
    )
}

export default FactoryProducts