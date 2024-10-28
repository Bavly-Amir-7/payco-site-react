import React, { useState } from 'react';
import "./verfi1.css";
import Aside from '../../aside/aside';
import { Link } from 'react-router-dom';

export default function AccountVerification1() {
    const [selectedAccount, setSelectedAccount] = useState('');
    const [activeLink, setActiveLink] = useState('overview');

    const handleNavigation = (accountType) => {
        setSelectedAccount(accountType);
        console.log(`Selected account type: ${accountType}`); // Logging selected account type
    };

    return (
        <>


            <div className="d-flex" >
                <div className="asideComponent fixed" style={{ height: "100%" }}>
                    <Aside />
                </div>

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
                                            <label className="block text-gray-700">Phone Number*</label>
                                            <div className="mt-1 relative rounded-md shadow-sm">
                                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M14.25 0.75H3.75C2.7558 0.751191 1.80267 1.14666 1.09966 1.84966C0.396661 2.55267 0.00119089 3.5058 0 4.5L0 13.5C0.00119089 14.4942 0.396661 15.4473 1.09966 16.1503C1.80267 16.8533 2.7558 17.2488 3.75 17.25H14.25C15.2442 17.2488 16.1973 16.8533 16.9003 16.1503C17.6033 15.4473 17.9988 14.4942 18 13.5V4.5C17.9988 3.5058 17.6033 2.55267 16.9003 1.84966C16.1973 1.14666 15.2442 0.751191 14.25 0.75ZM3.75 2.25H14.25C14.6991 2.25088 15.1376 2.38614 15.5092 2.63835C15.8808 2.89057 16.1684 3.24821 16.335 3.66525L10.5915 9.4095C10.1688 9.83049 9.59656 10.0669 9 10.0669C8.40344 10.0669 7.83118 9.83049 7.4085 9.4095L1.665 3.66525C1.83161 3.24821 2.11921 2.89057 2.49079 2.63835C2.86236 2.38614 3.30091 2.25088 3.75 2.25ZM14.25 15.75H3.75C3.15326 15.75 2.58097 15.5129 2.15901 15.091C1.73705 14.669 1.5 14.0967 1.5 13.5V5.625L6.348 10.47C7.05197 11.1722 8.00569 11.5665 9 11.5665C9.99431 11.5665 10.948 11.1722 11.652 10.47L16.5 5.625V13.5C16.5 14.0967 16.2629 14.669 15.841 15.091C15.419 15.5129 14.8467 15.75 14.25 15.75Z" fill="#2D2D2D" />
                                                    </svg>
                                                    <span className="pl-1">|</span>
                                                </div>
                                                <input
                                                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                                                    placeholder="+20 123 456 7890"
                                                    type="tel"
                                                    required
                                                />
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>

                            <div className={`bg-[rgb(244,244,244)] p-4 rounded-lg border border-gray-300 ${selectedAccount === 'business' ? 'bg-[rgb(230,230,230)]' : ''}`} style={{ marginBottom: '24px' }}>
                                <label className="flex items-center">
                                    <input type="radio" name="accountType" className="form-radio h-5 w-5 text-red-500" onClick={() => handleNavigation('business')} />
                                    <span className="bold ml-2 text-md font-medium">Business Account</span>
                                </label>
                                {selectedAccount === 'business' && (
                                    <div className='inputsStyles'>
                                        <div className="mt-4">
                                            <label className="block text-gray-700">Business Name*</label>
                                            <div className="mt-1 relative rounded-md shadow-sm">
                                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.1819 9.81836C16.9364 9.81836 16.7728 9.98201 16.7728 10.2274V15.5456C16.7728 15.7911 16.6091 15.9547 16.3637 15.9547H1.63641C1.39095 15.9547 1.22734 15.7911 1.22734 15.5456V10.2274C1.22734 9.98198 1.06368 9.81836 0.818258 9.81836C0.572832 9.81836 0.40918 9.98201 0.40918 10.2274V15.5456C0.40918 16.2411 0.940988 16.7729 1.63645 16.7729H16.3637C17.0592 16.7729 17.591 16.2411 17.591 15.5456V10.2274C17.591 9.98198 17.4273 9.81836 17.1819 9.81836Z" fill="black"/>
<path d="M16.7727 4.09082H1.22727C0.531809 4.09082 0 4.62263 0 5.31809V7.93628C0 8.50898 0.409078 8.9999 0.940922 9.12263L7.36365 10.5544V11.8635C7.36365 12.109 7.5273 12.2726 7.77273 12.2726H10.2273C10.4727 12.2726 10.6363 12.1089 10.6363 11.8635V10.5544L17.0591 9.12263C17.5909 8.9999 18 8.50898 18 7.93625V5.31806C18 4.62263 17.4682 4.09082 16.7727 4.09082ZM9.81819 11.4544H8.18184V9.81809H9.81819V11.4544ZM17.1818 7.93625C17.1818 8.14079 17.0591 8.30444 16.8545 8.34532L10.6363 9.73625V9.40898C10.6363 9.16352 10.4727 8.9999 10.2273 8.9999H7.77273C7.52727 8.9999 7.36365 9.16355 7.36365 9.40898V9.73625L1.14546 8.34536C0.940922 8.30444 0.818191 8.14082 0.818191 7.93628V5.31809C0.818191 5.07263 0.981844 4.90901 1.22727 4.90901H16.7727C17.0182 4.90901 17.1818 5.07266 17.1818 5.31809V7.93625Z" fill="black"/>
<path d="M11.0457 1.22754H6.95481C6.25935 1.22754 5.72754 1.75935 5.72754 2.45481V2.86389C5.72754 3.10935 5.89119 3.27296 6.13662 3.27296C6.38204 3.27296 6.5457 3.10931 6.5457 2.86389V2.45481C6.5457 2.20935 6.70935 2.04573 6.95477 2.04573H11.0457C11.2912 2.04573 11.4548 2.20938 11.4548 2.45481V2.86389C11.4548 3.10935 11.6184 3.27296 11.8639 3.27296C12.1093 3.27296 12.2729 3.10931 12.2729 2.86389V2.45481C12.273 1.75935 11.7412 1.22754 11.0457 1.22754Z" fill="black"/>
</svg>

                                                    <span className="pl-1">|</span>
                                                </div>
                                                <input
                                                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                                                    placeholder="Your Business Name"
                                                    type="text"
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="mt-4">
                                            <label className="block text-gray-700">Contact Email*</label>
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
                                                    className="block w-full  pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                                                    placeholder="your.email@business.com"
                                                    type="email"
                                                    required
                                                    style={{paddingLeft:"47px"}}

                                                />
                                            </div>
                                        </div>
                                        <div className="mt-4">
                                            <label className="block text-gray-700">Phone Number*</label>
                                            <div className="mt-1 relative rounded-md shadow-sm">
                                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.1819 4.50022H14.6962L15.5168 1.13335C15.6338 0.653641 15.3753 0.159594 14.9384 0.0308912C14.5015 -0.0978115 14.0523 0.187444 13.9361 0.667154L13.0027 4.50022H7.19182L8.0125 1.13335C8.12951 0.653641 7.87093 0.159594 7.43407 0.0308912C6.99706 -0.0968227 6.54882 0.187444 6.43256 0.667154L5.49817 4.50022H2.45455C2.00286 4.50022 1.63642 4.90248 1.63642 5.40015C1.63642 5.89799 2.00286 6.30025 2.45455 6.30025H5.05877L3.74235 11.7002H0.818134C0.366595 11.7002 0 12.1024 0 12.6001C0 13.0978 0.366595 13.5 0.818134 13.5H3.30385L2.48317 16.8669C2.36616 17.3466 2.62474 17.8406 3.0616 17.9693C3.13201 17.9901 3.20317 18 3.27269 18C3.63359 18 3.96498 17.7353 4.06236 17.3331L4.99749 13.5H10.8082L9.9875 16.8669C9.87064 17.3466 10.1291 17.8406 10.5661 17.9693C10.6363 17.9901 10.7075 18 10.7779 18C11.1388 18 11.4701 17.7353 11.5674 17.3331L12.5018 13.5H15.5454C15.9971 13.5 16.3637 13.0978 16.3637 12.6001C16.3637 12.1024 15.9971 11.7002 15.5454 11.7002H12.9412L14.2576 6.30025H17.1819C17.6336 6.30025 18 5.89799 18 5.40015C18 4.90248 17.6336 4.50022 17.1819 4.50022ZM11.2467 11.7002H5.436L6.75242 6.30025H12.5633L11.2467 11.7002Z" fill="black"/>
</svg>

                                                    <span className="pl-1">|</span>
                                                </div>
                                                <input
                                                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                                                    placeholder="+20 123 456 7890"
                                                    type="tel"
                                                    required
                                                />
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="flex justify-center">
                            <Link to="/3-verfication/2-">
                                <button className="redBtn redBg text-white font-semibold px-4 py-2 rounded-lg hover:bg-red-600">Save & Next</button>
                            </Link>

                        </div>
                    </div>
                </div>
            </div>
        </ >
    );
}

