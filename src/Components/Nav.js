import '../css/Nav.css'
import { Link } from 'react-router-dom';
function Nav()
{
    return(
        <nav>
            <ul>
                <Link to='/'><li>Home</li></Link>
                <Link to='/Log'><li>Login</li></Link>
                <Link to='/Sign'><li>Signup</li></Link>
            </ul>
        </nav>
    )
}
export default Nav;