import React from "react"
import axios from '../../axios'
import { useState, useEffect } from "react"

const TestApi = () => {
    const [token, setToken] = useState('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJOYW1lIjoiQUMiLCJzdGF0dXMiOjIsInJvbGUiOjIsImlkIjo0fSwiaWF0IjoxNjY5ODg3NTczLCJleHAiOjE2Njk4OTExNzN9.D8tCaIJeDadYhv7dRWAaKDmidBHVslbOaEPMevFBNLA')
    useEffect(async () => {
        try {
            const data = await axios.post(
                '/api/get-customers-by-query', // path of API
                {
                    operations: {  // Global operation

                    },
                    attributes: {  // Attributes
                        id: {
                            gt: 6,
                            lt: 12
                        }
                    },
                    pageOffset: {
                        limit: 12, // rows in a page
                        offset: 0   // page offset
                    },
                    associates: {
                        purchases: {
                            product: {
                                model: {
                                    factory: true
                                }
                            },
                            dealer: true
                        },

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
    }, [])
    return (
        <div>

        </div>
    )
}

export default TestApi