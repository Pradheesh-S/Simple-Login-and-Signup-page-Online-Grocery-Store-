import Nav from "./Nav";
import '../css/Log.css'
import {Link} from 'react-router-dom'

function Log()
{
    return(
            <div className="log">
            <div className="nav">
            < Nav/>
            </div>
            <div className="main">
                <h1>LOGIN</h1>
                <br/>
                <div>
                <input type="email" placeholder="Email or Number"/>
                </div>
                <div>
                    <p>  </p>
                <input type="password" placeholder="Password"/>
                </div>
                <button className="mainb">
                    <Link to='/'>
                        login
                    </Link>
                </button>
                <p className="u1">
                    <Link to='/Sign'>
                        create a account
                    </Link>
                </p>
            </div>
        </div>
    )
}
export default Log;