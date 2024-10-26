import React from 'react'
import "./loginPage.css"

export default function LoginPage() {
    
  return (
   
   <>
      <div id='up' className=''>

        <div className="flex h-screen">
          <div className="w-1/2 flex items-center justify-center">
            <img src="https://placehold.co/400x400" alt="Illustration of secure payment system with various security icons" className="w-2/3" />
          </div>
          <div className="w-1/2 flex items-center justify-center bg-gray-100">
            <div className="w-2/3">
              <div className="text-center mb-8">
                <img src="https://placehold.co/100x50" alt="Payco Logo" className="mx-auto mb-4" />
                <h2 className="text-2xl font-bold">Welcome Back</h2>
              </div>
              <form>
                <div className="mb-4">
                  <label className="block text-gray-700">Email</label>
                  <div className="flex items-center border border-gray-300 rounded">
                    <i className="fas fa-envelope p-2 text-gray-500"></i>
                    <input type="email" placeholder="username@gmail.com" className="w-full p-2 outline-none" />
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Password</label>
                  <div className="flex items-center border border-gray-300 rounded">
                    <i className="fas fa-lock p-2 text-gray-500"></i>
                    <input type="password" placeholder="********" className="w-full p-2 outline-none" />
                    <i className="fas fa-eye p-2 text-gray-500"></i>
                  </div>
                  <div className="text-right mt-2">
                    <a href="#" className="text-sm text-gray-500">Forgot Password?</a>
                  </div>
                </div>
                <div className="mb-4">
                  <label className="inline-flex items-center">
                    <input type="checkbox" className="form-checkbox" />
                    <span className="ml-2 text-gray-700">Remember me</span>
                  </label>
                </div>
                <div className="mb-4">
                  <button className="w-full bg-red-600 text-white py-2 rounded">Login</button>
                </div>
                <div className="flex items-center justify-center mt-4 lines">
                  <span><svg width="268" height="1" viewBox="0 0 268 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="0.357422" y1="0.5" x2="267.817" y2="0.499975" stroke="#BFBFBF" />
                  </svg>
                  </span>
                  <span className="text-sm text-gray-500">OR</span>
                  <span><svg width="268" height="1" viewBox="0 0 268 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="0.357422" y1="0.5" x2="267.817" y2="0.499975" stroke="#BFBFBF" />
                  </svg>
                  </span>
                </div>
                <div className="mb-4">
                  <button className="w-full border border-gray-300 py-2 rounded flex items-center justify-center">
                    <img src="https://placehold.co/20x20" alt="Google Logo" className="mr-2" />
                    <span>Sign in with Google</span>
                  </button>
                </div>
                <div className="text-center">
                  <span className="text-gray-500">Don't have an account? <a href="#" className="text-red-600">Sign up</a></span>
                </div>
              </form>
            </div>
          </div>
        </div>



      </div>
    </>
  )
}
