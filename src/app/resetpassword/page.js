"use client";
import Link from "next/link";
import { useForm } from "react-hook-form";
import Cookie from "js-cookie";
import { useRouter } from "next/navigation";

const ResetPassword = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm();
  const handleLogin = async (data) => {
    const res = await fetch(
      `https://61bd2c58d8542f0017824b65.mockapi.io/api/v1/users?email=${data.email}`,
      {
        method: "GET",
        headers: { "content-type": "application/json" },
      }
    );
    const result = await res.json();
    const user = result[0];
    if (user) {
      const resetPassword = await fetch(
        `https://61bd2c58d8542f0017824b65.mockapi.io/api/v1/users/${user.id}`,
        {
          method: "PUT",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ password: data?.newPassword }),
        }
      );
      console.log("Password reset successfully");
    } else {
      console.log("Something went wrong");
    }
  };
  return (
    <div className="h-[100vh] p-4 md:p-0 w-[100vw] flex items-center justify-center">
      <div
        className="min-h-[500px] max-h-full bg-white border-2  shadow-2xl 
      w-[500px] rounded-3xl p-4"
      >
        <div className="flex justify-center">
          <h1 className="text-3xl md:texl-2xl lg:text-xl font-bold">
            Reset Password
          </h1>
        </div>
        <div className="mt-10">
          <form
            onSubmit={handleSubmit(handleLogin)}
            className="flex flex-col gap-5"
          >
            <input
              {...register("email", {
                required: true,
                pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
              })}
              type="email"
              placeholder="Email"
              className="p-4 rounded-3xl outline-none border"
            />
            {errors.email?.type === "required" && (
              <span className="flex text-red-500 text-xs px-2">
                Email is required
              </span>
            )}
            {errors.email?.pattern === "required" && (
              <span className="flex text-red-500 text-xs px-2">
                Email is invalid
              </span>
            )}
            <input
              {...register("newPassword", {
                // required: true,
              })}
              type="password"
              placeholder="New Password"
              className="p-4 rounded-3xl outline-none border"
            />
            {errors.newPassword?.type === "required" && (
              <span className="flex text-red-500 text-xs px-2">
                New Password is required
              </span>
            )}

            <button
              type="submit"
              className="bg-black text-white rounded-3xl p-4"
            >
              Change password
            </button>
            <Link
              href="/"
              className="font-semibold p-4  rounded-3xl bg-orange-400 text-center text-white"
            >
              Back to home
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
