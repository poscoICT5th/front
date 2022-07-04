import React, { useEffect, useState } from 'react'

import CreateImportUpload from './CreateImportUpload'

function CreateImport(props) {
    return (
        <div>
            <CreateImportUpload
                open={props.openCreate}
                setOpen={props.setOpenCreate}
            />
        </div>
    )
}

export default CreateImport