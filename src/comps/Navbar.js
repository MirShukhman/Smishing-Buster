
import '../style/Navbar.css'

const Navbar = (props) => {
    const { changeChosenPage, chosenPage } = props;

    return (
        <nav className='navbar'>
            <button id={chosenPage === 'why' ? 'chosen-page' : undefined}
                onClick={() => changeChosenPage('why')}>Why?</button>

            <button id={chosenPage === 'how' ? 'chosen-page' : undefined}
                onClick={() => changeChosenPage('how')}>How?</button>

            <button id={chosenPage === 'demo' ? 'chosen-page' : undefined}
                onClick={() => changeChosenPage('demo')}>Demo</button>
        </nav>
    )
}

export default Navbar