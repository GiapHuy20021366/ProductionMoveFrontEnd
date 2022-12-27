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
import AccountCreater from "../sub_components/AccountCreater";
import TableBase from "../sub_components/Table";
import { textFilter, selectFilter } from "react-bootstrap-table2-filter";
import ToastUtil from "../../untils/toastUtil";
import paginationFactory from 'react-bootstrap-table2-paginator';


const AdminAccounts = () => {
    const account = useSelector(state => state.user.account)
    const lang = useSelector(state => state.lang)
    const [listPartners, setListPartners] = useState({})
    const [partnersloading, setPartnersLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const [createAccountVisible, setCreateAccountVisible] = useState(false)
    const [statusCreateAccount, setStatusCreateAccount] = useState('')
    const [arrayPartners, setArrayPartners] = useState([])


    // const selectOptions = [
    //     { value: 0, label: lang.account_admin },
    //     { value: 1, label: lang.account_factory },
    //     { value: 2, label: lang.account_dealer },
    //     { value: 3, label: lang.account_maintain_center },
    //     { value: 4, label: 'Unknown' }


    //   ];
    const selectOptions = {
        'Admin': lang.account_admin,
        'Dealer': lang.account_dealer,
        'Factory': lang.account_factory,
        'Maintain Center': lang.account_maintain_center,
        'Unknown': 'Unknown'
    }
 
    const handleResultCreateAccount = (newAccount) => {
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
            '/api/get-partners-by-query', // path of API
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

    const onClickCreateNewAccount = () => {
        setCreateAccountVisible(!createAccountVisible)
    }

    const columns = [
        { 
            dataField: 'id', 
            text: 'Id' 
        },
        { 
            dataField: 'name', 
            text: lang.account_name,
            filter: textFilter() 
        },
        { 
            dataField: 'email', 
            text: lang.account_email, 
            filter: textFilter() 

        },
        { 
            dataField: 'phone', 
            text: lang.account_phone,
            filter: textFilter() 

        },
        { 
            dataField: 'address', 
            text: lang.account_address,
            filter: textFilter() 
        },
        { 
            dataField: 'role', 
            text: lang.account_role,
            formatter: cell => selectOptions[cell],
            filter: selectFilter({
                options: selectOptions
            })
        }
    ]
    console.log(selectOptions)
    useEffect(() => {
        const transPartners = []
        Object.values(listPartners).forEach((partner) => {
            transPartners.push({
                ...partner,
                role: getRole(partner.role)
            })
        })
        setArrayPartners(transPartners)
    }, [lang, listPartners])

    return (
        <div className="container-fluid">
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">{lang.admin_accounts}</h1>
            </div>
            {/* Account Create */}
            <button onClick={() => onClickCreateNewAccount()}>{lang.accounts_new_account}</button>
            {
                createAccountVisible &&
                <AccountCreater handleResult={handleResultCreateAccount} />
            }

            <TableBase
                arrayPartners={arrayPartners}
                columns={columns}
                partnersloading={partnersloading}
            />
        </div>
    )
}

export default AdminAccounts