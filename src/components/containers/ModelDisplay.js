import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { paths } from "../../untils/constant";
import useCallApi from "../../untils/fetch";
import { apiUrls } from '../../untils/constant'
import { Redirect, useHistory } from 'react-router-dom';

const ModelDisplay = (probs) => {
    const history = useHistory()
    const state = history.location?.state
    const subLang = useSelector(state => state.lang.ModelDisplay)
    const [loadingModel, setLoadingModel] = useState(false)
    const [model, setModel] = useState({
        id: 999999,
        name: 'Unknown',
        signName: 'Unknown',
        generation: 'Unknown',
        factory: 'Unknown',
        producedFactory: 'Unknown',
        birth: 'Unknown',
        series: 'Unknown',
        trim: 'Unknown',
        length: 'Unknown',
        width: 'Unknown',
        height: 'Unknown',
        bodyType: 'Unknown',
        engineType: 'Unknown',
        maxSpeed: 'Unknown',
        accceleration: 'Unknown',
        cityFuel: 'Unknown',
    })

    const validState = state?.row?.id
    const prefixUrls = [
        paths.ADMIN_MODELs
    ]
    if (!validState) {
        const { pathname } = history.location
        for (const prefix of prefixUrls) {
            if (pathname.startsWith(prefix)) {
                return <Redirect to={prefix} />
            }
        }
    }
    useEffect(async () => {
        if (validState) {
            setLoadingModel(true)
            await useCallApi(
                apiUrls.GET_MODELS_BY_IDS,
                {
                    listId: [state.row.id]
                }
            ).then((response) => {
                const { data } = response
                if (data.length === 1) {
                    const model = data[0]
                    model.producedFactory = model?.factory?.name
                    setModel(model)
                }
            }).catch((error) => {
                console.log(error)
            })
            setLoadingModel(false)
        }
    }, [])

    return (
        <>
            <div className="container-fluid">
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 className="h3 mb-0 text-gray-800">{subLang.model_details}</h1>
                </div>
                {
                    loadingModel && <div>Loading...</div>
                }
                <ul>
                    <li>Id : {model.id}</li>
                    <li>{subLang.name}: {model.name}</li>
                    <li>{subLang.sign_name}: {model.signName}</li>
                    <li>{subLang.generation}: {model.generation}</li>
                    <li>{subLang.produced_factory}: {model.producedFactory}</li>
                    <li>{subLang.birth}: {model.birth}</li>
                    <li>{subLang.series}: {model.series}</li>
                    <li>{subLang.trim}: {model.trim}</li>
                    <li>{subLang.length}: {model.length}</li>
                    <li>{subLang.width}: {model.width}</li>
                    <li>{subLang.height}: {model.height}</li>
                    <li>{subLang.body_type}: {model.bodyType}</li>
                    <li>{subLang.max_speed}: {model.maxSpeed}</li>
                    <li>{subLang.acceleration}: {model.accceleration}</li>
                    <li>{subLang.city_fuel}: {model.cityFuel}</li>
                </ul>
            </div>
        </>
    )
}

export default ModelDisplay




