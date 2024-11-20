import React, { useState } from 'react';
import "./loginPage.css";
import image1 from "./../images/computer.png";
import image2 from "./../images/Ayco2.png";
import { Link } from 'react-router-dom';

export default function LoginPage() {
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
            <div className='login'>
                <div className="grid grid-cols-2 h-screen">
                    <div className="computer col-span-1 flex items-center justify-center">
                        <img src={image1} alt="Illustration of secure payment system with various security icons" className="w-2/3" />
                    </div>
                    <div className="loginArea col-span-1 flex items-center justify-center bg-gray-100">
                        <div className="w-2/3">
                            <div className="text-start imageParent mb-3" style={{ placeSelf: "start" }}>
                                <img src={image2} alt="Payco Logo" className="mx-auto mb-3" />
                                <h2 className="text-2xl font-bold mt-5">Welcome Back</h2>
                            </div>
                            <form>
                                <div className="mb-4">
                                    <label className="block text-gray-700">Email</label>
                                    <div className="iconArea flex items-center border border-gray-300 rounded">
                                        <i className="p-2">{/* Email Icon */}</i>
                                        <span>|</span>
                                        <input type="email" placeholder="username@gmail.com" className="w-full p-2 outline-none" />
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700">Password</label>
                                    <div className="iconArea flex items-center border border-gray-300 rounded">
                                        <i className="p-2">{/* Password Icon */}</i>
                                        <span>|</span>
                                        <input
                                            type={showPassword ? "text" : "password"}
                                            placeholder="********"
                                            className="w-full p-2 outline-none"
                                        />
                                        <i className={`p-2`} onClick={togglePasswordVisibility}>
                                            {/* Eye Icon */}
                                        </i>
                                    </div>
                                    <div className="remember-and-forget d-flex mt-3">
                                        <div>
                                            <label className="inline-flex items-center">
                                                <input type="checkbox" className="form-checkbox" />
                                                <span className="ml-2 text-gray-700">Remember me</span>
                                            </label>
                                        </div>
                                        <div className="text-right">
                                            <a href="#" className="text-sm text-gray-500">Forgot Password?</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <button className="redBg w-full bg-red-600 text-white py-2 rounded">Login</button>
                                </div>
                                <div className="flex items-center justify-center mt-4 lines">
                                    <span className="flex-1">{/* Line SVG */}</span>
                                    <span className="text-sm text-gray-500 mx-2">OR</span>
                                    <span className="flex-1">{/* Line SVG */}</span>
                                </div>
                                <div className="mt-2">
                                    <button
                                        className="w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                                        type="button"
                                    >
                                        <div className="googleSearch">
                                            <div>{/* Google Icon */}</div>
                                            <div>Sign up with Google</div>
                                        </div>
                                    </button>
                                </div>
                                <div className="text-center mt-4">
                                    <span className="text-sm text-gray-500">
                                        Don't have an account?{" "}
                                        <a className="hover:text-red-700" href="#" onClick={handleSignUpClick}>
                                            Sign up
                                        </a>
                                    </span>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                {showTerms && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                        <div className="relative bg-white p-8 rounded-lg shadow-lg w-3/4 max-w-2xl">
                            <h2 className="text-lg mb-4">
                                To continue signing up You have to agree to our{" "}
                                <a href="#" className="text-black underline">Terms of Service</a> and{" "}
                                <a href="#" className="text-black underline">Privacy Policy.</a>
                            </h2>
                            <h3 className="text-2xl font-bold text-red-600 mb-4">Our Terms of Service & Privacy Policy</h3>
                            <div className="h-64 overflow-y-scroll pr-4 scrollbar-thin scrollbar-thumb-red-600 scrollbar-track-gray-200">
                                <p className="text-sm text-gray-700">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam, saepe facilis molestias iure veritatis minus aspernatur recusandae placeat blanditiis molestiae omnis? Deleniti doloribus molestiae repudiandae incidunt, necessitatibus sint voluptates quas.
                                    Aperiam quibusdam eveniet voluptas tempora tenetur architecto culpa maiores cumque? Eius recusandae accusamus veniam nam velit adipisci tempora dolorum quidem, ad odit soluta aperiam eligendi iste harum repellendus laborum commodi?
                                    Totam amet non distinctio ducimus atque voluptatem eos ipsum assumenda doloribus? Quam odit sequi illum omnis numquam commodi corrupti, inventore, tempora quas assumenda magnam corporis laboriosam, consequatur alias obcaecati cupiditate?
                                    Voluptates at placeat, quae provident tempora ab repudiandae praesentium quasi earum. Excepturi, quo dolorum? Aliquam, officia corporis laboriosam, illum maxime velit iure quod minus id nisi aperiam voluptatem autem odit?
                                    In aperiam deserunt ea quisquam excepturi aliquid a pariatur. Nulla, quos accusantium minima commodi officia iure mollitia quo aliquid quam natus sequi ipsam repudiandae consectetur corporis possimus reprehenderit molestias rem.
                                </p>
                            </div>
                            <div className="flex justify-center mt-4">
                                <Link to="">
                                    <button className="bg-red-600 text-white py-2 px-6 rounded mr-4">Cancel</button>
                                </Link>
                                <Link to="signup">
                                    <button className="bg-red-600 text-white py-2 px-6 rounded">I Agree</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}
