import React, { useState, Fragment } from 'react'
import FormFive from '../layouts/TestForms/FormFive'
import FormFour from '../layouts/TestForms/FormFour'
import FormOne from '../layouts/TestForms/FormOne'
import FormThree from '../layouts/TestForms/FormThree'
import FormTwo from '../layouts/TestForms/FormTwo'

export default function TestHomeLoan() {
    const [step, setStep] = useState(1)
    return (
        <Fragment>
            <div className="formnav">
                <button style={{ background: `${Number(step) === Number(1) ? "white" : ""}`, border: "2px solid #00a9ff" }} className="action__button" value={1} onClick={e => setStep(Number(e.target.value))}>1</button>
                <button style={{ background: `${Number(step) === Number(2) ? "white" : ""}`, border: "2px solid #00a9ff" }} className="action__button" value={2} onClick={e => setStep(Number(e.target.value))}>2</button>
                <button style={{ background: `${Number(step) === Number(3) ? "white" : ""}`, border: "2px solid #00a9ff" }} className="action__button" value={3} onClick={e => setStep(Number(e.target.value))}>3</button>
                <button style={{ background: `${Number(step) === Number(4) ? "white" : ""}`, border: "2px solid #00a9ff" }} className="action__button" value={4} onClick={e => setStep(Number(e.target.value))}>4</button>
                <button style={{ background: `${Number(step) === Number(5) ? "white" : ""}`, border: "2px solid #00a9ff" }} className="action__button" value={5} onClick={e => setStep(Number(e.target.value))}>5</button>
            </div>
            {step === 1 &&
                <FormOne setStep={s => setStep(s)} />
            }
            {step === 2 &&
                <FormTwo setStep={s => setStep(s)} />
            }
            {step === 3 &&
                < FormThree setStep={s => setStep(s)} />
            }
            {step === 4 &&
                <FormFour setStep={s => setStep(s)} />
            }
            {step === 5 &&
                <FormFive setStep={s => setStep(s)} />
            }
        </Fragment >
    )
}
