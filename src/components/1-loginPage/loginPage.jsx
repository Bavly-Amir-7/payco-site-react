import React, { useState } from 'react';
import './login.css';
import Image from 'react-image'; // Assuming you're using a similar library for images
import { Helmet } from 'react-helmet'; // Use react-helmet for managing the document head

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showTerms, setShowTerms] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleSignUpClick = () => {
    setShowTerms(true);
  };

  const handleCloseTerms = () => {
    setShowTerms(false);
  };

  return (
    <>
      <Helmet>
        <title>Payco Login</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
          rel="stylesheet"
        />
      </Helmet>
      <div className="loginBody">
        <div className="bg-gray-100 min-h-screen flex loginArea">
          <div className="w-1/2 imageParent bg-white flex items-center justify-center relative computer">
            <Image
              alt="Illustration of security and payment elements"
              className="w-3/4 imageChild"
              src="/images/computer.png"
              // You might need to adjust the `src` to work with your image library
            />
          </div>
          <div className="w-1/2 imageParent bg-gray-100 flex flex-col justify-center items-center">
            <div className="w-3/4 imageChild">
              <div className="text-center mb-8">
                <div className="word flex flex-row items-center">
                  <Image
                    src="/images/ayco2.png"
                    width={270}
                    height={95}
                    alt="Description of the image"
                  />
                </div>
                <h1 className="text-2xl font-bold text-start mt-5 welcome">Welcome Back</h1>
              </div>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      {/* SVG Icon for Email */}
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.25 0.75H3.75C2.7558 0.751191 1.80267 1.14666 1.09966 1.84966C0.396661 2.55267 0.00119089 3.5058 0 4.5L0 13.5C0.00119089 14.4942 0.396661 15.4473 1.09966 16.1503C1.80267 16.8533 2.7558 17.2488 3.75 17.25H14.25C15.2442 17.2488 16.1973 16.8533 16.9003 16.1503C17.6033 15.4473 17.9988 14.4942 18 13.5V4.5C17.9988 3.5058 17.6033 2.55267 16.9003 1.84966C16.1973 1.14666 15.2442 0.751191 14.25 0.75ZM3.75 2.25H14.25C14.6991 2.25088 15.1376 2.38614 15.5092 2.63835C15.8808 2.89057 16.1684 3.24821 16.335 3.66525L10.5915 9.4095C10.1688 9.83049 9.59656 10.0669 9 10.0669C8.40344 10.0669 7.83118 9.83049 7.4085 9.4095L1.665 3.66525C1.83161 3.24821 2.11921 2.89057 2.49079 2.63835C2.86236 2.38614 3.30091 2.25088 3.75 2.25ZM14.25 15.75H3.75C3.15326 15.75 2.58097 15.5129 2.15901 15.091C1.73705 14.669 1.5 14.0967 1.5 13.5V5.625L6.348 10.47C7.05197 11.1722 8.00569 11.5665 9 11.5665C9.99431 11.5665 10.948 11.1722 11.652 10.47L16.5 5.625V13.5C16.5 14.0967 16.2629 14.669 15.841 15.091C15.419 15.5129 14.8467 15.75 14.25 15.75Z" fill="#2D2D2D" />
                      </svg>
                      <span className="pl-1">|</span>
                    </div>
                    <input
                      className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                      placeholder="username@gmail.com"
                      type="email"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Password</label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      {/* SVG Icon for Password */}
                      <svg width="8" height="16" viewBox="0 0 8 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.91877 0.126953C3.54765 0.127338 3.19184 0.274937 2.92942 0.53736C2.66699 0.799783 2.5194 1.15559 2.51901 1.52672L2.51901 8.53027C1.78404 8.7961 1.14837 9.28112 0.697883 9.9198C0.247395 10.5585 0.00379758 11.32 -1.65026e-07 12.1016C0.206972 17.1327 7.38069 17.1381 7.59004 12.1016C7.58707 11.3682 7.37273 10.6512 6.97271 10.0365C6.57268 9.42185 6.00394 8.93551 5.33459 8.63578L5.83388 7.87593C5.86893 7.82235 5.88468 7.75842 5.87854 7.69468C5.87239 7.63094 5.8447 7.5712 5.80005 7.52531L4.72232 6.41512L5.7951 5.36517C5.84974 5.30992 5.8802 5.23524 5.8798 5.15754C5.87888 5.11902 5.87008 5.08109 5.85395 5.04609C5.83783 5.0111 5.81471 4.97977 5.78603 4.95404L4.72507 4.00006L5.80445 2.83296C5.84533 2.78902 5.87109 2.73316 5.87797 2.67354C5.88485 2.61392 5.87248 2.55367 5.84268 2.50158L4.628 0.370044C4.55489 0.195982 4.38659 0.0868923 4.20534 0.0868923C4.0241 0.0868923 3.8554 0.195982 3.78249 0.370044L2.83023 2.52035C2.66564 2.83743 2.634 3.18367 2.76368 3.46774L4.422 3.31439C4.79866 3.25877 5.09388 3.47831 5.31501 3.69455L5.67777 4.02892L3.91877 0.126953Z" fill="#2D2D2D" />
                      </svg>
                      <span className="pl-1">|</span>
                    </div>
                    <input
                      className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                      placeholder="Password"
                      type={showPassword ? 'text' : 'password'}
                      required
                    />
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                      <button
                        type="button"
                        onClick={togglePasswordVisibility}
                        className="text-sm text-gray-600 hover:text-gray-900"
                      >
                        {showPassword ? 'Hide' : 'Show'}
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
                    />
                    <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">Remember me</label>
                  </div>
                  <div className="text-sm">
                    <a href="#" className="font-medium text-red-600 hover:text-red-500">Forgot your password?</a>
                  </div>
                </div>
                <button
                  type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                >
                  Sign in
                </button>
                <p className="mt-4 text-sm text-gray-600">
                  Don't have an account? 
                  <button 
                    type="button" 
                    className="text-red-600 hover:text-red-500" 
                    onClick={handleSignUpClick}
                  >
                    Sign up
                  </button>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
      {showTerms && (
        <div className="terms-modal">
          <div className="modal-content">
            <h2>Terms and Conditions</h2>
            <p>Your terms and conditions go here...</p>
            <button onClick={handleCloseTerms}>Close</button>
          </div>
        </div>
      )}
    </>
  );
};

export default LoginPage;
