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
import AccountCreater from "../sub_components/AccountCreater";
import TableBase from "../sub_components/Table";
import { textFilter, selectFilter } from "react-bootstrap-table2-filter";
import useCallApi from "../../untils/fetch";
import { apiUrls } from '../../untils/constant'


const AdminAccounts = () => {
    const account = useSelector(state => state.user.account)
    const subLang = useSelector(state => state.lang.AdminAccounts)
    const [listPartners, setListPartners] = useState({})
    const [partnersloading, setPartnersLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const [createAccountVisible, setCreateAccountVisible] = useState(false)
    const [statusCreateAccount, setStatusCreateAccount] = useState('')
    const [arrayPartners, setArrayPartners] = useState([])

 
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

    const selectOptions = {
        options: {
            "Admin": subLang.admin,
            "Factory": subLang.factory,
            "Maintain Center": subLang.maintain_center,
            "Dealer": subLang.dealer,
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
                return subLang.dealer
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
            text: subLang.name,
            filter: textFilter(),
        },
        { 
            dataField: 'email', 
            text: subLang.email, 
            filter: textFilter() 

        },
        { 
            dataField: 'phone', 
            text: subLang.phone,
            filter: textFilter() 

        },
        { 
            dataField: 'address', 
            text: subLang.address,
            filter: textFilter() 
        },
        { 
            dataField: 'role', 
            text: subLang.role,
            formatter: cell => selectOptions.options[cell],
            filter: selectFilter(selectOptions)
        }
    ]
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
    console.log(subLang)
    return (
        <div className="container-fluid">
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">{subLang.manage_accounts}</h1>
            </div>
            {/* Account Create */}
            <button onClick={() => onClickCreateNewAccount()}>{subLang.add_new_account}</button>
            {
                createAccountVisible &&
                <AccountCreater handleResult={handleResultCreateAccount} />
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