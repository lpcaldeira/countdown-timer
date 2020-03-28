import React from 'react'
import moment from 'moment'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Main from './pages/main'

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route
                exact
                path="/"
                component={() =>
                    <Main
                        timeTillDate={moment(moment().endOf('month'), 'MM DD YYYY')} // data almejada
                        timeFormat='MM DD YYYY' // formato
                    />
                }
            />
        </Switch>
    </BrowserRouter>
)

export default Routes