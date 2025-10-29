// middleware.ts (or middleware.js) - Place this at the root of your Next.js project
import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

// Define route matchers for different types of routes
const isPublicRoute = createRouteMatcher([
    '/',
    '/sign-in(.*)',
    '/sign-up(.*)',
    '/api/webhooks(.*)', // Clerk webhooks are public
])

const isProtectedRoute = createRouteMatcher([
    '/pages/apply(.*)',
])

const isAdminRoute = createRouteMatcher(['/admin(.*)'])

export default clerkMiddleware(async (auth, req) => {
    // Allow public routes without checks
    if (isPublicRoute(req)) return

    // Protect user routes: require authentication
    if (isProtectedRoute(req)) {
        await auth.protect() // Redirects to sign-in if not authenticated
    }

    // Protect admin routes: require authentication + specific permission
    if (isAdminRoute(req)) {
        await auth.protect((has) => {
            // Example: Check for 'org:admin' permission in any organization
            return has({ permission: 'org:admin' })
        })
    }

    // Optional: Custom logic for other routes (e.g., API keys for backend)
    // if (req.nextUrl.pathname.startsWith('/api')) {
    //   await auth.protect({ token: 'api_key' })
    // }
})

export const config = {
    matcher: [
        // Match all paths except static files, images, and Next.js internals
        '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
        // Always match API routes
        '/(api|trpc)(.*)',
    ],
}