import React from "react"
import { Navigate, Route, Switch, useHistory } from 'react-router-dom';
import { paths } from './../../untils/constant';

const Home = (probs) => {
    // const history = useHistory()
    // history.push(paths.LOGIN)
    console.log(probs)
    return (
        <div>This is Home</div>
    )
}

export default Home