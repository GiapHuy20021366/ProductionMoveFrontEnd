import React from "react"
import axios from '../../axios'
import { useState, useEffect } from "react"

const TestApi = () => {
    const [token, setToken] = useState('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJOYW1lIjoiQUMiLCJzdGF0dXMiOjIsInJvbGUiOjIsImlkIjo0fSwiaWF0IjoxNjcwNDE5NTg5LCJleHAiOjE2NzA0MjMxODl9.cu-AP4-LbEO1fAMC3qtu4v3jRzpxSwwKHiuK75J2er0')
    const test = async () => {
        try {
            const data = await axios.post(
                '/api/export-products', // path of API
                {
                    products: [{ modelId: 1 }, { modelId: 2 }],
                    listId: [8],
                    toPartnerId: 35,
                    type: 0,
                    partnerId: 7,
                    operations: {  // Global operation

                    },
                    attributes: {  // Attributes
                        id: {
                            gt: 6,
                            lt: 12
                        },
                    },
                    pageOffset: {
                        limit: 12, // rows in a page
                        offset: 0   // page offset
                    },
                    associates: {
                        product: {
                            model: {
                                factory: true
                            },
                            purchase: {
                                dealer: true,
                                customer: true
                            }
                        },
                        customer: true,
                        nowAt: true,
                        willAt: true


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