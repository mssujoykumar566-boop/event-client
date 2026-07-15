import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
  baseURL: "https://event-server-nvtu.onrender.com/api/auth",

  user: {
    additionalFields: {
      role: {
        type: "string",
      },
    },
  },
   fetchOptions: {
    credentials: "include",
  },
});