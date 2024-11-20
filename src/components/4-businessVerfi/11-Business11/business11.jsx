import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Aside from '../../aside/aside';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faPlus, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import "./business11.css";

export default function Business11() {


    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="asideComponent col-lg-3 col-md-2" style={{ height: "100%" }}>
                        <Aside />
                    </div>

                    <div className="col-12 col-lg-9 col-md-12 mt-5" style={{ placeItems: "center" }}>

                        <div className="relative mb-6 w-100">
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="dashedLine border-t-2 border-dashed border-gray-300 " style={{ width: "80%" }}></div>
                            </div>
                            <div className="relative flex" style={{ justifyContent: "space-around" }}>
                                <div className="w-10 h-10 greyColor whiteBg rounded-full flex items-center justify-center">
                                    <i>
                                        <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M14.6663 1L5.49967 10.1667L1.33301 6" stroke="#C20101" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>

                                    </i>
                                </div>
                                <div className="w-10 h-10 greyColor whiteBg rounded-full flex items-center justify-center">
                                    <i>
                                        <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M14.6663 1L5.49967 10.1667L1.33301 6" stroke="#C20101" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>

                                    </i>
                                </div>                                <div className="w-10 h-10 whiteColor redBg rounded-full flex items-center justify-center">3</div>

                                <div className="w-10 h-10 greyColor whiteBg rounded-full flex items-center justify-center">
                                    4
                                </div>



                            </div>
                        </div>


                        <div className="flex justify-between mb-3 w-100">
                            <div className="col text-center text-sm">Business Details</div>
                            <div className="col text-center text-sm">Business Beneficial Owners</div>
                            <div className="col text-center text-sm">Signatory Power</div>
                            <div className="col text-center text-sm greyColor">Review and Additional Documents</div>
                        </div>



                        <div class="bg-white p-8 rounded-lg shadow-md w-full mt-6 ">
                            <h1 class="text-center text-xl font-semibold mb-6">Nature and purpose of the business relationship</h1>

                            <form>
                                <div class="mb-6">
                                    <label class="block text-gray-700 mb-2" for="purpose">Purpose of the business relationship</label>
                                    <textarea id="purpose" class="w-full p-4 border border-gray-300 rounded-lg" rows="4" placeholder="Type here a detailed description"></textarea>
                                </div>

                                <div class="mb-6">
                                    <label class="block text-gray-700 mb-2" for="development">Information on the planned development of the business relationship and the assets</label>
                                    <textarea id="development" class="w-full p-4 border border-gray-300 rounded-lg" rows="4" placeholder="Type here a detailed description"></textarea>
                                </div>

                                <div class="mb-6">
                                    <label class="block text-gray-700 mb-2" for="relation">Relation of the beneficial owner/s, controlling persons, authorised signatories and other persons involved in the business relationship</label>
                                    <textarea id="relation" class="w-full p-4 border border-gray-300 rounded-lg" rows="4" placeholder="Type here a detailed description"></textarea>
                                </div>

                            </form>
                        </div>

                        <div className="flex justify-center gap-2">

                            <Link to="/business10" className='saveNext'>
                                <button className="backBtn   redClr font-semibold px-4 py-2 rounded-lg hover:bg-red-600">Back</button>
                            </Link>
                            <Link to="/business12" className='saveNext'>
                                <button className=" redBtn redBg text-white font-semibold px-4 py-2 rounded-lg hover:bg-red-600">Save & Next</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>



        </>
    );
}
