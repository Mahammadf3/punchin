import {collection,getDocs,doc,updateDoc}from "firebase/firestore"
import {useEffect,useState} from "react"
import {db} from "../../configuration/firebase"
import Header from "../Header"






import "./index.css"
const PunchOut=()=>{

 
    const[punchList,setPunch]=useState([])

    const taskData=collection(db,"dailytasks")


    useEffect(()=>{
        const getData=async()=>{
            try{
                const data=await getDocs(taskData)
                const filterdData=data.docs.map((doc)=>({
                    ...doc.data(),
                    id:doc.id,
                   }));
                   setPunch(filterdData)
            }catch(error){
                console.error(error)
            }
        }
        getData()
    },[taskData])

    const updateData=async(id,currentStatus)=>{
const updateStatus=doc(db,"dailytasks",id);
await updateDoc(updateStatus,{Status:!currentStatus})

    }


    

    return(
    <div className="punchOutContainer">
        <Header/>
     
        {punchList.map(eachItem=>
            <div key={eachItem.id} className="punchCardContainer">
                <div>
                    <p className="titleColor">Title:</p>
                <p>{eachItem.Title}</p>
                <p className="titleColor">Description:</p>
                <p>{eachItem.Description}</p>
                </div>
          
                <button type="button" className="completeButton" onClick={() => updateData(eachItem.id,eachItem.Status)} > {eachItem.Status ? "Completed" : "Yet To Complete"}</button>
            </div>
                )}
    </div>)
}

export default PunchOut