
import Why from './main/Why'
import How from './main/How'
import Demo from './main/Demo'

const Main = (props) => {
    const { chosenPage } = props
    const pagesDict = {
        'why': <Why />,
        'how': <How />,
        'demo': <Demo />
    }

    return (
        <div className="main">
            {pagesDict[chosenPage]}
        </div>
    )
}

export default Main