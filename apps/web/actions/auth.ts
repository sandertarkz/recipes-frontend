"use server";

import { validateToken } from "@/lib/validate-token";
import { cookies } from "next/headers";
import { Route } from "@/lib/routes";
import { redirect } from "next/navigation";
import { authApi, UserLogin } from "@workspace/api";
import { decodeJwt, JwtPayload } from "@/lib/decode-jwt";

export async function login(userLogin: UserLogin) {
  try {
    const res = await authApi.createUserLoginPost({ userLogin });
    const token = res.data.access_token;
    const tokenValidation = validateToken(token);

    if (tokenValidation.error) {
      return {
        error: tokenValidation.error.message,
        status: tokenValidation.error.status,
      };
    }
    const cookieStore = await cookies();
    cookieStore.set("token", token, {
      httpOnly: true,
      secure: false, // TODO: Set to true in prod
      path: "/",
      sameSite: "lax",
      maxAge: tokenValidation.maxAge,
    });

    return { success: true };
  } catch (error: any) {
    return {
      success: false,
      response: {
        data: error.response.data,
      },
    };
  }
}

export async function logout() {
  const cookieStore = await cookies();
  cookieStore.set("token", "", {
    httpOnly: true,
    path: "/",
    maxAge: 0,
  });

  redirect(Route.AuthLogin);
}

export type Session = { token: string; payload: JwtPayload } | null;

export async function getSession(): Promise<Session> {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;
  const tokenValidation = validateToken(token);
  if (!token || !tokenValidation.success) {
    return null;
  }
  const tokenPayload = decodeJwt(token as string);
  return {
    token: token,
    payload: tokenPayload as JwtPayload,
  };
}
