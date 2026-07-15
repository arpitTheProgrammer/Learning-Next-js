"use client"
import {use} from 'react'

export default function Lecture({params}){
    const studyParam = use(params)
    console.log(studyParam)
    return(
        <div>
            <h1>{studyParam.lecture[0]}</h1>
            <h2>{studyParam.lecture[1]}</h2>
        </div>
    )
}