import React, { Fragment } from 'react'
import { Route, Switch } from 'react-router-dom'
import { Login } from '../containers/login/Login'
import { Logout } from '../containers/logout/Logout'
import { Messages } from '../containers/messages/Messages'

const AppRoutes = (props) => {
   
    return (        
        <Fragment>
            <Switch>
                <Route exact path="/messages" component={Messages} />  
                <Route exact path="/login" component={Login} />  
                <Route exact path="/logout" component={Logout} />  
            </Switch>
        </Fragment>  
    )
}

export default AppRoutes