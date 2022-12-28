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
import TableBase from "../sub_components/Table";
import { textFilter, selectFilter } from "react-bootstrap-table2-filter";
import useCallApi from "../../untils/fetch";
import { apiUrls } from '../../untils/constant'
import AdminAddAccount from "../sub_components/AdminAddAccount";

const AdminAccounts = () => {
    const account = useSelector(state => state.user.account)
    const subLang = useSelector(state => state.lang.AdminAccounts)
    const deviceType = useSelector(state => state.device.type)
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

    const selectOptions = {
        options: {
            "Admin": subLang.admin,
            "Factory": subLang.factory,
            "Maintain Center": subLang.maintain_center,
            "Agency": subLang.agency,
            "Unknown": "Unknown"
        }
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
        await useCallApi(
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

    const onClickCreateNewAccount = () => {
        setCreateAccountVisible(!createAccountVisible)
    }

    const columns = (() => {
        const options = {
            id: { dataField: 'id', text: 'Id', sort: true },
            name: { dataField: 'name', text: subLang.name, filter: textFilter(), sort: true },
            email: { dataField: 'email', text: subLang.email, filter: textFilter() },
            phone: { dataField: 'phone', text: subLang.phone, filter: textFilter() },
            address: { dataField: 'address', text: subLang.address, filter: textFilter() },
            role: {
                dataField: 'role', text: subLang.role,
                formatter: cell => selectOptions.options[cell],
                filter: selectFilter(selectOptions)
            }
        }

        const { id, name, email, phone, address, role } = options

        if (deviceType.isMobie) {
            return [id, name, role]
        }
        if (deviceType.isTablet) {
            return [id, name, role, address]
        }
        if (deviceType.isDesktop) {
            return Object.values(options)
        }
    })()


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
    const handleClose = () => {
        setShowModal(false)
    }

    return (
        <div className="container-fluid">
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">{subLang.manage_accounts}</h1>
            </div>
            {/* Button Create Account */}
            <button className="btn btn-primary" data-toggle="modal" data-target="#ModalContainer" onClick={() => onClickAddNewAccount()}>{subLang.add_new_account}</button>

            {/* Popup Form **************************************************************** */}
            {

                <AdminAddAccount handleResult={handleResult} handleClose={handleClose} shower={showModal} />
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