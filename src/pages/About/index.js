import React from 'react'
import { InfoSection } from '../../components';
import { aboutObjTwo,aboutObjImgTwo} from "./data"

function Testpage() {
    return ( 
        <>
            
            <InfoSection {...aboutObjTwo} id="about" />
            <InfoSection {...aboutObjImgTwo}/>
        </>
    ) 
}

export default Testpage
