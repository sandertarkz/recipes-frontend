import { decodeJwt } from "./decode-jwt";

type ValidationResult = {
  success?: boolean;
  maxAge?: number;
  error?: { message: string; status: number };
};

export function validateToken(token?: string): ValidationResult {
  if (!token) {
    return errorResponse("Token is missing", 400);
  }

  const tokenPayload = decodeJwt(token);
  const exp = tokenPayload?.exp;

  if (!exp) {
    return errorResponse("Token is missing an expiration date", 500);
  }

  const maxAge = exp - Math.floor(Date.now() / 1000);
  return maxAge > 0
    ? { success: true, maxAge }
    : errorResponse("Token is expired", 401);
}

function errorResponse(message: string, status: number): ValidationResult {
  return { error: { message, status } };
}
