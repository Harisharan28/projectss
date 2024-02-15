import React from 'react'
import { InfoSection } from '../../components';
import { homeObjOne,homeObjTwo,homeObjThree } from "./Data"
import Testpage from '../Testpage';

function Home() {
    return ( 
        <>
            <InfoSection {...homeObjOne}/>
            <InfoSection {...homeObjTwo}/>
            <InfoSection {...homeObjThree}/>
            <Testpage/>
        </>
    ) 
}

export default Home
