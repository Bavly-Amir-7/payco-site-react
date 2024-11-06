import React, { useState } from 'react';
import "./business1.css";

import { Link } from 'react-router-dom';
import Aside from '../../aside/aside';
import selectedImage from "../../images/Group 138.png"

export default function Business1() {

    return (
        <>
            <div className="d-flex" >
                <div className="asideComponent fixed" style={{ height: "100%" }}>
                    <Aside />
                </div>



                <div className="mainVerf">
                    <h1 className="text-2xl font-bold mb-6 text-center">Business Verification</h1>
                    <div className="relative mb-6 w-100">
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="dashedLine border-t-2 border-dashed border-gray-300 " style={{ width: "80%" }}></div>
                            </div>
                            <div className="relative flex" style={{ justifyContent: "space-around" }}>
                                <div className="w-10 h-10 greyColor whiteBg rounded-full flex items-center justify-center">
                                    <i>
                                        <svg width="51" height="50" viewBox="0 0 51 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect x="0.90625" y="0.5" width="49" height="49" rx="24.5" fill="#FCFCFC" />
                                            <rect x="0.90625" y="0.5" width="49" height="49" rx="24.5" stroke="#CDCDCD" />
                                            <path d="M32.0726 21L22.9059 30.1667L18.7393 26" stroke="#C20101" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </i>
                                </div>
                                <div className="w-10 h-10 greyColor whiteBg rounded-full flex items-center justify-center">
                                    <i>
                                        <svg width="51" height="50" viewBox="0 0 51 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect x="0.90625" y="0.5" width="49" height="49" rx="24.5" fill="#FCFCFC" />
                                            <rect x="0.90625" y="0.5" width="49" height="49" rx="24.5" stroke="#CDCDCD" />
                                            <path d="M32.0726 21L22.9059 30.1667L18.7393 26" stroke="#C20101" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </i>
                                </div>
                                <div className="w-10 h-10 greyColor whiteBg rounded-full flex items-center justify-center">
                                    <i>
                                        <svg width="51" height="50" viewBox="0 0 51 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect x="0.90625" y="0.5" width="49" height="49" rx="24.5" fill="#FCFCFC" />
                                            <rect x="0.90625" y="0.5" width="49" height="49" rx="24.5" stroke="#CDCDCD" />
                                            <path d="M32.0726 21L22.9059 30.1667L18.7393 26" stroke="#C20101" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
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
                    <div className='businessForm1' >

                        <div className=" p-6 bg-white shadow-md rounded-md mt-10 ">
                            <h1 className="text-2xl font-bold mb-6 text-center">Add Business Details</h1>
                            <form>
                                <div>
                                    <label className="block mb-2">Business Legal Name*</label>
                                    <div className="flex iconGap items-center borderInput rounded p-2">
                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M17.1819 9.81836C16.9364 9.81836 16.7728 9.98201 16.7728 10.2274V15.5456C16.7728 15.7911 16.6091 15.9547 16.3637 15.9547H1.63641C1.39095 15.9547 1.22734 15.7911 1.22734 15.5456V10.2274C1.22734 9.98198 1.06368 9.81836 0.818258 9.81836C0.572832 9.81836 0.40918 9.98201 0.40918 10.2274V15.5456C0.40918 16.2411 0.940988 16.7729 1.63645 16.7729H16.3637C17.0592 16.7729 17.591 16.2411 17.591 15.5456V10.2274C17.591 9.98198 17.4273 9.81836 17.1819 9.81836Z" fill="black" />
                                            <path d="M16.7727 4.09082H1.22727C0.531809 4.09082 0 4.62263 0 5.31809V7.93628C0 8.50898 0.409078 8.9999 0.940922 9.12263L7.36365 10.5544V11.8635C7.36365 12.109 7.5273 12.2726 7.77273 12.2726H10.2273C10.4727 12.2726 10.6363 12.1089 10.6363 11.8635V10.5544L17.0591 9.12263C17.5909 8.9999 18 8.50898 18 7.93625V5.31806C18 4.62263 17.4682 4.09082 16.7727 4.09082ZM9.81819 11.4544H8.18184V9.81809H9.81819V11.4544ZM17.1818 7.93625C17.1818 8.14079 17.0591 8.30444 16.8545 8.34532L10.6363 9.73625V9.40898C10.6363 9.16352 10.4727 8.9999 10.2273 8.9999H7.77273C7.52727 8.9999 7.36365 9.16355 7.36365 9.40898V9.73625L1.14546 8.34536C0.940922 8.30444 0.818191 8.14082 0.818191 7.93628V5.31809C0.818191 5.07263 0.981844 4.90901 1.22727 4.90901H16.7727C17.0182 4.90901 17.1818 5.07266 17.1818 5.31809V7.93625Z" fill="black" />
                                            <path d="M11.0457 1.22705H6.95481C6.25935 1.22705 5.72754 1.75886 5.72754 2.45432V2.8634C5.72754 3.10886 5.89119 3.27248 6.13662 3.27248C6.38204 3.27248 6.5457 3.10882 6.5457 2.8634V2.45432C6.5457 2.20886 6.70935 2.04524 6.95477 2.04524H11.0457C11.2912 2.04524 11.4548 2.20889 11.4548 2.45432V2.8634C11.4548 3.10886 11.6184 3.27248 11.8639 3.27248C12.1093 3.27248 12.2729 3.10882 12.2729 2.8634V2.45432C12.273 1.75886 11.7412 1.22705 11.0457 1.22705Z" fill="black" />
                                        </svg>

                                        <span>|</span>

                                        <input type="text" className="flex-1 outline-none" placeholder="PAYCO" />
                                    </div>
                                </div>
                                <div>
                                    <label className="block mb-2">Doing Business As (Optional)</label>
                                    <div className="flex iconGap items-center borderInput rounded p-2">
                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M17.1819 9.81836C16.9364 9.81836 16.7728 9.98201 16.7728 10.2274V15.5456C16.7728 15.7911 16.6091 15.9547 16.3637 15.9547H1.63641C1.39095 15.9547 1.22734 15.7911 1.22734 15.5456V10.2274C1.22734 9.98198 1.06368 9.81836 0.818258 9.81836C0.572832 9.81836 0.40918 9.98201 0.40918 10.2274V15.5456C0.40918 16.2411 0.940988 16.7729 1.63645 16.7729H16.3637C17.0592 16.7729 17.591 16.2411 17.591 15.5456V10.2274C17.591 9.98198 17.4273 9.81836 17.1819 9.81836Z" fill="black" />
                                            <path d="M16.7727 4.09082H1.22727C0.531809 4.09082 0 4.62263 0 5.31809V7.93628C0 8.50898 0.409078 8.9999 0.940922 9.12263L7.36365 10.5544V11.8635C7.36365 12.109 7.5273 12.2726 7.77273 12.2726H10.2273C10.4727 12.2726 10.6363 12.1089 10.6363 11.8635V10.5544L17.0591 9.12263C17.5909 8.9999 18 8.50898 18 7.93625V5.31806C18 4.62263 17.4682 4.09082 16.7727 4.09082ZM9.81819 11.4544H8.18184V9.81809H9.81819V11.4544ZM17.1818 7.93625C17.1818 8.14079 17.0591 8.30444 16.8545 8.34532L10.6363 9.73625V9.40898C10.6363 9.16352 10.4727 8.9999 10.2273 8.9999H7.77273C7.52727 8.9999 7.36365 9.16355 7.36365 9.40898V9.73625L1.14546 8.34536C0.940922 8.30444 0.818191 8.14082 0.818191 7.93628V5.31809C0.818191 5.07263 0.981844 4.90901 1.22727 4.90901H16.7727C17.0182 4.90901 17.1818 5.07266 17.1818 5.31809V7.93625Z" fill="black" />
                                            <path d="M11.0457 1.22705H6.95481C6.25935 1.22705 5.72754 1.75886 5.72754 2.45432V2.8634C5.72754 3.10886 5.89119 3.27248 6.13662 3.27248C6.38204 3.27248 6.5457 3.10882 6.5457 2.8634V2.45432C6.5457 2.20886 6.70935 2.04524 6.95477 2.04524H11.0457C11.2912 2.04524 11.4548 2.20889 11.4548 2.45432V2.8634C11.4548 3.10886 11.6184 3.27248 11.8639 3.27248C12.1093 3.27248 12.2729 3.10882 12.2729 2.8634V2.45432C12.273 1.75886 11.7412 1.22705 11.0457 1.22705Z" fill="black" />
                                        </svg>

                                        <span>|</span>

                                        <input type="text" className="flex-1 outline-none" placeholder="PAYCO" />
                                    </div>
                                </div>
                                <div>
                                    <label className="block mb-2">Date of Incorporation*</label>
                                    <div className="d-flex mail">
                                        <div className="iconGap flex items-center borderInput rounded p-2" style={{ width: "100%" }}>

                                            <input type="text" className="flex-1 outline-none" placeholder="1 / 31 / 1998" />
                                            <i><svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clipPath="url(#clip0_5001_3314)">
                                                    <path d="M19 2.69238H18V1.69238C18 1.42717 17.8946 1.17281 17.7071 0.985276C17.5196 0.79774 17.2652 0.692383 17 0.692383C16.7348 0.692383 16.4804 0.79774 16.2929 0.985276C16.1054 1.17281 16 1.42717 16 1.69238V2.69238H8V1.69238C8 1.42717 7.89464 1.17281 7.70711 0.985276C7.51957 0.79774 7.26522 0.692383 7 0.692383C6.73478 0.692383 6.48043 0.79774 6.29289 0.985276C6.10536 1.17281 6 1.42717 6 1.69238V2.69238H5C3.67441 2.69397 2.40356 3.22126 1.46622 4.1586C0.528882 5.09594 0.00158786 6.36679 0 7.69238L0 19.6924C0.00158786 21.018 0.528882 22.2888 1.46622 23.2262C2.40356 24.1635 3.67441 24.6908 5 24.6924H19C20.3256 24.6908 21.5964 24.1635 22.5338 23.2262C23.4711 22.2888 23.9984 21.018 24 19.6924V7.69238C23.9984 6.36679 23.4711 5.09594 22.5338 4.1586C21.5964 3.22126 20.3256 2.69397 19 2.69238ZM2 7.69238C2 6.89673 2.31607 6.13367 2.87868 5.57106C3.44129 5.00845 4.20435 4.69238 5 4.69238H19C19.7956 4.69238 20.5587 5.00845 21.1213 5.57106C21.6839 6.13367 22 6.89673 22 7.69238V8.69238H2V7.69238ZM19 22.6924H5C4.20435 22.6924 3.44129 22.3763 2.87868 21.8137C2.31607 21.2511 2 20.488 2 19.6924V10.6924H22V19.6924C22 20.488 21.6839 21.2511 21.1213 21.8137C20.5587 22.3763 19.7956 22.6924 19 22.6924Z" fill="#374957" />
                                                    <path d="M12 17.1924C12.8284 17.1924 13.5 16.5208 13.5 15.6924C13.5 14.864 12.8284 14.1924 12 14.1924C11.1716 14.1924 10.5 14.864 10.5 15.6924C10.5 16.5208 11.1716 17.1924 12 17.1924Z" fill="#374957" />
                                                    <path d="M7 17.1924C7.82843 17.1924 8.5 16.5208 8.5 15.6924C8.5 14.864 7.82843 14.1924 7 14.1924C6.17157 14.1924 5.5 14.864 5.5 15.6924C5.5 16.5208 6.17157 17.1924 7 17.1924Z" fill="#374957" />
                                                    <path d="M17 17.1924C17.8284 17.1924 18.5 16.5208 18.5 15.6924C18.5 14.864 17.8284 14.1924 17 14.1924C16.1716 14.1924 15.5 14.864 15.5 15.6924C15.5 16.5208 16.1716 17.1924 17 17.1924Z" fill="#374957" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_5001_3314">
                                                        <rect width="24" height="24" fill="white" transform="translate(0 0.692383)" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                            </i>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <label className="block mb-2">Business Address*</label>
                                    <div className="flex iconGap items-center borderInput rounded p-2">
                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M5.53188 3.64437C6.49162 2.71478 7.64764 2.25 9 2.25C10.3524 2.25 11.5029 2.7095 12.4518 3.62852C13.4006 4.54754 13.875 5.66197 13.875 6.97183C13.875 7.62676 13.706 8.37676 13.3679 9.22183C13.0298 10.0669 12.6208 10.8592 12.1409 11.5986C11.6611 12.338 11.1867 13.0299 10.7177 13.6743C10.2487 14.3187 9.85067 14.831 9.52349 15.2113L9 15.75C8.86913 15.6021 8.69463 15.4067 8.47651 15.1637C8.25839 14.9208 7.86577 14.4349 7.29866 13.706C6.73154 12.9771 6.23532 12.2694 5.80998 11.5827C5.38465 10.8961 4.99748 10.1197 4.64849 9.25352C4.29949 8.38732 4.125 7.62676 4.125 6.97183C4.125 5.66197 4.59396 4.55282 5.53188 3.64437Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M9.75 7.125C9.75 7.53921 9.41421 7.875 9 7.875C8.58579 7.875 8.25 7.53921 8.25 7.125C8.25 6.71079 8.58579 6.375 9 6.375C9.41421 6.375 9.75 6.71079 9.75 7.125Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>

                                        <span>|</span>

                                        <input type="text" className="flex-1 outline-none" placeholder="Changable" />
                                    </div>
                                </div>
                                <div>
                                    <label className="block mb-2">Business Industry*</label>
                                    <div className="flex iconGap items-center borderInput rounded p-2">
                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M17.1819 9.81836C16.9364 9.81836 16.7728 9.98201 16.7728 10.2274V15.5456C16.7728 15.7911 16.6091 15.9547 16.3637 15.9547H1.63641C1.39095 15.9547 1.22734 15.7911 1.22734 15.5456V10.2274C1.22734 9.98198 1.06368 9.81836 0.818258 9.81836C0.572832 9.81836 0.40918 9.98201 0.40918 10.2274V15.5456C0.40918 16.2411 0.940988 16.7729 1.63645 16.7729H16.3637C17.0592 16.7729 17.591 16.2411 17.591 15.5456V10.2274C17.591 9.98198 17.4273 9.81836 17.1819 9.81836Z" fill="black" />
                                            <path d="M16.7727 4.09082H1.22727C0.531809 4.09082 0 4.62263 0 5.31809V7.93628C0 8.50898 0.409078 8.9999 0.940922 9.12263L7.36365 10.5544V11.8635C7.36365 12.109 7.5273 12.2726 7.77273 12.2726H10.2273C10.4727 12.2726 10.6363 12.1089 10.6363 11.8635V10.5544L17.0591 9.12263C17.5909 8.9999 18 8.50898 18 7.93625V5.31806C18 4.62263 17.4682 4.09082 16.7727 4.09082ZM9.81819 11.4544H8.18184V9.81809H9.81819V11.4544ZM17.1818 7.93625C17.1818 8.14079 17.0591 8.30444 16.8545 8.34532L10.6363 9.73625V9.40898C10.6363 9.16352 10.4727 8.9999 10.2273 8.9999H7.77273C7.52727 8.9999 7.36365 9.16355 7.36365 9.40898V9.73625L1.14546 8.34536C0.940922 8.30444 0.818191 8.14082 0.818191 7.93628V5.31809C0.818191 5.07263 0.981844 4.90901 1.22727 4.90901H16.7727C17.0182 4.90901 17.1818 5.07266 17.1818 5.31809V7.93625Z" fill="black" />
                                            <path d="M11.0457 1.22705H6.95481C6.25935 1.22705 5.72754 1.75886 5.72754 2.45432V2.8634C5.72754 3.10886 5.89119 3.27248 6.13662 3.27248C6.38204 3.27248 6.5457 3.10882 6.5457 2.8634V2.45432C6.5457 2.20886 6.70935 2.04524 6.95477 2.04524H11.0457C11.2912 2.04524 11.4548 2.20889 11.4548 2.45432V2.8634C11.4548 3.10886 11.6184 3.27248 11.8639 3.27248C12.1093 3.27248 12.2729 3.10882 12.2729 2.8634V2.45432C12.273 1.75886 11.7412 1.22705 11.0457 1.22705Z" fill="black" />
                                        </svg>


                                        <span>|</span>

                                        <input type="text" className="flex-1 outline-none" placeholder="Changable" />
                                    </div>
                                </div>
                                <div>
                                    <label className="block mb-2">Entity Type*</label>
                                    <div className="flex iconGap items-center borderInput rounded p-2">
                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M17.1819 9.81836C16.9364 9.81836 16.7728 9.98201 16.7728 10.2274V15.5456C16.7728 15.7911 16.6091 15.9547 16.3637 15.9547H1.63641C1.39095 15.9547 1.22734 15.7911 1.22734 15.5456V10.2274C1.22734 9.98198 1.06368 9.81836 0.818258 9.81836C0.572832 9.81836 0.40918 9.98201 0.40918 10.2274V15.5456C0.40918 16.2411 0.940988 16.7729 1.63645 16.7729H16.3637C17.0592 16.7729 17.591 16.2411 17.591 15.5456V10.2274C17.591 9.98198 17.4273 9.81836 17.1819 9.81836Z" fill="black" />
                                            <path d="M16.7727 4.09082H1.22727C0.531809 4.09082 0 4.62263 0 5.31809V7.93628C0 8.50898 0.409078 8.9999 0.940922 9.12263L7.36365 10.5544V11.8635C7.36365 12.109 7.5273 12.2726 7.77273 12.2726H10.2273C10.4727 12.2726 10.6363 12.1089 10.6363 11.8635V10.5544L17.0591 9.12263C17.5909 8.9999 18 8.50898 18 7.93625V5.31806C18 4.62263 17.4682 4.09082 16.7727 4.09082ZM9.81819 11.4544H8.18184V9.81809H9.81819V11.4544ZM17.1818 7.93625C17.1818 8.14079 17.0591 8.30444 16.8545 8.34532L10.6363 9.73625V9.40898C10.6363 9.16352 10.4727 8.9999 10.2273 8.9999H7.77273C7.52727 8.9999 7.36365 9.16355 7.36365 9.40898V9.73625L1.14546 8.34536C0.940922 8.30444 0.818191 8.14082 0.818191 7.93628V5.31809C0.818191 5.07263 0.981844 4.90901 1.22727 4.90901H16.7727C17.0182 4.90901 17.1818 5.07266 17.1818 5.31809V7.93625Z" fill="black" />
                                            <path d="M11.0457 1.22705H6.95481C6.25935 1.22705 5.72754 1.75886 5.72754 2.45432V2.8634C5.72754 3.10886 5.89119 3.27248 6.13662 3.27248C6.38204 3.27248 6.5457 3.10882 6.5457 2.8634V2.45432C6.5457 2.20886 6.70935 2.04524 6.95477 2.04524H11.0457C11.2912 2.04524 11.4548 2.20889 11.4548 2.45432V2.8634C11.4548 3.10886 11.6184 3.27248 11.8639 3.27248C12.1093 3.27248 12.2729 3.10882 12.2729 2.8634V2.45432C12.273 1.75886 11.7412 1.22705 11.0457 1.22705Z" fill="black" />
                                        </svg>

                                        <span>|</span>

                                        <input type="text" className="flex-1 outline-none" placeholder="Changable" />
                                    </div>
                                </div>
                                <div>
                                    <label className="block mb-2">Tax ID number*</label>
                                    <div className="flex iconGap items-center borderInput rounded p-2">
                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M17.1819 4.50022H14.6962L15.5168 1.13335C15.6338 0.653641 15.3753 0.159594 14.9384 0.0308912C14.5015 -0.0978115 14.0523 0.187444 13.9361 0.667154L13.0027 4.50022H7.19182L8.0125 1.13335C8.12951 0.653641 7.87093 0.159594 7.43407 0.0308912C6.99706 -0.0968227 6.54882 0.187444 6.43256 0.667154L5.49817 4.50022H2.45455C2.00286 4.50022 1.63642 4.90248 1.63642 5.40015C1.63642 5.89799 2.00286 6.30025 2.45455 6.30025H5.05877L3.74235 11.7002H0.818134C0.366595 11.7002 0 12.1024 0 12.6001C0 13.0978 0.366595 13.5 0.818134 13.5H3.30385L2.48317 16.8669C2.36616 17.3466 2.62474 17.8406 3.0616 17.9693C3.13201 17.9901 3.20317 18 3.27269 18C3.63359 18 3.96498 17.7353 4.06236 17.3331L4.99749 13.5H10.8082L9.9875 16.8669C9.87064 17.3466 10.1291 17.8406 10.5661 17.9693C10.6363 17.9901 10.7075 18 10.7779 18C11.1388 18 11.4701 17.7353 11.5674 17.3331L12.5018 13.5H15.5454C15.9971 13.5 16.3637 13.0978 16.3637 12.6001C16.3637 12.1024 15.9971 11.7002 15.5454 11.7002H12.9412L14.2576 6.30025H17.1819C17.6336 6.30025 18 5.89799 18 5.40015C18 4.90248 17.6336 4.50022 17.1819 4.50022ZM11.2467 11.7002H5.436L6.75242 6.30025H12.5633L11.2467 11.7002Z" fill="black" />
                                        </svg>
                                        <span>|</span>

                                        <input type="text" className="flex-1 outline-none" placeholder="Changable" />
                                    </div>
                                </div>
                                <div className=" flex-col md:flex-row mb-4">
                                    <div className="pr-2 mb-4 md:mb-0">
                                        <label className="block mb-2">Country</label>
                                        <div className="seven0 flex iconGap items-center borderInput rounded p-2" style={{ width: "50%" }}>
                                            <i>
                                                <svg width="24" height="18" viewBox="0 0 24 18" xmlns="http://www.w3.org/2000/svg">
                                                    <rect width="24" height="18" fill="#012169" />
                                                    <path d="M0 0L24 18M24 0L0 18" stroke="white" strokeWidth="3" />
                                                    <path d="M0 0L24 18M24 0L0 18" stroke="#C8102E" strokeWidth="1.5" />
                                                    <path d="M10.5 0H13.5V18H10.5V0ZM0 7.5V10.5H24V7.5H0Z" fill="white" />
                                                    <path d="M11.25 0H12.75V18H11.25V0ZM0 8.25V9.75H24V8.25H0Z" fill="#C8102E" />
                                                </svg>
                                            </i>
                                            <span>|</span>
                                            <select className="flex-1 outline-none">
                                                <option>United Kingdom</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block mb-2">City/Town</label>
                                        <div className="seven0 flex iconGap items-center borderInput rounded p-2" style={{ width: "50%" }}>
                                            <i>
                                                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M7.87584 4.85915C9.15549 3.61971 10.6969 3 12.5 3C14.3031 3 15.8372 3.61267 17.1023 4.83803C18.3675 6.06339 19 7.54929 19 9.29577C19 10.169 18.7746 11.169 18.3238 12.2958C17.873 13.4225 17.3277 14.4789 16.6879 15.4648C16.0481 16.4507 15.4156 17.3732 14.7903 18.2324C14.165 19.0916 13.6342 19.7746 13.198 20.2817L12.5 21C12.3255 20.8028 12.0928 20.5423 11.802 20.2183C11.5112 19.8944 10.9877 19.2465 10.2315 18.2746C9.47539 17.3028 8.81376 16.3592 8.24664 15.4437C7.67953 14.5282 7.16331 13.493 6.69799 12.338C6.23266 11.1831 6 10.169 6 9.29577C6 7.54929 6.62527 6.07043 7.87584 4.85915Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M13.5 9.5C13.5 10.0523 13.0523 10.5 12.5 10.5C11.9477 10.5 11.5 10.0523 11.5 9.5C11.5 8.94772 11.9477 8.5 12.5 8.5C13.0523 8.5 13.5 8.94772 13.5 9.5Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </i>
                                            <span>|</span>
                                            <select className="flex-1 outline-none">
                                                <option>London</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col md:flex-row mb-4">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                        <div>
                                            <label className="block mb-2">Address Line One*</label>
                                            <div className="flex iconGap items-center borderInput rounded p-2" style={{ width: "100%" }}>
                                                <i>
                                                    <svg width="24" height="18" viewBox="0 0 24 18" xmlns="http://www.w3.org/2000/svg">
                                                        <rect width="24" height="18" fill="#012169" />
                                                        <path d="M0 0L24 18M24 0L0 18" stroke="white" strokeWidth="3" />
                                                        <path d="M0 0L24 18M24 0L0 18" stroke="#C8102E" strokeWidth="1.5" />
                                                        <path d="M10.5 0H13.5V18H10.5V0ZM0 7.5V10.5H24V7.5H0Z" fill="white" />
                                                        <path d="M11.25 0H12.75V18H11.25V0ZM0 8.25V9.75H24V8.25H0Z" fill="#C8102E" />
                                                    </svg>
                                                </i>
                                                <span>|</span>
                                                <select className="flex-1 outline-none">
                                                    <option>United Kingdom</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="md:ml-32">
                                            <label className="block mb-2">Currency</label>
                                            <div className="iconGap flex items-center borderInput rounded p-2" style={{ width: "100%" }}>
                                                <i>
                                                    <svg width="24" height="18" viewBox="0 0 24 18" xmlns="http://www.w3.org/2000/svg">
                                                        <rect width="24" height="18" fill="#012169" />
                                                        <path d="M0 0L24 18M24 0L0 18" stroke="white" strokeWidth="3" />
                                                        <path d="M0 0L24 18M24 0L0 18" stroke="#C8102E" strokeWidth="1.5" />
                                                        <path d="M10.5 0H13.5V18H10.5V0ZM0 7.5V10.5H24V7.5H0Z" fill="white" />
                                                        <path d="M11.25 0H12.75V18H11.25V0ZM0 8.25V9.75H24V8.25H0Z" fill="#C8102E" />
                                                    </svg>
                                                </i>
                                                <span>|</span>
                                                <select className="flex-1 outline-none">
                                                    <option>United Kingdom</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex mb-4" >

                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 font-medium mb-2">Which countries do you expect to work with the most?</label>
                                    <div className="selectedCountries flex flex-col md:flex-row items-center">
                                        <div className="countreybg flex items-center  md:mb-0 md:mr-4">
                                            <i>
                                                <svg width="24" height="18" viewBox="0 0 24 18" xmlns="http://www.w3.org/2000/svg">
                                                    <rect width="24" height="18" fill="#012169" />
                                                    <path d="M0 0L24 18M24 0L0 18" stroke="white" strokeWidth="3" />
                                                    <path d="M0 0L24 18M24 0L0 18" stroke="#C8102E" strokeWidth="1.5" />
                                                    <path d="M10.5 0H13.5V18H10.5V0ZM0 7.5V10.5H24V7.5H0Z" fill="white" />
                                                    <path d="M11.25 0H12.75V18H11.25V0ZM0 8.25V9.75H24V8.25H0Z" fill="#C8102E" />
                                                </svg>
                                            </i>
                                            <span>United Kingdom</span>
                                            <i>
                                                <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <line x1="1.17976" y1="0.749436" x2="17.1798" y2="16.7494" stroke="black" strokeWidth="2" />
                                                    <line x1="17.1798" y1="2.16365" x2="1.17976" y2="18.1636" stroke="black" strokeWidth="2" />
                                                </svg>
                                            </i>
                                        </div>
                                        <div className="countreybg flex items-center">
                                            <i>
                                                <svg width="24" height="18" viewBox="0 0 24 18" xmlns="http://www.w3.org/2000/svg">
                                                    <rect width="24" height="18" fill="#012169" />
                                                    <path d="M0 0L24 18M24 0L0 18" stroke="white" strokeWidth="3" />
                                                    <path d="M0 0L24 18M24 0L0 18" stroke="#C8102E" strokeWidth="1.5" />
                                                    <path d="M10.5 0H13.5V18H10.5V0ZM0 7.5V10.5H24V7.5H0Z" fill="white" />
                                                    <path d="M11.25 0H12.75V18H11.25V0ZM0 8.25V9.75H24V8.25H0Z" fill="#C8102E" />
                                                </svg>
                                            </i>
                                            <span>United Kingdom</span>
                                            <i>
                                                <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <line x1="1.17976" y1="0.749436" x2="17.1798" y2="16.7494" stroke="black" strokeWidth="2" />
                                                    <line x1="17.1798" y1="2.16365" x2="1.17976" y2="18.1636" stroke="black" strokeWidth="2" />
                                                </svg>
                                            </i>
                                        </div>
                                    </div>
                                </div>

                                <div className="mb-4 flex gap-2">
                                    <i><svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="0.25" y="0.89502" width="24.5" height="24.5" rx="12.25" fill="#656565" stroke="white" strokeWidth="0.5" />
                                        <path d="M13.4647 8.07944L13.2887 16.0794H12.0727L11.8967 8.07944H13.4647ZM12.7447 19.3274C12.4674 19.3274 12.2327 19.2314 12.0407 19.0394C11.8487 18.8474 11.7527 18.6128 11.7527 18.3354C11.7527 18.0581 11.8487 17.8234 12.0407 17.6314C12.2327 17.4394 12.4674 17.3434 12.7447 17.3434C13.0114 17.3434 13.2354 17.4394 13.4167 17.6314C13.6087 17.8234 13.7047 18.0581 13.7047 18.3354C13.7047 18.6128 13.6087 18.8474 13.4167 19.0394C13.2354 19.2314 13.0114 19.3274 12.7447 19.3274Z" fill="#FCFCFC" />
                                    </svg>
                                    </i>
                                    <p className="text-gray-600 text-sm">
                                        For some countries, additional verification might be required to comply with regulations. We'll <br />notify you if that applies.
                                    </p>
                                </div>
                                <div className="mb-4">
                                    <h2 className="font-bold mb-2 text-center" style={{ fontSize: "20px" }}>Upload Mandatory Documents</h2>

                                    <div className="mb-4 p-4 rounded-md articleArea">
                                        <h2 className="MediumTitle font-bold mb-2">1. Articles of incorporation</h2>
                                        <div className='flex flex-col md:flex-row md:justify-between'>
                                            <p className="text-gray-600 text-sm mb-2">
                                                Legal document filed with the government to establish a corporation, <br /> including information about the company's name, purpose, <br /> structure, and initial shareholders.
                                            </p>
                                            <div className="upload mt-4 md:mt-0">
                                                <button className="upLoadBtn1 redClr whiteBg py-2 flex rounded-md">UPLOAD
                                                    <span>
                                                        <i>
                                                            <svg width="15" height="18" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M4.5 13.145H10.5V7.14502H14.5L7.5 0.14502L0.5 7.14502H4.5V13.145ZM0.5 15.145H14.5V17.145H0.5V15.145Z" fill="#C20101" />
                                                            </svg>
                                                        </i>
                                                    </span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mb-4 p-4 articleArea">
                                        <h2 className="MediumTitle font-bold mb-2">2. Commercial Register Extract</h2>
                                        <p className="text-gray-600 text-sm mb-2">
                                            Legal document filed with the government to establish a corporation, <br /> including information about the company's name, purpose, <br /> structure, and initial shareholders.
                                        </p>
                                        <div className="flex flex-col md:flex-row md:justify-between items-center">
                                            <div className="flex items-center mb-4 md:mb-0">
                                                <img src={selectedImage} alt="Document thumbnail" className="mr-2" />
                                            </div>
                                            <div className="flex items-center">
                                                <button className="py-2 px-4 redBg text-white rounded-md mr-2">DELETE</button>
                                                <button className="py-2 px-4 redBg text-white rounded-md">REPLACE</button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mb-4 p-4 rounded-md articleArea">
                                        <h2 className="mb-2 ein">3. EIN (Federal Tax ID) <span className='vat'>or VAT Number</span></h2>
                                        <div className="flex flex-col md:flex-row md:justify-between">
                                            <p className="text-gray-600 text-sm mb-2">
                                                Company-issued tax ID number for tax reporting purposes, outlining the procedures for invoicing, and decision-making processes.
                                            </p>
                                            <div className="upload mt-4 md:mt-0">
                                                <button className="upLoadBtn2 py-2 flex rounded-md">UPLOAD
                                                    <span>
                                                        <i>
                                                            <svg width="15" height="18" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M4.5 13.4487H10.5V7.44873H14.5L7.5 0.44873L0.5 7.44873H4.5V13.4487ZM0.5 15.4487H14.5V17.4487H0.5V15.4487Z" fill="#FCFCFC" />
                                                            </svg>
                                                        </i>
                                                    </span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </form>
                        </div>
                        <div className='w-100 text-center'>
                            <Link to="/business2">

                                <button className='save'>Save & Next</button>
                            </Link>
                        </div>
                    </div>

                </div >
            </div >
        </>
    );
}