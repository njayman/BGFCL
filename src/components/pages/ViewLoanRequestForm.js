import React, { useState, useEffect, useCallback } from 'react'
import axios from 'axios';
import ViewFormOne from '../layouts/TestForms/ViewFormOne';
import ViewFormThree from '../layouts/TestForms/ViewFormThree';
import ViewFormFour from '../layouts/TestForms/ViewFormFour';
import ViewFormFive from '../layouts/TestForms/ViewFormFive';
import ViewFormTwo from '../layouts/TestForms/ViewFormTwo';
export default function ViewLoanRequestForm({ match }) {
    const [loan, setLoan] = useState([])
    const [step, setStep] = useState(1)
    const getLoanInfo = useCallback(async () => {
        try {
            const { data } = await axios.get(`/api/admin/homeloanrequest/${match.params.id}`)
            if (!data.success) {
                console.log(data.message)
            } else {
                const { loanrequest } = data.homeloan
                setLoan(loanrequest)
            }
        } catch (error) {
            console.log(error.message)
        }
    }, [match.params.id])

    useEffect(() => {
        getLoanInfo()
    }, [getLoanInfo])

    useEffect(() => {
        console.log(loan)
    }, [loan])

    return (
        <div>
            <div className="formnav">
                <button style={{ background: `${Number(step) === Number(1) ? "white" : ""}`, border: "2px solid #00a9ff" }} className="action__button" value={1} onClick={e => setStep(Number(e.target.value))}>1</button>
                <button style={{ background: `${Number(step) === Number(2) ? "white" : ""}`, border: "2px solid #00a9ff" }} className="action__button" value={2} onClick={e => setStep(Number(e.target.value))}>2</button>
                <button style={{ background: `${Number(step) === Number(3) ? "white" : ""}`, border: "2px solid #00a9ff" }} className="action__button" value={3} onClick={e => setStep(Number(e.target.value))}>3</button>
                <button style={{ background: `${Number(step) === Number(4) ? "white" : ""}`, border: "2px solid #00a9ff" }} className="action__button" value={4} onClick={e => setStep(Number(e.target.value))}>4</button>
                <button style={{ background: `${Number(step) === Number(5) ? "white" : ""}`, border: "2px solid #00a9ff" }} className="action__button" value={5} onClick={e => setStep(Number(e.target.value))}>5</button>
            </div>
            {step === 1 &&
                <ViewFormOne loaninfo={loan[0]} setStep={s => setStep(s)} />
            }
            {step === 2 &&
                <ViewFormTwo loaninfo={loan[1]} setStep={s => setStep(s)} />
            }
            {step === 3 &&
                <ViewFormThree loaninfo={loan[2]} setStep={s => setStep(s)} />
            }
            {step === 4 &&
                <ViewFormFour loaninfo={loan[3]} setStep={s => setStep(s)} />
            }
            {step === 5 &&
                <ViewFormFive loaninfo={loan[4]} setStep={s => setStep(s)} />
            }
        </div>
    )
}
