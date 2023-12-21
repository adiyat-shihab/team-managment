import { message } from "antd";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { authContext } from "../context/AuthProvider.jsx";
import { useForm } from "react-hook-form";

export const Login = () => {
  const { login } = useContext(authContext);

  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
    await login(data.email, data.password).then(() => {
      message.success("Account Login successfully");
    });
  };
  return (
    <>
      <div className="h-screen font-deca md:flex">
        <div className="relative overflow-hidden md:flex w-1/2 bg-gradient-to-tr from-blue-800 to-purple-700 i justify-around items-center hidden">
          <div>
            <h1 className="text-white font-bold text-4xl font-deca">Sign In</h1>
            <p className="text-white mt-1">
              Best task management tool for teams. <br /> Get started, it's free
            </p>
          </div>
          <div className="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
          <div className="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
          <div className="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
          <div className="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        </div>
        <div className="flex md:w-1/2 justify-center py-10 items-center bg-white">
          <form onSubmit={handleSubmit(onSubmit)} className="bg-white">
            <h1 className="text-gray-800 font-bold text-2xl mb-6">Sign In</h1>

            <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
              </svg>
              <input
                className="pl-2 outline-none border-none"
                type="text"
                name=""
                id=""
                placeholder="Email Address"
                {...register("email", { required: true })}
              />
            </div>
            <div className="flex items-center border-2 py-2 px-3 rounded-2xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" />
              </svg>
              <input
                className="pl-2 outline-none border-none"
                type="text"
                name=""
                id=""
                placeholder="Password"
                {...register("password", { required: true })}
              />
            </div>

            <input
              type="submit"
              value="Login"
              className="block cursor-pointer w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2"
            />
            <p>
              Not an user?{" "}
              <Link to={"/register"} className={"text-softBlue"}>
                Register
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};
