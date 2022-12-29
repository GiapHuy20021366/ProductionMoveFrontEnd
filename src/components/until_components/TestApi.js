import React from "react"
import axios from '../../axios'
import { useState, useEffect } from "react"

const TestApi = () => {
    const [token, setToken] = useState('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJOYW1lIjoiREwxIiwic3RhdHVzIjoyLCJyb2xlIjozLCJpZCI6MzV9LCJpYXQiOjE2NzIyNDgyOTQsImV4cCI6MTY3MjI1MTg5NH0.omlAX25jLxkGRBwKFE_VOn4pYcpsxVeWsv0KfCv2Bvk')
    const test = async () => {
        try {
            const data = await axios.post(
                '/api/get-resources', // path of API
                {
                    holders: {
                        agency: true,
                        maintainCenter: true,
                        factory: true
                    },
                    modelAttributes: {
                        generation: true,
                        bodyType: true,
                        boostType: true,
                        series: true,
                        engineType: true
                    }
                },
                {
                    headers: {
                        Authorization: token
                    }
                }
            ).then((data) => {
                console.log(data)
            })
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div>
            TestApi
            <button onClick={() => test()}>Test</button>
        </div>
    )
}

export default TestApi