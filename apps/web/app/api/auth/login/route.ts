import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { authApi } from "@workspace/api";
import { decodeJwt } from "@/lib/decodeJWT";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const res = await authApi.createUserLoginPost({ userLogin: body });
    // External API returns a token (JWT)
    const token = res.accessToken;

    const tokenPayload = decodeJwt(token);

    if (!tokenPayload || !tokenPayload.exp) {
      return NextResponse.json(
        { error: "Invalid token format" },
        { status: 500 },
      );
    }

    const maxAge = tokenPayload.exp - Math.floor(Date.now() / 1000);
    if (maxAge <= 0) {
      return NextResponse.json(
        { error: "Token is already expired" },
        { status: 401 },
      );
    }

    const cookieStore = await cookies();
    cookieStore.set("token", token, {
      httpOnly: true,
      secure: false, // TODO: Set to true in prod
      path: "/",
      sameSite: "lax",
      maxAge,
    });

    // Return success
    return NextResponse.json({ success: true });
  } catch (error: any) {
    const errorData = await error?.response?.json();
    return NextResponse.json(
      { error: "Something went wrong", details: errorData?.detail },
      { status: error?.response?.status || 500 },
    );
  }
}
