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
import TableBase from "../sub_components/Table"
import { textFilter, selectFilter } from "react-bootstrap-table2-filter";
import useCallApi from "../../untils/fetch";
import { apiUrls } from '../../untils/constant'
import { useHistory } from 'react-router-dom';
import ModelDisplay from "../display/ModelDisplay";

const MaintenanceModels = (probs) => {
    const subLang = useSelector(state => state.lang.MaintenanceModels)
    const account = useSelector(state => state.user.account)
    const [listModels, setListModels] = useState({})
    const deviceType = useSelector(state => state.device.type)
    const [modelsLoading, setModelsLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const [arrayModels, setArrayModels] = useState([])
    const [showDetail, setShowDetail] = useState(false)
    const [choosedRow, setChoosedRow] = useState({})
    const [showModal, setShowModal] = useState(false)

    // *** prevent another role from accessing to link which just only for admin ***
    if (account?.role !== 4) {
        return (
            <Redirect to={paths.SYSTEM} />
        )
    }

    // *** API load data ***
    useEffect(async () => {
        setErrorMessage('')
        setModelsLoading(true)
        await useCallApi(
            apiUrls.GET_MODELS_BY_QUERY,
            {
                associates: {
                    factory: true
                },

                attributes: {
                    // factoryId: {
                    //     eq : account.id
                    // }
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

    const tableColumns = (() => {
        // *** option attribute:
        // sort: true           --> this column can be sorted
        // filter: textFilter() --> this column can can be searched
        const options = {
            id: { dataField: 'id', text: 'Id' },
            name: { dataField: 'name', text: subLang.name },
            signName: { dataField: 'signName', text: subLang.sign_name },
            generation: { dataField: 'generation', text: subLang.generation },
            factory: { dataField: 'factory', text: subLang.produced_factory },
            birth: { dataField: 'birth', text: subLang.birth },
            series: { dataField: 'series', text: subLang.series },
            trim: { dataField: 'trim', text: subLang.trim }, //
            length: { dataField: 'length', text: subLang.length },
            width: { dataField: 'width', text: subLang.width },
            height: { dataField: 'height', text: subLang.height },
            bodyType: { dataField: 'bodyType', text: subLang.body_type }, //material?
            engineType: { dataField: 'engineType', text: subLang.engine_type },
            maxSpeed: { dataField: 'maxSpeed', text: subLang.max_speed },
            acceleration: { dataField: 'accceleration', text: subLang.acceleration },
            cityFuel: { dataField: 'cityFuel', text: subLang.city_fuel }
        }
        const { id, name, signName, generation, factory, birth, series, trim, length, width, height, bodyType, engineType, maxSpeed, acceleration, cityFuel } = options
        const baseSE = [id, name, signName]
        if (deviceType.isMobie) {
            baseSE.push(factory)
        }
        if (deviceType.isTablet) {
            baseSE.push(factory, birth, generation)
        }
        if (deviceType.isDesktop) {
            baseSE.push(factory, birth, generation, series, trim)
        }
        return baseSE
    })()

    // *** update table of list models when numOfModels or language is changed ***
    useEffect(() => {
        const transModels = []
        Object.values(listModels).forEach((model) => {
            const modelCopy = { ...model }
            modelCopy.factory = model?.factory.name
            transModels.push(modelCopy)
        })
        setArrayModels(transModels)
    }, [subLang, listModels])


    const rowEvents = {
        onClick: (e, row, rowIndex) => {
            setShowDetail(true)
            setChoosedRow(row)
        }
    };

    const handleClose = () => {
        setShowDetail(false)
    }

    // *** update new account -> to table of accounts list -> when add new account ***
    const handleResult = (newModel) => {
        const listCopy = { ...listModels }
        listCopy[newModel.id] = newModel
        setListModels(listCopy)
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
                <h1 className="h3 mb-0 text-gray-800">{subLang.view_models}</h1>
            </div>

            <ModelDisplay
                show={showDetail}
                row={choosedRow}
                handleClose={handleClose}
            />

            <TableBase
                title={`${subLang.sumary_re(arrayModels.length)}`}
                data={arrayModels}
                columns={tableColumns}
                isLoading={modelsLoading}
                rowEvents={rowEvents}
            />
        </div>
    )
}

export default MaintenanceModels