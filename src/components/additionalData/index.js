import {collection,getDocs}from "firebase/firestore"
import { useEffect,useState,useContext } from "react"
import {GlobalInfo} from "../../App"
import {db} from "../../configuration/firebase"
 import "./index.css"
 import Header from "../../components/Header"

 const AdditionalData=()=>{
    const [finalList,setPunch2]=useState([])
   
    const {value}=useContext(GlobalInfo)
    const digits = value

    const[presentTime,setPresent]=useState(new Date().toLocaleString())


    const taskData=collection(db,"dailytasks")
   
 

    useEffect(()=>{
        const getData2=async()=>{
            try{
                const data=await getDocs(taskData)
                const filterdData=data.docs.map((doc)=>({
                    ...doc.data(),
                    id:doc.id,
                   }));
                   setPunch2(filterdData)
            }catch(error){
                console.error(error)
            }
        }
        getData2()
    },[taskData])





    return(
        <div className="additionalContainer2">
            <Header/>
            <p>{digits} to {presentTime}</p>
            {finalList.map(eachItem=>
                <div key={eachItem.id} className="cardData">
         <div>
                    <p className="titleColor">Title:</p>
                <p>{eachItem.Title}</p>
                <p className="titleColor">Description:</p>
                <p>{eachItem.Description}</p>
                </div>
               
                </div>

                )}



        </div>
    )
 }

 export default AdditionalData