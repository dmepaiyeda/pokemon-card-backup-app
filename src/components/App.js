import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/index.css";
import {CreateBackupButton, PurgeBackupButton, SearchBackupButton} from './Button'
import NavigationBar from '../components/Navigation';
import { Route, Switch } from "react-router-dom";
import SearchBackup from "../components/SearchBackup"
import { withRouter } from 'react-router-dom';


class App extends React.Component {
  
  render() {
    console.log(this.props);
    return(
      <div>
        <main>
          <NavigationBar/>
          <CreateBackupButton/>
          <PurgeBackupButton/>
          <SearchBackupButton/>
          
          <Switch>
            <Route path="/search" component={SearchBackup}/>
            
          </Switch>
        </main>
      </div>
    )
  }
}

export default withRouter(App);
