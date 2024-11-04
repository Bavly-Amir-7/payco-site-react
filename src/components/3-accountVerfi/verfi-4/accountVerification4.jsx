import React, { useState } from 'react';
import "./verfi4.css";
import Aside from '../../aside/aside';
import { Link } from 'react-router-dom';

export default function AccountVerification4() {
    const [selectedAccount, setSelectedAccount] = useState('');
    const [activeLink, setActiveLink] = useState('');
    const [showQRCode, setShowQRCode] = useState(false); // حالة جديدة للتحكم في ظهور QR Code

    const handleNavigation = (accountType) => {
        setSelectedAccount(accountType);
        console.log(`Selected account type: ${accountType}`); // Logging selected account type
    };

    const handleGenerateQRCode = () => {
        setShowQRCode(true); // تغيير الحالة لإظهار QR Code
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
                            <div className="w-10 h-10 greyColor whiteBg rounded-full flex items-center justify-center"><i><svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.6663 1L5.49967 10.1667L1.33301 6" stroke="#C20101" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            </i></div>
                            <div className="w-10 h-10 greyColor whiteBg rounded-full flex items-center justify-center"><i><svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.6663 1L5.49967 10.1667L1.33301 6" stroke="#C20101" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            </i></div>
                            <div className="w-10 h-10 greyColor whiteBg rounded-full flex items-center justify-center"><i><svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.6663 1L5.49967 10.1667L1.33301 6" stroke="#C20101" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            </i></div>
                            <div className="w-10 h-10 redBg text-white rounded-full flex items-center justify-center">4</div>
                        </div>
                    </div>
                    <div className="flex justify-between mb-6">
                        <p className="text-center flex-1">Account Type</p>
                        <p className="text-center flex-1">Personal Details</p>
                        <p className="text-center flex-1">Identity Verification</p>
                        <p className="text-center flex-1">Review and Additional Documents</p>
                    </div>
                    <div className="bg-[rgb(252,252,252)] p-8 rounded-lg shadow-md">
                        <div className="space-y-6">
                            <h1 className="text-center text-lg font-bold">Review</h1>
                            <div className="space-y-4" style={{ placeItems: "center" }}>
                                <div className="flex  items-center p-4 bg-gray-200 rounded-lg" style={{ justifyContent: "space-between", width: "790px" }}>
                                    <div className="flex items-center space-x-2">
                                        <i className="fas fa-chevron-down"></i>
                                        <span className="font-semibold">Personal Details</span>
                                    </div>
                                    <a href="#" className="changeBtn">Change</a>
                                </div>
                                <div className="flex  items-center p-4 bg-gray-200 rounded-lg" style={{ justifyContent: "space-between", width: "790px" }}>                                    <div className="flex items-center space-x-2">
                                    <i className="fas fa-chevron-down"></i>
                                    <span className="font-semibold">Account Details</span>
                                </div>
                                    <a href="#" className="changeBtn">Change</a>
                                </div>
                                <div className="flex  items-center p-4 bg-gray-200 rounded-lg" style={{ justifyContent: "space-between", width: "790px" }}>                                    <div className="flex items-center space-x-2">
                                    <i className="fas fa-chevron-down"></i>
                                    <span className="font-semibold">Passport or National ID Verification</span>
                                </div>
                                    <a href="#" className="changeBtn">Change</a>
                                </div>
                                <div className="p-6 bg-gray-200 rounded-lg text-center" style={{ width: "790px", marginTop: "110px" }}>
                                    <h2 className="font-bold">Additional Documents</h2>
                                    <p className="text-sm text-gray-600 mt-2">Verification is within reach! Adding extra documents helps us confirm your info quickly and securely, so you can unlock the full experience sooner.</p>
                                    <button className="uploadBtn mt-4 px-6 py-2  rounded">UPLOAD</button>
                                </div>
                            </div>
                        </div>

                    </div>



                    <div className="flex justify-center gap-2">
                        <Link to="/verfi2">
                            <button className="backBtn  font-semibold px-4 py-2 rounded-lg hover:bg-red-600">Back</button>
                        </Link>
                        <Link to="/business1">
                            <button className="greyBtn redBg text-white font-semibold px-4 py-2 rounded-lg hover:bg-red-600">Finish</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
