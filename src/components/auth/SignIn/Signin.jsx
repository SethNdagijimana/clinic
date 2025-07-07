import { Cross, Lock, Mail } from "lucide-react"
import React, { useState } from "react"

const Signin = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: ""
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  return (
    <>
      <div className="max-w-[90%] w-[400px] h-[450px] p-8 rounded-xl space-y-4 mx-auto mt-20 bg-[#f6f6f6]">
        <div className="flex items-center justify-center gap-4">
          <span>
            <Cross size={50} color="#3F84DB" fill="#3F84DB" />
          </span>
          <h2 className="text-black text-base font-bold">
            Clinic Management System
          </h2>
        </div>

        <div className="mt-8">
          <h1 className="text-black text-xl">Login</h1>
        </div>

        <div className="space-y-6">
          <div className="relative">
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 z-10">
              <Mail size={20} color="#64748b" />
            </div>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="w-full bg-white/50 border border-slate-800 rounded-lg pl-8 pr-2 py-3 text-black placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />
          </div>

          <div className="relative">
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 z-10">
              <Lock size={20} color="#64748b" />
            </div>

            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className="w-full bg-white/50 border border-slate-800 rounded-lg pl-8 pr-2 py-3  text-black placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />
          </div>

          <button
            type="submit"
            onClick={handleSubmit}
            className="w-full bg-[#3F84DB] text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
          >
            Login
          </button>
        </div>
      </div>
    </>
  )
}

export default Signin
