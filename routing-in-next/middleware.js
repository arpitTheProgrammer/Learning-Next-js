import { NextResponse } from "next/server";
export function middleware(request) {
    if(request.nextUrl.pathname!= "/login"){
                return NextResponse.redirect(new URL("/login", request.url))
    }

    // only about page redirect
}

// Redirect for specific route 

export const config = {
    matcher : "/about/:path*"
}

// Middleware is self executing code which execute before the routing request