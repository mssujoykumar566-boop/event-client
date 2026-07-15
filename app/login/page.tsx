"use client";

import { authClient } from "@/src/lib/auth-client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";

import { Eye, EyeSlash } from "@gravity-ui/icons";
import { toast } from "react-toastify";

export default function LoginPage() {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const { data, error } = await authClient.signIn.email({
      email,

      password,
    });

    if (error) {
      toast.error(error.message);

      return;
    }

    if (data) {
      toast.success("Login successful");

      // window.location.href = "/";
     router.push("/dashboard");
      router.refresh();
    }
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
            Welcome Back
          </h1>

          <p className="text-gray-500 mt-2">
            Login to your EventSphere account
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="
          space-y-5
          "
        >
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
                placeholder="Enter password"
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
            Login
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
          Dont have an account?
          <Link
            href="/register"
            className="
            text-blue-600
            font-semibold
            ml-1
            "
          >
            Register
          </Link>
        </p>
      </div>
    </main>
  );
}
