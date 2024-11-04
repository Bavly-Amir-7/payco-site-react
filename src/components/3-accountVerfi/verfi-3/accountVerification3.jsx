import React, { useState } from 'react';
import "./verfi3.css";
import Aside from '../../aside/aside';
import { Link } from 'react-router-dom';

export default function AccountVerification3() {
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
                            <div className="w-10 h-10 redBg text-white rounded-full flex items-center justify-center">3</div>
                            <div className="w-10 h-10 greyColor whiteBg rounded-full flex items-center justify-center">4</div>
                        </div>
                    </div>
                    <div className="flex justify-between mb-6">
                        <p className="text-center flex-1">Account Type</p>
                        <p className="text-center flex-1">Personal Details</p>
                        <p className="text-center flex-1">Identity Verification</p>
                        <p className="text-center flex-1">Review and Additional Documents</p>
                    </div>
                    <div className="bg-[rgb(252,252,252)] p-8 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold mb-4 text-center">Select Verification Method</h2>
                        <div className="account-type bg-[rgb(252,252,252)] p-6 rounded-lg mb-6">
                            <div className={`bg-[rgb(244,244,244)] p-4 rounded-lg border border-gray-300 ${selectedAccount === 'personal' ? 'bg-[rgb(230,230,230)]' : ''}`} style={{ marginBottom: '24px' }}>
                                <label className="flex items-center">
                                    <input type="radio" name="accountType" className="form-radio h-5 w-5 text-red-500" onClick={() => handleNavigation('personal')} />
                                    <h2 className="bold ml-2 text-lg font-medium">Continue on this Device</h2>
                                </label>
                                <p style={{ marginLeft: "38px" }}>Continue on this device: Open your camera to verify with a third party. Press 'Go to <br /> Verification' to proceed</p>
                                <div className='text-center'>
                                    <button className='codeBtn'>Go to verification</button>
                                </div>
                            </div>

                            <div className={`bg-[rgb(244,244,244)] p-4 rounded-lg border border-gray-300 ${selectedAccount === 'business' ? 'bg-[rgb(230,230,230)]' : ''}`} style={{ marginBottom: '24px' }}>
                                <label className="flex items-center">
                                    <input type="radio" name="accountType" className="form-radio h-5 w-5 text-red-500" onClick={() => handleNavigation('business')} />
                                    <span className="bold ml-2 text-md font-medium">Verify on Mobile</span>
                                </label>
                                <p className='scan'>Verify on mobile: Press 'Generate Code' to scan and complete the process</p>
                                <div className='text-center'>
                                    {!showQRCode ? ( // تحقق إذا كانت QR Code يجب أن تظهر أم لا
                                        <button className='codeBtn2' onClick={handleGenerateQRCode}>Generate QR Code</button>
                                    ) : null} {/* إذا كانت showQRCode true، لا تعرض الزر */}
                                </div>


                                {showQRCode && ( // تحقق إذا كانت QR Code يجب أن تظهر أم لا
                                    <div className="text-center w-100  ">
                                        <div className="bg-white p-4 rounded-lg shadow-md qrCode">
                                            <i className="fas fa-qrcode text-5xl"></i>
                                        </div>
                                        <div className="w-100">

                                            <p className="mt-2 text-lg font-semibold text-gray-800">Scan With Your Mobile</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                    </div>



                    <div className="flex justify-center gap-2">
                        <Link to="/verfi2">
                            <button className="backBtn  font-semibold px-4 py-2 rounded-lg hover:bg-red-600">Back</button>
                        </Link>
                        <Link to="/verfi4">
                            <button className="greyBtn greyBg text-white font-semibold px-4 py-2 rounded-lg hover:bg-red-600">Save & Next</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
