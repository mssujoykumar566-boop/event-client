"use client";

import { authClient } from "@/src/lib/auth-client";

type User = {
  id?: string;
  name: string;
  email: string;
  role?: "user" | "organizer" | "admin";
  createdAt?: Date;
};

export default function ProfilePage() {
  const { data: session, isPending } = authClient.useSession();

  const user = session?.user as User | undefined;

  if (isPending) {
    return <p className="p-6">Loading profile...</p>;
  }

  if (!user) {
    return <p className="p-6 text-gray-500">User not logged in</p>;
  }

  return (
    <div className="space-y-6">
      <h1
        className="
        text-3xl
        font-bold
        "
      >
        My Profile
      </h1>

      <div
        className="
        bg-white
        border
        rounded-2xl
        shadow-sm
        p-6
        max-w-xl
        "
      >
        <div className="space-y-4">
          <div>
            <p className="text-gray-500">Name</p>

            <p className="font-semibold text-lg">{user.name}</p>
          </div>

          <div>
            <p className="text-gray-500">Email</p>

            <p className="font-semibold text-lg">{user.email}</p>
          </div>

          <div>
            <p className="text-gray-500">Role</p>

            <span
              className="
              inline-block
              mt-1
              bg-blue-100
              text-blue-700
              px-3
              py-1
              rounded-full
              font-medium
              "
            >
              {user.role || "user"}
            </span>
          </div>

          <div>
            <p className="text-gray-500">Joined Date</p>

            <p className="font-semibold">
              {user.createdAt
                ? new Date(user.createdAt).toLocaleDateString()
                : "Not available"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
