import jwt, { JwtPayload } from "jsonwebtoken";
import { cookies } from "next/headers";
import { NextResponse, type NextRequest } from "next/server";
import { getDefaultDashboardRoute, getRouteOwner, isAuthRoute, UserRole } from "./lib/auth-utils";

// This function can be marked `async` if using `await` inside
export async function proxy(request: NextRequest) {
  const cookieStore = await cookies();

  const pathname = request.nextUrl.pathname;
  console.log("pathName", pathname);

  const accessToken = cookieStore.get("accessToken")?.value || null;
  console.log("Access Token:", accessToken);

  let userRole: UserRole | null = null;

  const jwtSecret = process.env.JWT_SECRET as string;
  if (!jwtSecret) {
    throw new Error("JWT_SECRET is not defined in environment variables");
  }

  // Token verification with better error handling
  if (accessToken) {
    try {
      const verifiedToken: JwtPayload | string = jwt.verify(accessToken, jwtSecret);
      console.log("Verified Token:", verifiedToken);

      if (typeof verifiedToken === "string") {
        cookieStore.delete("accessToken");
        cookieStore.delete("refreshToken");
        return NextResponse.redirect(new URL(`/login?redirect=${encodeURIComponent(pathname)}`, request.url));
      }
      userRole = verifiedToken.role;
    } catch (error) {
      console.log("Token verification failed:", error);
      cookieStore.delete("accessToken");
      cookieStore.delete("refreshToken");
      return NextResponse.redirect(new URL(`/login?redirect=${encodeURIComponent(pathname)}`, request.url));
    }
  }

  const routeOwner = getRouteOwner(pathname);
  const isAuth = isAuthRoute(pathname);

  /* Rule-Based Approach */

  // Rule 1: Logged-in user trying to access auth routes → redirect to dashboard
  if (accessToken && isAuth) {
    return NextResponse.redirect(new URL(getDefaultDashboardRoute(userRole as UserRole), request.url));
  }

  // Rule 2: Public routes → allow access to everyone
  if (routeOwner === null) {
    return NextResponse.next();
  }

  // Rule 3: Protected common routes → require authentication
  if (routeOwner === "COMMON") {
    if (!accessToken) {
      return NextResponse.redirect(new URL(`/login?redirect=${encodeURIComponent(pathname)}`, request.url));
    }
    return NextResponse.next();
  }

  // Rule 4: Role-specific routes → check role matching
  if (routeOwner === "ADMIN" || routeOwner === "DOCTOR" || routeOwner === "PATIENT") {
    if (!accessToken) {
      return NextResponse.redirect(new URL(`/login?redirect=${encodeURIComponent(pathname)}`, request.url));
    }
    if (userRole !== routeOwner) {
      return NextResponse.redirect(new URL(getDefaultDashboardRoute(userRole as UserRole), request.url));
    }
    return NextResponse.next();
  }

  // Default: Allow access
  return NextResponse.next();
}

// used negative matching to exclude paths from middleware
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|.well-known).*)",
  ],
};
