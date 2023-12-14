import Nav from "./Nav";
import '../css/Sign.css'
import {Link} from 'react-router-dom'


function Sign()
{
    return(
        <div className="hi">
            <div className="nav">
                <Nav/>
            </div>
            <div className="main1">
                <h1>SIGNUP</h1>
                <br/>
                <div>  
                <input type="Name" placeholder="Name"/>
                </div>
                <div>   
                <input type="dob" placeholder="DOB"/>
                </div>
                <div>   
                <input type="email" placeholder="Email"/>
                </div>
                <div>  
                <input type="phone" placeholder="Phone"/>
                </div>
                <div>   
                <input type="password" placeholder="Password"/>
                </div>
                <p>  </p>
                <p>  </p>
                <button>
                    <Link to='/Log'>
                        signup
                    </Link>
                </button>
                <p>
                <Link to='/Log'>
                    Alrady have an account
                </Link>
                </p>
            </div>
        </div>
    )
}
export default Sign;