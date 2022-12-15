import React from "react"
import axios from '../../axios'
import { useState, useEffect } from "react"

const TestApi = () => {
    const [token, setToken] = useState('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJOYW1lIjoiREwxIiwic3RhdHVzIjoyLCJyb2xlIjozLCJpZCI6MzV9LCJpYXQiOjE2NzA4NjQyNjUsImV4cCI6MTY3MDg2Nzg2NX0.ipWfqEoDwLk2ZQy36lAkTe9lZG98ElFe3GwNXvmefWk')
    const test = async () => {
        try {
            const data = await axios.post(
                '/api/maintain-products', // path of API
                {
                    productIds: [1, 2]
                    // exportIds: [1561],
                    // listId: [10],
                    // toPartnerId: 35
                    // attributes: {  // Attributes
                    //     id: {
                    //         gt: 6,
                    //         lt: 12
                    //     },
                    // },
                    // pageOffset: {
                    //     limit: 12, // rows in a page
                    //     offset: 0   // page offset
                    // },
                    // associates: {
                    //     product: {
                    //         model: {
                    //             factory: true
                    //         },
                    //         purchase: {
                    //             dealer: true,
                    //             customer: true
                    //         }
                    //     },
                    //     customer: true,
                    //     nowAt: true,
                    //     willAt: true


                    // }
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