import {Link} from "react-router-dom"


import "./index.css"


const Header=()=>{




    return(
        <div className="headerContainer">
            <img src="https://signupbc.com/sign_up_logo.png" alt="logo" className="signupbcLogo"/>
            <div className="additionalContainer">
            <Link to="/" className="complete">Home</Link>
            <Link to="/taskCompletd" className="complete">completed Tasks</Link>
            </div>
           
            <div className="contactInfo">
                <p>Name:Mahammad Shaik</p>
                <p>ContNo:8501885725</p>
                
            </div>
        </div>
    )
}

export default Header