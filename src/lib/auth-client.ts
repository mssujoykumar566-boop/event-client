"use client";

import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
  baseURL:
    "https://event-server-nvtu.onrender.com/api/auth",

  fetchOptions: {
    credentials: "include",
  },
});