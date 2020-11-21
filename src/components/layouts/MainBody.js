import React from 'react'
import {
    Route,
    Switch,
} from "react-router-dom";
import AddUser from '../pages/AddUser';
import AuditLoan from '../pages/AuditLoan';
import Dash from '../pages/Dash';
import IssueLoan from '../pages/IssueLoan';
import Setting from '../pages/Setting';
import User from '../pages/User';
import Users from '../pages/Users';

export default function MainBody() {
    return (
        <div className="mainbody">
            <Switch>
                <Route exact path="/" component={Dash} />
                <Route path="/users" component={Users} />
                <Route path="/user/:id" component={User} />
                <Route path="/issueloan/:id" component={IssueLoan} />
                <Route path="/auditloan/:id" component={AuditLoan} />
                <Route path="/adduser" component={AddUser} />
                <Route path="/settings" component={Setting} />
            </Switch>
        </div>
    )
}
