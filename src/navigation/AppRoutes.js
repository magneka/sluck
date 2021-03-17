import React, { Fragment } from 'react'
import { Route, Switch } from 'react-router-dom'
import { Login } from '../containers/login/Login'
import { Logout } from '../containers/logout/Logout'
import { MessagesContainer } from '../containers/messages/MessagesContainer'

const AppRoutes = (props) => {
   
    return (        
        <Fragment>
            <Switch>
                <Route exact path="/messages" component={MessagesContainer} />  
                <Route exact path="/login" component={Login} />  
                <Route exact path="/logout" component={Logout} />  
            </Switch>
        </Fragment>  
    )
}

export default AppRoutes