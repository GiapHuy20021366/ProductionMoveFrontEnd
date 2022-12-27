import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

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
import AdminAddAccount from "../sub_components/AdminAddAccount";
import TableBase from "../sub_components/Table"
import useCallApi from "../../untils/fetch";
import { apiUrls } from '../../untils/constant'
import ToastUtil from "../../untils/toastUtil";
import '../../styles/AccountCreater.scss'

const AdminAccounts = () => {
    const account = useSelector(state => state.user.account)
    const subLang = useSelector(state => state.lang.AdminAccounts)
    const [listPartners, setListPartners] = useState({})
    const [partnersloading, setPartnersLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const [arrayPartners, setArrayPartners] = useState([])
    const [showModal, setShowModal] = useState(false)
 

    const handleResult = (newAccount) => {
        const listCopy = { ...listPartners }
        listCopy[newAccount.id] = newAccount
        setListPartners(listCopy)
    }

    if (account?.role !== 1) {
        return (
            <Redirect to={paths.SYSTEM} />
        )
    }

    const getRole = (roleId) => {
        switch (roleId) {
            case 1:
                return subLang.admin
            case 2:
                return subLang.factory
            case 3:
                return subLang.agency
            case 4:
                return subLang.maintain_center
            default:
                return 'Unknown'
        }
    }

    useEffect(async () => {
        setErrorMessage('')
        setPartnersLoading(true)
        const data = await useCallApi(
            apiUrls.GET_PARTNERS_BY_QUERY
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

    useEffect(() => {
        const transPartners = []
        Object.values(listPartners).forEach((partner) => {
            transPartners.push({
                ...partner,
                role: getRole(partner.role)
            })
        })
        setArrayPartners(transPartners)
    }, [subLang, listPartners])
 
    const onClickAddNewAccount = () => {
        setShowModal(true)
    }
    const handleClose = (e) => {
        setShowModal(false)
        window.document.body.querySelector('.modal-backdrop').remove()
    }
    
    const columns = [
        { dataField: 'id', text: 'Id' },
        { dataField: 'name', text: subLang.name },
        { dataField: 'email', text: subLang.email },
        { dataField: 'phone', text: subLang.phone },
        { dataField: 'address', text: subLang.address },
        { dataField: 'role', text: subLang.role }
    ]

    return (
        <div className="container-fluid">
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">{subLang.manage_accounts}</h1>
            </div>
            {/* Button Create Account */}
            <button className="btn btn-primary" data-toggle="modal" data-target="#logoutModal" onClick={() => onClickAddNewAccount()}>{subLang.add_new_account}</button>
            
            {/* Popup Form **************************************************************** */}
            {
                showModal && <AdminAddAccount handleResult={handleResult} handleClose={handleClose}/>
            }

            <TableBase
                title={`${subLang.sumary_re(arrayPartners.length)}`}
                data={arrayPartners}
                columns={columns}
                isLoading={partnersloading}
            />
        </div>
    )
}

export default AdminAccounts