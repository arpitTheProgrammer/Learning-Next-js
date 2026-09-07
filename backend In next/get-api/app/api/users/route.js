import { NextResponse } from "next/server";
import { user } from "@/app/util/db";

//Ge responce
export function GET(){
    const data = user;
    return NextResponse.json(data, {status: 200})
}


// Post responce 
export async function POST(request){
    let payload = await request.json()
    if(!payload.name){
        return NextResponse.json({result: "Name Not Found"}, {status: 404})
    }
    console.log(payload);
    return NextResponse.json({
        success: true,
        result: "User Added Successfully",
        data: payload
    });
}

