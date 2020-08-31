import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/index.css";
import {CreateBackupButton, PurgeBackupButton, SearchBackupButton} from './Button'

class App extends React.Component {
  render() {
    return(
      <div>
        <CreateBackupButton/>
        <PurgeBackupButton/>
        <SearchBackupButton/>
      </div>
    )
  }
}

export default App;
