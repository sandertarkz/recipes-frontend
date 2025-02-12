import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { authApi } from "@workspace/api";
import { validateToken } from "@/lib/validate-token";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const res = await authApi.createUserLoginPost({ userLogin: body });
    const token = res.accessToken;
    const tokenValidation = validateToken(token);
    if (tokenValidation.error) {
      return NextResponse.json(
        { error: tokenValidation.error },
        { status: tokenValidation.error.status },
      );
    }

    const cookieStore = await cookies();
    cookieStore.set("token", token, {
      httpOnly: true,
      secure: false, // TODO: Set to true in prod
      path: "/",
      sameSite: "lax",
      maxAge: tokenValidation.maxAge,
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
