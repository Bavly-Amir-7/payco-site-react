import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Aside from '../../aside/aside';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faPlus, faChevronDown, faChevronUp, faCalendarAlt, faTimes } from '@fortawesome/free-solid-svg-icons';
import "./letters5.css";

export default function Letters5() {


    const [account, setAccount] = useState("USDT - wallet");


    return (
        <>
            <div className="container-fluid lettersContainer flex-center">
                <div className="row">
                    <div className="asideComponent col-lg-3 col-md-2" style={{ height: "100%" }}>
                        <Aside />
                    </div>


                    <div className="col-12 col-lg-9 col-md-12 mt-5 text-center">
                        <div className="flex flex-col md:flex-row justify-between items-center mb-6 w-100">
                            <div className="parent w-100 flex gap-4">
                                <div className="relative w-full md:mb-0" style={{ width: "80%" }}>
                                    <input type="text" placeholder="Search anything here" className="w-full p-3 rounded-lg border border-gray-300" />
                                </div>
                                <div className="flex items-center space-x-4">
                                    <i className="fas fa-bell text-gray-400"></i>
                                    <div className="flex items-center space-x-2">
                                        <img src="https://storage.googleapis.com/a1aa/image/ScBMkEoJ3Gr6HVjcF2CrdyIti56QzXDWjyir38s7YUdcXC8E.jpg" alt="User profile picture" className="w-10 h-10 rounded-full" width="40" height="40" />
                                        <div className="flex flex-col items-start">
                                            <span className="text-gray-700">John Smith</span>
                                        </div>
                                        <i className="fas fa-caret-down text-gray-400"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="text-gray-500 mb-6 text-sm" style={{ placeSelf: "start" }}>
                            <span>Dashboard</span>
                            <i className="fas fa-chevron-right mx-2"></i>
                            <span>Letters of credit</span>
                            <i className="fas fa-chevron-right mx-2"></i>
                            <span className="font-bold text-gray-700">Create New LC</span>
                        </div>
                        <div className="relative mb-6 w-100">
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="dashedLine border-t-2 border-dashed border-gray-300" style={{ width: "80%" }}></div>
                            </div>
                            <div className="relative flex" style={{ justifyContent: "space-around" }}>
                                <div className="w-10 h-10 greyColor whiteBg rounded-full flex items-center justify-center">
                                    <i>
                                        <svg width="51" height="50" viewBox="0 0 51 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect x="0.90625" y="0.5" width="49" height="49" rx="24.5" fill="#FCFCFC" />
                                            <rect x="0.90625" y="0.5" width="49" height="49" rx="24.5" stroke="#CDCDCD" />
                                            <path d="M32.0726 21L22.9059 30.1667L18.7393 26" stroke="#C20101" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </i>
                                </div>
                                <div className="w-10 h-10 greyColor whiteBg rounded-full flex items-center justify-center">
                                    <i>
                                        <svg width="51" height="50" viewBox="0 0 51 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect x="0.90625" y="0.5" width="49" height="49" rx="24.5" fill="#FCFCFC" />
                                            <rect x="0.90625" y="0.5" width="49" height="49" rx="24.5" stroke="#CDCDCD" />
                                            <path d="M32.0726 21L22.9059 30.1667L18.7393 26" stroke="#C20101" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </i>
                                </div>
                                <div className="w-10 h-10 greyColor whiteBg rounded-full flex items-center justify-center">
                                    <i>
                                        <svg width="51" height="50" viewBox="0 0 51 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect x="0.90625" y="0.5" width="49" height="49" rx="24.5" fill="#FCFCFC" />
                                            <rect x="0.90625" y="0.5" width="49" height="49" rx="24.5" stroke="#CDCDCD" />
                                            <path d="M32.0726 21L22.9059 30.1667L18.7393 26" stroke="#C20101" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </i>
                                </div>
                                <div className="w-10 h-10 whiteColor redBg rounded-full flex items-center justify-center">4</div>
                            </div>
                        </div>
                        <div className="flex justify-between mb-6 w-100">
                            <div className="col text-center text-sm">Business Details</div>
                            <div className="col text-center text-sm">Business Beneficial Owners</div>
                            <div className="col text-center text-sm">Signatory Power</div>
                            <div className="col text-center text-sm">Review and Additional Documents</div>
                        </div>





                        <div className="bg-gray-100 flex justify-center items-center w-100">




                            <div className="bg-white p-6 rounded-lg  w-100 ">


                                <h1 className="text-gray-800 text-xl font-semibold mb-4">LC confirmation</h1>
                                <div className="flex justify-center mb-4">
                                    <div className="w-24 h-24 flex items-center justify-center border-2 border-red-500 rounded-full">
                                        <i className="fas fa-check text-red-500 text-4xl"></i>
                                    </div>
                                </div>
                                <h2 className="text-gray-800 text-2xl font-semibold mb-4">Letter of credit has been sent successfully</h2>
                                <p className="text-gray-600 mb-6">Great news! Your letter of credit (LC) has been sent. Use the reference number provided to track its status.</p>
                                <div className="bg-gray-100 p-4 rounded-lg items-center w-full md:w-1/2" style={{ placeSelf: "center" }}>
                                    <span className="text-gray-800 font-semibold">Reference number</span>
                                    <br />
                                    <span className="ml-2 text-gray-800 font-semibold">#12345678910111213</span>
                                    <button className="ml-2 text-gray-600">
                                        <i className="fas fa-copy"></i>
                                    </button>
                                </div>




                            </div>

                        </div>
                        <div className="finalBtns center mt-6 justify-center">
                            <button className="py-2 px-6 backLetter col-button">Save & Exit</button>
                            <button className="py-2 px-6 nextLetter col-button">Next</button>
                        </div>




                    </div>
                </div>
            </div>
        </>
    );
}
