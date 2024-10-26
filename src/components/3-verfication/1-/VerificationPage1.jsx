import { useState } from 'react';
import Head from 'next/head';
import "./verification.css";
import Image from 'next/image';
import Login from '../../1-loginPage/page';
import Aside from '@/app/layoutComponents/aside/page';
import Link from 'next/link';

const VerificationPage1 = () => {
    const [selectedAccount, setSelectedAccount] = useState('');
    const [activeLink, setActiveLink] = useState('overview');

    const handleNavigation = (accountType) => {
        setSelectedAccount(accountType);
        console.log(`Selected account type: ${accountType}`); // Logging selected account type
    };

    

    return (
        <>
            <div className="flex">

                <aside>
                    <Aside />
                </aside>

                <div className="mainVerf">
                    <h1 className="text-2xl font-bold mb-6 text-center">Account Verification</h1>
                    <div className="relative mb-6">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-300"></div>
                        </div>
                        <div className="relative flex justify-between">
                            <div className="w-10 h-10 bg-red-500 redBg text-white rounded-full flex items-center justify-center">1</div>
                            <div className="w-10 h-10 bg-gray-300 text-white rounded-full flex items-center justify-center">2</div>
                            <div className="w-10 h-10 bg-gray-300 text-white rounded-full flex items-center justify-center">3</div>
                            <div className="w-10 h-10 bg-gray-300 text-white rounded-full flex items-center justify-center">4</div>
                        </div>
                    </div>
                    <div className="flex justify-between mb-6">
                        <p className="text-center flex-1">Account Type</p>
                        <p className="text-center flex-1">Personal Details</p>
                        <p className="text-center flex-1">Identity Verification</p>
                        <p className="text-center flex-1">Review and Additional Documents</p>
                    </div>
                    <div className="bg-[rgb(252,252,252)] p-8 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold mb-4 text-center">Select Account Type</h2>
                        <div className="account-type bg-[rgb(252,252,252)] p-6 rounded-lg mb-6">
                            <div className={`bg-[rgb(244,244,244)] p-4 rounded-lg border border-gray-300 ${selectedAccount === 'personal' ? 'bg-[rgb(230,230,230)]' : ''}`} style={{ marginBottom: '24px' }}>
                                <label className="flex items-center">
                                    <input type="radio" name="accountType" className="form-radio h-5 w-5 text-red-500" onClick={() => handleNavigation('personal')} />
                                    <span className="bold ml-2 text-md font-medium">Personal Account</span>
                                </label>
                                {selectedAccount === 'personal' && (
                                    <div className='inputsStyles'>
                                        <div className="mt-4">
                                            <label className="block text-gray-700">Full Name*</label>
                                            <div className="mt-1 relative rounded-md shadow-sm">
                                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
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
                                        <div className="mt-4">
                                            <label className="block text-gray-700">Full Name*</label>
                                            <div className="mt-1 relative rounded-md shadow-sm">
                                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
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
                                        <div className="mt-4">
                                            <label className="block text-gray-700">Full Name*</label>
                                            <div className="mt-1 relative rounded-md shadow-sm">
                                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
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

                                    </div>
                                )}
                            </div>
                            <div className={`bg-[rgb(244,244,244)] p-4 rounded-lg border border-gray-300 ${selectedAccount === 'business' ? 'bg-[rgb(230,230,230)]' : ''}`}>
                                <label className="flex items-center">
                                    <input type="radio" name="accountType" className="form-radio h-5 w-5 text-red-500" onClick={() => handleNavigation('business')} />
                                    <span className="bold ml-2 ">Business Account</span>

                                </label>
                                {selectedAccount === 'business' && (
                                    <div className='inputsStyles'>
                                        <div className="mt-4">
                                            <label className="block text-gray-700">Business Name*</label>
                                            <div className="mt-1 relative rounded-md shadow-sm">
                                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <g clipPath="url(#clip0_3244_1130)">
                                                            <path d="M22.9095 13.0908C22.5822 13.0908 22.3641 13.309 22.3641 13.6363V20.7272C22.3641 21.0545 22.1459 21.2726 21.8186 21.2726H2.18221C1.85493 21.2726 1.63677 21.0544 1.63677 20.7272V13.6363C1.63677 13.309 1.41857 13.0908 1.09134 13.0908C0.764102 13.0908 0.545898 13.309 0.545898 13.6363V20.7272C0.545898 21.6545 1.25498 22.3635 2.18226 22.3635H21.8186C22.7459 22.3635 23.455 21.6545 23.455 20.7272V13.6363C23.455 13.309 23.2368 13.0908 22.9095 13.0908Z" fill="black" />
                                                            <path d="M22.3636 5.4541H1.63636C0.709078 5.4541 0 6.16318 0 7.09046V10.5814C0 11.345 0.545437 11.9995 1.25456 12.1632L9.8182 14.0723V15.8177C9.8182 16.145 10.0364 16.3631 10.3636 16.3631H13.6364C13.9636 16.3631 14.1818 16.1449 14.1818 15.8177V14.0723L22.7454 12.1632C23.4546 11.9995 24 11.345 24 10.5813V7.09041C24 6.16318 23.2909 5.4541 22.3636 5.4541ZM13.0909 15.2723H10.9091V13.0905H13.0909V15.2723ZM22.9091 10.5813C22.9091 10.8541 22.7454 11.0723 22.4727 11.1268L14.1818 12.9813V12.545C14.1818 12.2177 13.9636 11.9995 13.6364 11.9995H10.3636C10.0364 11.9995 9.8182 12.2177 9.8182 12.545V12.9813L1.52728 11.1268C1.25456 11.0723 1.09092 10.8541 1.09092 10.5814V7.09046C1.09092 6.76318 1.30913 6.54502 1.63636 6.54502H22.3636C22.6909 6.54502 22.9091 6.76323 22.9091 7.09046V10.5813Z" fill="black" />
                                                            <path d="M14.7276 1.63672H9.27308C8.3458 1.63672 7.63672 2.3458 7.63672 3.27308V3.81852C7.63672 4.1458 7.85492 4.36395 8.18216 4.36395C8.50939 4.36395 8.72759 4.14575 8.72759 3.81852V3.27308C8.72759 2.9458 8.9458 2.72764 9.27303 2.72764H14.7276C15.0549 2.72764 15.273 2.94584 15.273 3.27308V3.81852C15.273 4.1458 15.4912 4.36395 15.8185 4.36395C16.1458 4.36395 16.3639 4.14575 16.3639 3.81852V3.27308C16.364 2.3458 15.6549 1.63672 14.7276 1.63672Z" fill="black" />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_3244_1130">
                                                                <rect width="18" height="18" fill="white" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>

                                                    <span className="pl-1">|</span>
                                                </div>
                                                <input
                                                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                                                    placeholder="PAYCO"
                                                    type="email"
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="mt-4">
                                            <label className="block text-gray-700">Country of Incorporation*</label>
                                            <div className="mt-1 relative rounded-md shadow-sm">
                                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                    <svg
                                                        width="24"
                                                        height="24"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <mask id="mask0" maskUnits="userSpaceOnUse" x="0" y="3" width="24" height="18" mask-type="luminance">
                                                            <path d="M0 7.416C0 5.207 1.791 3.416 4 3.416h16c2.209 0 4 1.791 4 4v9.169c0 2.21-1.791 4-4 4H4c-2.209 0-4-1.791-4-4V7.416z" fill="white" />
                                                        </mask>
                                                        <g mask="url(#mask0)">
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M4 3.416C1.791 3.416 0 5.207 0 7.416v9.169c0 2.21 1.791 4 4 4h16c2.209 0 4-1.791 4-4V7.416c0-2.209-1.791-4-4-4H4z" fill="#2E42A5" />
                                                            <mask id="mask1" maskUnits="userSpaceOnUse" x="0" y="3" width="24" height="18" mask-type="luminance">
                                                                <path fillRule="evenodd" clipRule="evenodd" d="M4 3.416C1.791 3.416 0 5.207 0 7.416v9.169c0 2.21 1.791 4 4 4h16c2.209 0 4-1.791 4-4V7.416c0-2.209-1.791-4-4-4H4z" fill="white" />
                                                            </mask>
                                                            <g mask="url(#mask1)">
                                                                <mask id="mask2" maskUnits="userSpaceOnUse" x="0" y="3" width="24" height="18" mask-type="luminance">
                                                                    <path d="M0 7.416C0 5.207 1.791 3.416 4 3.416h16c2.209 0 4 1.791 4 4v9.169c0 2.21-1.791 4-4 4H4c-2.209 0-4-1.791-4-4V7.416z" fill="white" />
                                                                </mask>
                                                                <g mask="url(#mask2)">
                                                                    <path d="M0.776 16.743c-1.519 1.152-1.203 3.52 0.565 4.234a2.646 2.646 0 0 0 2.37-.296l20.223-14.813c.124-.09.237-.193.338-.308 1.12-1.272.36-3.279-1.322-3.491l-.678-.085a2.45 2.45 0 0 0-1.824.499L12.484 8.644 5.422 13.219l-4.646 3.524z" fill="white" />
                                                                    <path d="M-0.238 19.53c-.778.6-.64 1.812.253 2.222.446.205.969.143 1.355-.16l21.882-17.23c.873-.688.387-2.091-1.724-2.091a2.518 2.518 0 0 0-1.283.244L-0.238 19.53z" fill="#F50100" />
                                                                    <path d="M23.223 16.743c1.52 1.152 1.204 3.52-0.564 4.234a2.646 2.646 0 0 1-2.371-.296L0.065 5.868a2.3 2.3 0 0 1-.338-.308c-1.12-1.272-.36-3.279 1.322-3.491l.677-.085a2.45 2.45 0 0 1 1.824.499l8.965 6.164L18.577 13.219l4.646 3.524z" fill="white" />
                                                                    <path d="M24.792 19.103c.775.605.634 1.816-.259 2.226a1.683 1.683 0 0 1-.939.164l-9.481-7.507a3.748 3.748 0 0 0-1.339-.695l-1.77-.528a3.287 3.287 0 0 1-.914-.615L-0.426 4.605C-1.299 3.961-.843 2.577.241 2.577c.236 0 .466.074.658.212l12.278 8.851a2.3 2.3 0 0 0 .76.557l2.218.725a3.388 3.388 0 0 0 1.217.649l7.087 5.53z" fill="#F50100" />
                                                                    <path fillRule="evenodd" clipRule="evenodd" d="M14.833 4.819c0-1.565-1.268-2.834-2.833-2.834-1.565 0-2.833 1.268-2.833 2.834v.744c0 1.975-1.601 3.576-3.576 3.576H1.382C-.198 9.139-1.479 10.42-1.479 12s1.281 2.862 2.861 2.862h4.208c1.975 0 3.576 1.601 3.576 3.576v.743c0 1.565 1.268 2.834 2.833 2.834 1.565 0 2.833-1.268 2.833-2.834v-.744c0-1.975 1.601-3.576 3.576-3.576h4.249c1.58 0 2.861-1.281 2.861-2.861 0-1.58-1.281-2.862-2.861-2.862H18.41c-1.975 0-3.576-1.601-3.576-3.576V4.819z" fill="#F50100" />
                                                                </g>
                                                            </g>
                                                        </g>
                                                    </svg>
                                                    <span className="pl-1">|</span>
                                                </div>
                                                <input
                                                    className=" block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm" style={{ paddingLeft: "45px" }}
                                                    placeholder="United Kingdom"
                                                    type="email"
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="mt-4">
                                            <label className="block text-gray-700">Company registration number* (For US people only)</label>
                                            <div className="mt-1 relative rounded-md shadow-sm">
                                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M14.25 0.75H3.75C2.7558 0.751191 1.80267 1.14666 1.09966 1.84966C0.396661 2.55267 0.00119089 3.5058 0 4.5L0 13.5C0.00119089 14.4942 0.396661 15.4473 1.09966 16.1503C1.80267 16.8533 2.7558 17.2488 3.75 17.25H14.25C15.2442 17.2488 16.1973 16.8533 16.9003 16.1503C17.6033 15.4473 17.9988 14.4942 18 13.5V4.5C17.9988 3.5058 17.6033 2.55267 16.9003 1.84966C16.1973 1.14666 15.2442 0.751191 14.25 0.75ZM3.75 2.25H14.25C14.6991 2.25088 15.1376 2.38614 15.5092 2.63835C15.8808 2.89057 16.1684 3.24821 16.335 3.66525L10.5915 9.4095C10.1688 9.83049 9.59656 10.0669 9 10.0669C8.40344 10.0669 7.83118 9.83049 7.4085 9.4095L1.665 3.66525C1.83161 3.24821 2.11921 2.89057 2.49079 2.63835C2.86236 2.38614 3.30091 2.25088 3.75 2.25ZM14.25 15.75H3.75C3.15326 15.75 2.58097 15.5129 2.15901 15.091C1.73705 14.669 1.5 14.0967 1.5 13.5V5.625L6.348 10.47C7.05197 11.1722 8.00569 11.5665 9 11.5665C9.99431 11.5665 10.948 11.1722 11.652 10.47L16.5 5.625V13.5C16.5 14.0967 16.2629 14.669 15.841 15.091C15.419 15.5129 14.8467 15.75 14.25 15.75Z" fill="#2D2D2D" />
                                                    </svg>
                                                    <span className="pl-1">|</span>
                                                </div>
                                                <input
                                                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                                                    placeholder="Changable"
                                                    type="email"
                                                    required
                                                />
                                            </div>
                                        </div>

                                    </div>
                                )}

                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <Link href="/3-verfication/2-">
                            <button className="redBtn redBg text-white font-semibold px-4 py-2 rounded-lg hover:bg-red-600">Save & Next</button>
                        </Link>

                    </div>

                </div>


            </div>

        </>
    );
};

export default VerificationPage1;




