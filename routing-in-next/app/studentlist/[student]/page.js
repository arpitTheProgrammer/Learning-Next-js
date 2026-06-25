"use client"
import {use} from 'react'
export default function StudentDetail({params}){

    // react use method used in dynamic Routing in Next JS
    const studentParams = use(params)
    console.log(studentParams)
    return(
        <div>
            <h1>Student Detail</h1>
            <h3>Name : {studentParams.student}</h3>
        </div>
    )
}