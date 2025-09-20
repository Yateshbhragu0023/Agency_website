import React from 'react'
import LoginImage from "../assets/Img/2.png"
import { useContext } from 'react'
import { MainContext } from '../context/Context'
import axios from 'axios'

export default function Login() {

  const { API_BASE_URL, admin_URL, ToastNotify } = useContext(MainContext)

  const loginHandle = (e) => {
    e.preventDefault()
    const formdata = new FormData()
    formdata.append("email", e.target.email.value),
      formdata.append("password", e.target.password.value)

    axios.post(API_BASE_URL + admin_URL , formdata).then(
      (succes) => {
        console.log(succes.data)
        ToastNotify(succes.data.msg , succes.data.status)
        if(succes.data.status == 1){
          e.target.reset()
        }
      }
    ).catch(
      (error)=>{
        console.log(error)
      }
    )

  }

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Side - Image */}
      <div className="md:w-1/2 flex justify-center items-center bg-gray-100">
        <img
          src={LoginImage}
          alt="Login Illustration"
          className="object-cover w-full h-full rounded-l-xl"
        />
      </div>

      {/* Right Side - Login Form */}
      <div className="md:w-1/2 flex justify-center items-center bg-white">
        <div className="w-full max-w-md p-10 space-y-6">
          <h1 className="text-4xl font-bold  text-gray-800 text-center">
            Admin Login
          </h1>
          <p className="text-center text-gray-500">
            Welcome back! Please login to your admin account.
          </p>

          <form className="space-y-5" onSubmit={loginHandle}>
            <div className="flex flex-col">
              <label className="mb-2 text-gray-700 font-medium">Email</label>
              <input
                type="email"
                name='email'
                placeholder="admin@example.com"
                className="px-4 py-3 border rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              />
            </div>

            <div className="flex flex-col">
              <label className="mb-2 text-gray-700 font-medium">Password</label>
              <input
                type="password"
                name='password'
                placeholder="********"
                className="px-4 py-3 border rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition duration-300"
            >
              Login
            </button>
          </form>

          <p className="text-center text-gray-500">
            Forgot your password?{" "}
            <a href="#" className="text-indigo-600 hover:underline">
              Register here
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
