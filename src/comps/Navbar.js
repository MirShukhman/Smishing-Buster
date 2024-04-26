
import '../style/Navbar.css'

const Navbar = (props) => {
    const { changeChosenPage } = props

    return (
        <nav className='navbar'>
            <button onClick={() => changeChosenPage('why')}>Why?</button>
            <button onClick={() => changeChosenPage('how')}>How?</button>
            <button onClick={() => changeChosenPage('demo')}>Demo</button>
        </nav>
    )
}

export default Navbar