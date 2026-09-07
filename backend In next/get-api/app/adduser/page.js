"use client"
import { useState } from 'react'
import '../style.css'
const Page = () => {
    const [name, setName] = useState("");
    const[age, setAge] = useState("");
    const[email, setEmail] = useState("");
    const addUser = async() =>{
        // console.log(name, age, email);
        let response = await fetch("http://localhost:3000/api/users", {
            method: "Post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({name, age, email})
        })
        response = await response.json()
        if(response.success){
            alert("new User Added")
        } else{
            alert("Some Error")
        }
        console.log(response);
        
    }
    return(
        <>
        <div className="container">
            <h1>Add new User</h1>
            <input type="text" value={name} placeholder="Enter Name" onChange={(e) => setName(e.target.value)}/>
            <input type="text" value={age} placeholder="Enter Age" onChange={(e) => setAge(e.target.value)}/>
            <input type="text" value={email} placeholder="Enter Email" onChange={(e) => setEmail(e.target.value)}/>
            <button className='btn' onClick={addUser}>Add User</button>
        </div>
        </>
    )
}

export default Page