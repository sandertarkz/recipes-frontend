"use client"; // ✅ Client component required for event handlers

import { logout } from "@/actions/auth";

export function ProfilePage() {
  return (
    <div>
      <h1>Profile</h1>
      <form action={logout}>
        <button type="submit">Logout</button>
      </form>
    </div>
  );
}
