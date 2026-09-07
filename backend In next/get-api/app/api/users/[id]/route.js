import { NextResponse } from "next/server";
import { user } from "@/app/util/db";
export async function GET(request, {params}){
    const data = user;
    const {id} = await params
    
    const userData =  data.filter((item)=>item.id == id)
    
    // console.log(data, id);
    return NextResponse.json(
        userData.length == 0?{result: "No Data found", success: false}: { result: userData[0], success: true},
        {status: 200})
}


export async function PUT(request, { params }) {
    try {
        const payload = await request.json();

        const { userId } = await params;

        console.log("User ID:", userId);
        console.log("Payload:", payload);
        if(!payload.name || !payload.age || !payload.email){
            return NextResponse.json({
                success: false,
                result: "Data is not Valid",
            },
        {
            status: 400
        }
        )
        }
        return NextResponse.json({
            success: true,
            result: "User Updated Successfully",
            userId: userId,
            data: payload
        });

    } catch (error) {
        console.log("PUT ERROR:", error);

        return NextResponse.json(
            {
                success: false,
                error: error.message
            },
            { status: 500 }
        );
    }
}