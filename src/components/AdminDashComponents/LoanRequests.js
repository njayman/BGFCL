import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
export default function LoanRequests() {
    const [loans, setLoans] = useState([])
    const history = useHistory()
    const getHomeLoans = async () => {
        try {
            const { data } = await axios.get('/api/admin/homeloanrequests')
            if (!data.success) {
                console.log(data.message)
            } else {
                setLoans(data.homeloans)
            }
        } catch (error) {
            console.log(error.message)
        }
    }

    useEffect(() => {
        getHomeLoans()
    }, [])

    return (
        <div style={{ padding: "20px" }}>
            {loans?.map((loan, id) => (
                <div key={id} style={{ margin: "10px", background: "white", }}>
                    <h4>Loan issued by user no. {loan.userid}</h4>
                    <button className="action__button" value={loan._id} onClick={e => history.push(`/admin/viewform/${loan._id}`)}>View request</button>
                </div>
            ))}
        </div>
    )
}
