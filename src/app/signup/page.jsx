"use client";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

const Signin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm();
  const router = useRouter();
  const handleRegister = async (data) => {
    const res = await fetch(
      "https://61bd2c58d8542f0017824b65.mockapi.io/api/v1/users",
      {
        method: "POST",
        headers: { "content-type": "application/json" },
        // Send your data in the request body as JSON
        body: JSON.stringify(data),
      }
    );
    const result = await res.json();
    if (result) {
      alert("Successfully registered");
      router.push("/signin");
    } else {
      alert("Something went wrong");
    }
  };
  return (
    <div className="h-[100vh] p-4 md:p-0 w-[100vw] flex items-center justify-center">
      <div
        className="min-h-[500px] max-h-full bg-white border-2  shadow-2xl 
      w-[500px]  rounded-3xl p-4"
      >
        <div className="flex justify-center">
          <h1 className="text-3xl md:texl-2xl lg:text-xl font-bold">Sign up</h1>
        </div>
        <div className="mt-10">
          <form
            onSubmit={handleSubmit(handleRegister)}
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
              {...register("username", {
                required: true,
              })}
              type="text"
              placeholder="Username"
              className="p-4 rounded-3xl outline-none border"
            />
            {errors.username?.type === "required" && (
              <span className="flex text-red-500 text-xs px-2">
                Username is required
              </span>
            )}
            <input
              {...register("password", {
                required: true,
              })}
              type="password"
              placeholder="Password"
              className="p-4 rounded-3xl outline-none border"
            />
            {errors.password?.type === "required" && (
              <span className="flex text-red-500 text-xs px-2">
                Password is required
              </span>
            )}

            <button
              type="submit"
              className="bg-black text-white rounded-3xl p-4"
            >
              Register
            </button>
            <Link
              href="/signin"
              className="p-4 rounded-3xl border-2 flex justify-center"
            >
              Login
            </Link>
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

export default Signin;
