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


const AdminModels = () => {
    const account = useSelector(state => state.user.account)
    const subLang = useSelector(state => state.lang.AdminModels)
    const [listModels, setListModels] = useState({})
    const [modelsLoading, setModelsLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const [arrayModels, setArrayModels] = useState([])

    if (account?.role !== 1) {
        return (
            <Redirect to={paths.SYSTEM} />
        )
    }

    useEffect(async () => {
        setErrorMessage('')
        setModelsLoading(true)
        const data = await axios.post(
            '/api/get-models-by-query',
            {},
            {
                headers: {
                    Authorization: account.token
                }
            }
        ).then((data) => {
            setModelsLoading(false)
            const modelsRequest = data.data.rows
            const models = {}
            for (const model of modelsRequest) {
                models[model.id] = model
            }
            setListModels({
                ...listModels,
                ...models
            })
        }).catch((error) => {
            setErrorMessage('Some error occur, please try again!')
        })
    }, [])

    const tableColumns = [
        { dataField: 'id', text: 'Id' },
        { dataField: 'name', text: subLang.name },
        { dataField: 'signName', text: subLang.sign_name },
        { dataField: 'generation', text: subLang.generation },
        { dataField: 'factory', text: subLang.produced_factory },
        { dataField: 'birth', text: subLang.birth },
        { dataField: 'series', text: subLang.series },
        { dataField: 'trim', text: subLang.trim }, //?
        { dataField: 'length', text: subLang.length },
        { dataField: 'width', text: subLang.width },
        { dataField: 'height', text: subLang.height },
        { dataField: 'bodyType', text: subLang.body_type }, //material?
        { dataField: 'engineType', text: subLang.engine_type },
        { dataField: 'maxSpeed', text: subLang.max_speed },
        { dataField: 'acceleration', text: subLang.acceleration },
        { dataField: 'cityFuel', text: subLang.city_fuel }
    ]

    useEffect(() => {
        const transModels = []
        Object.values(listModels).forEach((model) => {
            transModels.push({
                ...model
            })
        })
        setArrayModels(transModels)
    }, [subLang, listModels])

    return (
        <div className="container-fluid">
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">{subLang.admin_models}</h1>
            </div>
            <TableBase
                arraymodels={arrayModels}
                columns={tableColumns}
                modelsloading={modelsLoading}
            />
        </div>
    )
}

export default AdminModels