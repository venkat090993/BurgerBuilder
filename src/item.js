import React from "react";

const Item =(props)=>{
    const names = ["Latches", "Rails", "TubeConnector"]
        return(
            <div>
                <select onChange={(event)=>{props.changeNameHandler(event)}}>
                {names.map(name=>(
                    <option>{name}</option>
                ))}
                </select>
                <div>{props.rate}</div>
                <input type="number" onChange={(event)=>{props.change(event)}}></input>
                <div>{props.total}</div>
            </div>
        )
}

export default Item;