import { NextResponse } from "next/server";

export async function GET(request){
    return NextResponse.json({name: "Arpit", Age: 21, City: "Varanasi"},{status: 200})
}