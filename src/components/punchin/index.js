import {useState} from "react"
import "./index.css"
import {db} from "../../configuration/firebase.js"
import {collection,addDoc} from "firebase/firestore"
import Header from "../Header"
import {Link} from "react-router-dom"



const Home=()=>{


    const companyCollection=collection(db,"dailytasks");

    const [task,setTask]=useState("")
    const [description,setDescription]=useState("")
    const[bool,setBoolean]=useState(false) 
  




    const onSubmit = async () => {
      
          await addDoc(companyCollection, {
            Title: task,
            Description: description,
            Status: bool,
            
      
          });
          
          setTask("");
          setDescription("");
        
      };
    const setTitle=(event)=>{
setTask(event.target.value)
    }

    const setArea=event=>{
        setDescription(event.target.value)
    }

    return(
        <div className="punchFormate">
            <Header/>
        <div className="punchForm" >
            <p className="name">TaskName:</p>
            <input type="text" placeholder="Enter The Task Here" className="textName" onChange={setTitle} value={task}/>
            <p className="name">Description of The Task</p>
            <textarea rows="10"cols="50" className="areaText" onChange={setArea} value={description} placeholder="describe about your task">

            </textarea>
            <div className="btnStyles">
            <button type="button" className="saveButton" onClick={onSubmit}>Save</button>
            <Link to="/punchOut" className="hello">
            <button type="button" className="saveButton" >punch-Out</button>
            </Link>
            </div>
           
        </div>
        </div>
    )
}

export default Home