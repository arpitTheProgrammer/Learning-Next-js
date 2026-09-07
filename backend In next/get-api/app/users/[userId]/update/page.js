"use client"

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import "./../../../style.css"
const page = () => {
    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const [email, setEmail] = useState("")
    const { userId } = useParams();
    useEffect(()=>{
        getUserDetails()
    },[])
    const getUserDetails = async ()=>{
        let data = await fetch("http://localhost:3000/api/users/"+userId)
        data = await data.json()
        setName(data.result.name)
        setAge(data.result.age)
        setEmail(data.result.email)
    }
    const UpdateUser = async() => {
        let result = await fetch("http://localhost:3000/api/users/"+userId, {
            method:"PUT",
            body: JSON.stringify({name, age, email})
        })
        result = await result.json()
        console.log(result);
        if(result.success){
            alert("User Information Updated")
        } else{
            alert("Please try with Valid Input")
        }
    }
    return(
        <>
            <div className="container">
                <h1>Update User Info</h1>
                <input type="text" className="input-field" value={name} placeholder="Enter Name" onChange={(e)=> setName(e.target.value)}/>
                <input type="text" className="input-field" value={age} placeholder="Enter Name" onChange={(e)=> setAge(e.target.value)}/>
                <input type="text" className="input-field" value={email} placeholder="Enter Name" onChange={(e)=> setEmail(e.target.value)}/>
                <button className="btn" onClick={UpdateUser}>Update</button>
            </div>
        </>
    )
}

export default page