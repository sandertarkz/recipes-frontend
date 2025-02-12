import { NextRequest, NextResponse } from "next/server";
import { privateRoutes, Route } from "@/lib/routes";
import { validateToken } from "@/lib/validate-token";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;

  const tokenValidation = validateToken(token);
  if (
    !tokenValidation.success &&
    privateRoutes.includes(request.nextUrl.pathname as Route)
  ) {
    return NextResponse.redirect(new URL(Route.AuthLogin, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: privateRoutes,
};
