import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'

function useCheckURL() {
    const [nowURL, setnowURL] = useState("")
    setnowURL(useLocation().pathname)
    return nowURL
}

export default useCheckURL