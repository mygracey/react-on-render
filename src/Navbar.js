import {Link} from 'react-router-dom'
import "./App.css"

function Navbar(){

    return (
        <div className="navbar">
            <ul>
                <Link to="/" className='list'>Home</Link>
                <Link to="/about" className='list'>About</Link>
                <Link to="/services" className='list'>Services</Link>
                
            </ul>
        </div>
    )

}

export default Navbar