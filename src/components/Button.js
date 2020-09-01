import React from 'react';
import {Button} from 'react-bootstrap';

export const CreateBackupButton = () => {
    return(
        <div>
            <Button className="btn-margin" block size="lg" variant="primary">Create Backup</Button>
        </div>
    )
}

export const PurgeBackupButton = () => {
    return(
        <Button className="btn-margin" block size="lg"> Purge Backup</Button>
    )
}

export const SearchBackupButton = () => {
    return(
        <Button className="btn-margin" size="lg" block onClick={(event) => (window.location.href = "/search")}> Search Backup</Button>
    )
}

