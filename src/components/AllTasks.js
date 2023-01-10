import "./AllTasks.css"
import data from "../data"
import {useState} from 'react'

const AllTasks = ()=>{
    const [text,setText] = useState("Vymaž vše")
    const [myTasks,setMyTasks] = useState(data)

    const buttonHandler = (myId)=>{
        const filteredTasks = myTasks.filter((one)=>{
            return one.id !== myId
        })
        
        setMyTasks(filteredTasks)
    }

    const eraserHandler = ()=>{
        setMyTasks([])
        setText("Vše vymazáno")
        
    }


    return(
        <div className="all-task-wrapper">
            
            {
            myTasks.map((one)=>{
                const {id,name} = one

                return <div className="one-task" key={id}>
                    <h3>{name}</h3>
                    <button onClick={()=>buttonHandler(id)}>Vymazat</button>
                   
                </div>
            })
            }
           
            <button className="eraser-btn" onClick={eraserHandler}>{text}</button>

            {/* {data.map((one)=>{
                return <div>
                    <h3>{one.name}</h3>
                </div>
            })} */}
            
        </div>
    )
}

export default AllTasks