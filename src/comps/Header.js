
import '../style/Header.css'

const Header = () => {
    return (
        <div className="header">
            <div className="logo"></div>
            <div className="header-text">
                <p id='title'>Smishing Buster</p>
                <p id='sapir'>Sapir Academic College</p>
                <p id='department'>Department of Computer Science</p>
                <p id='names'>Project By: Artyom Generalov and Itamar Abir</p>
                <p id='prof'>Supervised By: Dr. Nurit Gal-Oz</p>
            </div>
        </div>
    )
}

export default Header