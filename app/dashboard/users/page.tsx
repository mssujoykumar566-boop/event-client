"use client";

import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const API_URL = "/api";

type User = {
  _id: string;
  name: string;
  email: string;
  role?: string;
};

export default function ManageUsersPage() {
  const [users, setUsers] = useState<User[]>([]);

  const [loading, setLoading] = useState(true);

  // get users

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await fetch(`${API_URL}/admin/users`, {
          credentials: "include",
          cache: "no-store",
        });

        const data = await res.json();

        console.log(data);

        setUsers(data.users || []);
      } catch (error) {
        toast.error("Failed to load users");
      } finally {
        setLoading(false);
      }
    };

    getUsers();
  }, []);

  // update role

  const updateRole = async (id: string, role: string) => {
    try {
      const res = await fetch(`${API_URL}/admin/users/${id}/role`, {
        method: "PATCH",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          role,
        }),
      });

      const data = await res.json();

      if (data.success) {
        toast.success("Role updated");

        setUsers(
          users.map((user) =>
            user._id === id
              ? {
                  ...user,
                  role,
                }
              : user,
          ),
        );
      }
    } catch (error) {
      toast.error("Failed to update role");
    }
  };

  // delete user

  const deleteUser = async (id: string) => {
    const confirmDelete = confirm("Delete this user?");

    if (!confirmDelete) return;

    const res = await fetch(
      `${API_URL}/admin/users/${id}`,

      {
        method: "DELETE",

        credentials: "include",
      },
    );

    const data = await res.json();

    if (data.success) {
      toast.success("User deleted");

      setUsers(users.filter((user) => user._id !== id));
    } else {
      toast.error(data.message);
    }
  };

  if (loading) {
    return <p className="p-6">Loading users...</p>;
  }

  return (
    <div
      className="
space-y-6
"
    >
      <h1
        className="
text-3xl
font-bold
"
      >
        Manage Users
      </h1>

      <div
        className="
bg-white
border
rounded-xl
overflow-hidden
"
      >
        <table
          className="
w-full
"
        >
          <thead
            className="
bg-gray-100
"
          >
            <tr>
              <th className="p-4 text-left">Name</th>

              <th className="p-4 text-left">Email</th>

              <th className="p-4 text-left">Role</th>

              <th className="p-4">Action</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr
                key={user._id}
                className="
border-t
"
              >
                <td className="p-4">{user.name}</td>

                <td className="p-4">{user.email}</td>

                <td className="p-4">
                  <select
                    value={user.role || "user"}
                    onChange={(e) => updateRole(user._id, e.target.value)}
                    className="
border
rounded-lg
px-3
py-2
"
                  >
                    <option value="user">User</option>

                    <option value="organizer">Organizer</option>

                    <option value="admin">Admin</option>
                  </select>
                </td>

                <td
                  className="
p-4
text-center
"
                >
                  <button
                    onClick={() => deleteUser(user._id)}
                    className="
bg-red-500
hover:bg-red-600
text-white
px-4
py-2
rounded-lg
"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
