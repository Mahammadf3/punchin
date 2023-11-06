
import Header from "../Header"
import {Link} from "react-router-dom"


import "./index.css"

const Home=()=>{

    return(
        <div className="homeContainer">
            <Header/>
            <div className="welcomeContainer">
                <h1>Welcome to the Today's World</h1>
       
            </div>
            <div className="punchContainer1">
                <p className="start">Start your Today's Goal</p>
                <div>
                    <Link to="/punch-In">
                <button type="button" className="punchButton">Punch-In</button>
                </Link>
                <Link to="/punchOut">
                <button type="button" className="punchButton">punch-out</button>
                </Link>
                </div>
               

                </div>
            
        </div>
    )
}

export default Home