import { auth } from "@/lib/auth";
import { NextResponse } from "next/server";
import { PUBLIC_ROUTES, ROOT } from "./lib/routes";

export default auth(async (req) => {
  const { nextUrl } = req;
  const session = await auth();
  const isAuthenticated = !!session?.user;
  const isPublicRoute =
    PUBLIC_ROUTES.find((route) => nextUrl.pathname.startsWith(route)) ||
    nextUrl.pathname === ROOT;

  if (!isAuthenticated && !isPublicRoute) {
    return NextResponse.redirect(new URL("/?error=unauthenticated", req.url));
  }
});

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
