import React from 'react'
import {Route, Switch} from 'react-router-dom'
import NewJobs from '../pages/NewJobs'
import CurrentlyJobs from '../pages/CurrentlyJobs'
import FinishJob from '../pages/FinishJobs'
import ErrorPage from '../pages/ErrorPage'
import HomeService from '../pages/HomeService'
import ItemView from '../pages/ItemView'
import ItemEdit from '../pages/ItemEdit'

const MainPlace = (props) => {
    <HomeService test={"przekaz"}/>
    return (  
        <Switch>
            <Route path="/" exact component={HomeService } />
            <Route path="/new-jobs" component={NewJobs} />
            <Route path="/edit/:id" component={ItemEdit} />  
            <Route path="/item/:id" component={ItemView} />
            <Route path="/current-jobs" component={CurrentlyJobs} />
            <Route path="/finish-jobs" component={FinishJob} />
            <Route component={ErrorPage} />
        </Switch>
    );
}
 
export default MainPlace;