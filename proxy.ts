import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export function proxy(request: NextRequest) {
    return NextResponse.redirect(new URL('/pages/apply', request.url))
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: '/pages/apply',
    //matcher: '/pages/:path*',
}