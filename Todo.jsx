import {useState}  from "react";
import "./todo.css";
function Todo()
{
    const [value,setValue] = useState("");
    const [list,setList] = useState([]);
    const handleInput = (e)=> {
        setValue(e.target.value);
    };
    const handleClick =()=>{
        if(value.trim())
        {
        setList([...list,value]);
        setValue("");
        }
    };
    const handleDlt=(index)=>{
        const newList=[...list];
        newList.splice(index,1);
        setList(newList);
    }
    const handleKeyPress=(e) =>{
        if(e.key==="Enter"){
            handleClick();
        }
    }
    return(
    <div className="blk">
        <h1 className="heading">Todo List</h1>
        <input
             type="text"
             placeholder="Enter the text" 
             value={value} 
             onChange={handleInput} 
             className="input" 
             onKeyPress={handleKeyPress}/>
        <button onClick={handleClick} className="btn">Add</button>
        <div className="List">
            {list.map((item,index)=>(
                <div className="litem">
                    <div key={index} >{item}</div>
                    <div className="dlt" onClick={()=>handleDlt(index)}>x</div>
                </div>
        ))}
        </div>
        {list.length===0 ? "The list is empty!":""}
    </div>
    );
}
export default Todo;