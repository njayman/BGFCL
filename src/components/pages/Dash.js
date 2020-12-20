//import { useState } from 'react'

import LoanRequests from "../AdminDashComponents/LoanRequests";

export default function Dash() {
    //const [errorMessage, setErrorMessage] = useState(null)
    return (
        <div>
            <div className="mainbody__nav">
                <p className="mainbody__title">Dasboard {/*errorMessage ? <>| {errorMessage}</> : null*/}</p>
                {/*<button className="actionButton">Add User</button>*/}
            </div>
            <div>
                <LoanRequests />
            </div>

        </div>
    )
}
