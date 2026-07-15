"use client";

import { authClient } from "../../src/lib/auth-client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";

import { Eye, EyeSlash } from "@gravity-ui/icons";
import { toast } from "react-toastify";


type Role = "user" | "organizer";

type RegisterPayload = {
  name: string;
  email: string;
  password: string;
  role?: "user" | "organizer";
};


export default function RegisterPage() {

  const router = useRouter();


  const [showPassword, setShowPassword] =
    useState<boolean>(false);


  const [role, setRole] =
    useState<Role>("user");



  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {

    e.preventDefault();


    const formData =
      new FormData(e.currentTarget);



    const name =
      formData.get("name") as string;


    const email =
      formData.get("email") as string;


    const password =
      formData.get("password") as string;



const payload: RegisterPayload = {
  name,
  email,
  password,
  role,
};


const { error } = await authClient.signUp.email(
  payload
);



    if(error){

      toast.error(error.message);

      return;

    }



    toast.success(
      "Account created successfully"
    );


    router.refresh();

    router.push("/");

  };



  return (
    <main
      className="
      min-h-screen
      flex
      items-center
      justify-center
      bg-gray-50
      px-4
      "
    >
      <div
        className="
        w-full
        max-w-md
        bg-white
        rounded-2xl
        shadow-xl
        border
        p-8
        "
      >
        <div className="text-center mb-8">
          <div
            className="
            mx-auto
            w-14
            h-14
            rounded-xl
            bg-blue-600
            flex
            items-center
            justify-center
            text-white
            text-2xl
            font-bold
            "
          >
            E
          </div>

          <h1
            className="
            text-3xl
            font-bold
            mt-5
            "
          >
            Create Account
          </h1>

          <p className="text-gray-500 mt-2">Join EventSphere today</p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="
          space-y-5
          "
        >
          <div>
            <label className="text-sm font-medium">Full Name</label>

            <input
              name="name"
              required
              placeholder="Enter your name"
              className="
              mt-2
              w-full
              rounded-xl
              border
              px-4
              py-3
              outline-none
              focus:ring-2
              focus:ring-blue-500
              "
            />
          </div>

          <div>
            <label className="text-sm font-medium">Email</label>

            <input
              name="email"
              type="email"
              required
              placeholder="example@gmail.com"
              className="
              mt-2
              w-full
              rounded-xl
              border
              px-4
              py-3
              outline-none
              focus:ring-2
              focus:ring-blue-500
              "
            />
          </div>

          <div>
            <label className="text-sm font-medium">Password</label>

            <div className="relative">
              <input
                name="password"
                required
                type={showPassword ? "text" : "password"}
                placeholder="Create password"
                className="
                mt-2
                w-full
                rounded-xl
                border
                px-4
                py-3
                pr-12
                outline-none
                focus:ring-2
                focus:ring-blue-500
                "
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="
                absolute
                right-4
                top-5
                text-gray-500
                "
              >
                {showPassword ? <EyeSlash /> : <Eye />}
              </button>
            </div>
            <div>
              <label className="text-sm font-medium">Role</label>

              <select
                value={role}
                onChange={(e) => setRole(e.target.value as Role)}
                className="
mt-2
w-full
border
rounded-xl
px-4
py-3
"
              >
                <option value="user">User</option>

                <option value="organizer">Organizer</option>
              </select>
            </div>
          </div>

          <button
            type="submit"
            className="
            w-full
            bg-blue-600
            hover:bg-blue-700
            text-white
            py-3
            rounded-xl
            font-semibold
            transition
            "
          >
            Create Account
          </button>
        </form>

        <p
          className="
          text-center
          text-sm
          text-gray-500
          mt-6
          "
        >
          Already have an account?
          <Link
            href="/login"
            className="
            text-blue-600
            font-semibold
            ml-1
            "
          >
            Login
          </Link>
        </p>
      </div>
    </main>
  );
}