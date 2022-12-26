import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import BootstrapTable from 'react-bootstrap-table-next';
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
import axios from '../../axios'
import TableBase from "../sub_components/Table"
import ToastUtil from "../../untils/toastUtil";
import paginationFactory from 'react-bootstrap-table2-paginator';


const AdminProducts = () => {
    const account = useSelector(state => state.user.account)
    const lang = useSelector(state => state.lang)
    const [listPartners, setListPartners] = useState({})
    const [partnersloading, setPartnersLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
 
    if (account?.role !== 1) {
        return (
            <Redirect to={paths.SYSTEM} />
        )
    }

    const getRole = (roleId) => {
        switch (roleId) {
            case 1:
                return lang.account_admin
            case 2:
                return lang.account_factory
            case 3:
                return lang.account_dealer
            case 4:
                return lang.account_maintain_center
            default:
                return 'Unknown'
        }
    }

    useEffect(async () => {
        setErrorMessage('')
        setPartnersLoading(true)
        const data = await axios.post(
            '/api/get-products-by-query',
            {
                pageOffset: {
                    limit: 700
                },
                associates: {
                    model: {
                        factory: true
                    }
                }
            },
            {
                headers: {
                    Authorization: account.token
                }
            }
        ).then((data) => {
            setPartnersLoading(false)
            const partnersRequest = data.data.rows
            const partners = {}
            for (const partner of partnersRequest) {
                partners[partner.id] = partner
            }
            setListPartners({
                ...listPartners,
                ...partners
            })
            console.log(partnersRequest)
        }).catch((error) => {
            setErrorMessage('Some error occur, please try again!')
        })
    }, [])

    const tableColumns = [
        { dataField: 'id', text: 'Id' },
        { dataField: 'modelId', text: lang.products_modelId },
        { dataField: 'name', text: lang.products_modelName },
        { dataField: 'factoryId', text: lang.products_factoryId },
        { dataField: 'birth', text:  lang.products_MFG} // Manufacturing Date
    ]

    const arrayPartners = Object.values(listPartners)
    for (var i = 0; i < arrayPartners.length; i++) {
        arrayPartners[i].role = getRole(arrayPartners[i].role)
    }

    return (
        <div className="container-fluid">
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">{lang.admin_products}</h1>
            </div>
            <TableBase
                arrayPartners = {arrayPartners}
                columns = {tableColumns}
                partnersloading = {partnersloading}
            />
        </div>
    )
}

export default AdminProducts