
import Why from './main/Why'
import How from './main/How'
import Demo from './main/Demo'
import Navbar from './Navbar'
import { useState } from 'react';

import '../style/Main.css'

const Main = () => {
    const [chosenPage, changeChosenPage] = useState('why')
    const pagesDict = {
        'why': <Why />,
        'how': <How />,
        'demo': <Demo />
    }

    return (
        <div className="main">
            <Navbar changeChosenPage={changeChosenPage} chosenPage={chosenPage} />
            {pagesDict[chosenPage]}
        </div>
    )
}

export default Main