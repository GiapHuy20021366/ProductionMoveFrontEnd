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


const AdminModels = () => {
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
            '/api/get-models-by-query',
            {},
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
        }).catch((error) => {
            setErrorMessage('Some error occur, please try again!')
        })
    }, [])

    const tableColumns = [
        { dataField: 'id', text: 'Id' },
        { dataField: 'name', text: lang.model_name },
        { dataField: 'signName', text: lang.model_signName },
        { dataField: 'generation', text: lang.model_generation },
        { dataField: 'produced_factory', text: lang.account_factoryId },
        { dataField: 'birthday', text:  lang.model_birthday},
        { dataField: 'series', text: lang.model_series },
        { dataField: 'trim', text: lang.model_trim }, //?
        { dataField: 'length', text: lang.model_length }, 
        { dataField: 'width', text: lang.model_width }, 
        { dataField: 'height', text: lang.model_height }, 
        { dataField: 'bodyType', text: lang.model_bodyType }, //material?
        { dataField: 'engineType', text: lang.model_engineType }, 
        { dataField: 'maxSpeed', text: lang.model_maxSpeed }, 
        { dataField: 'acceleration', text: lang.model_acceleration }, 
        { dataField: 'cityFuel', text: lang.model_cityFuel }
    ]

    const arrayPartners = Object.values(listPartners)
    for (var i = 0; i < arrayPartners.length; i++) {
        arrayPartners[i].role = getRole(arrayPartners[i].role)
    }

    return (
        <div className="container-fluid">
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">{lang.admin_models}</h1>
            </div>
            <TableBase
                arrayPartners = {arrayPartners}
                columns = {tableColumns}
                partnersloading = {partnersloading}
            />
        </div>
    )
}

export default AdminModels