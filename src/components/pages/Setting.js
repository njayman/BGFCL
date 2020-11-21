import { Fragment, useState } from 'react'
import Loantype from '../settingpartials/Loantype'

export default function Setting() {
    const [errorMessage, setErrorMessage] = useState(null)
    return (
        <Fragment>
            <div className="mainbody__nav">
                <p className="mainbody__title">Settings {errorMessage ? <>| {errorMessage}</> : null}</p>
                {/*<button className="action__button" onClick={() => history.push('/users')}>All Users</button>*/}
            </div>
            <div className="setting">
                <Loantype setErrorMessage={err => setErrorMessage(err)} />
            </div>
        </Fragment>
    )
}
