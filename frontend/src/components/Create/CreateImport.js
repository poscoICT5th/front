import React, { useEffect, useState } from 'react'

import CreateImportUpload from './CreateImportUpload'

function CreateImport(props) {
    return (
        <div>
            <CreateImportUpload
                open={props.openCreate}
                setOpen={props.setOpenCreate}
                alertSucOpen={props.alertSucOpen}
                setAlertSucOpen={props.setAlertSucOpen}
                alertFailedOpen={props.alertFailedOpen}
                setAlertFailedOpen={props.setAlertFailedOpen}
                setAlertMessage={props.setAlertMessage}
            />
        </div>
    )
}

export default CreateImport