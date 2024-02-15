import React from 'react'
import { InfoSection } from '../components';
import { homeObjFour } from "../pages/HomePage/Data"

function Testpage() {
    return ( 
        <>
            
            <InfoSection {...homeObjFour}/>
        </>
    ) 
}

export default Testpage
