import { useState } from 'react';
import Head from 'next/head';
import "./verification2.css";
import Image from 'next/image';
import Login from '../../1-loginPage/page';
import Link from 'next/link';
import Aside from '@/app/layoutComponents/aside/page';

const VerificationPage2 = () => {
    const [selectedAccount, setSelectedAccount] = useState('');
    const [activeLink, setActiveLink] = useState('overview');

    const handleNavigation = (accountType) => {
        setSelectedAccount(accountType);
        console.log(`Selected account type: ${accountType}`); // Logging selected account type
    };

    return (
        <>
            <Head>
                <title>Account Verification</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
                <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" />
            </Head>

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
                            <div className="w-10 h-10 bg-gray-300 text-white rounded-full flex items-center justify-center">1</div>
                            <div className="w-10 h-10 bg-red-500 redBg text-white rounded-full flex items-center justify-center">2</div>
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
                    <div>
                        <div className="bg-white p-8 rounded-lg shadow-md">
                            <h2 className="text-2xl font-bold mb-6">Personal Details</h2>
                            <div>
                                <div className="grid grid-cols-3 gap-4 mb-4">
                                    <div>
                                        <label className="block mb-2">First Name*</label>
                                        <div className="flex items-center border rounded p-2">
                                            <i className="fas fa-user mr-2"></i>
                                            <input type="text" className="flex-1 outline-none" placeholder="Changable" />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block mb-2">Middle Name (Optional)</label>
                                        <div className="flex items-center border rounded p-2">
                                            <i className="fas fa-user mr-2"></i>
                                            <input type="text" className="flex-1 outline-none" placeholder="Changable" />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block mb-2">Last Name*</label>
                                        <div className="flex items-center border rounded p-2">
                                            <i className="fas fa-user mr-2"></i>
                                            <input type="text" className="flex-1 outline-none" placeholder="Changable" />
                                        </div>
                                    </div>
                                </div>
                                <div className="grid grid-cols-3 gap-4 mb-4">
                                    <div>
                                        <label className="block mb-2">Date of Birth*</label>
                                        <div className="flex items-center border rounded p-2">
                                            <input type="text" className="flex-1 outline-none" placeholder="1 / 31 / 1998" />
                                            <i className="fas fa-calendar-alt ml-2"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="grid grid-cols-3 gap-4 mb-4">
                                    <div>
                                        <label className="block mb-2">Email*</label>
                                        <div className="flex items-center border rounded p-2">
                                            <i className="fas fa-envelope mr-2"></i>
                                            <input type="text" className="flex-1 outline-none" placeholder="Changable" />
                                        </div>
                                        <button className="mt-2 bg-gray-200 text-gray-700 px-4 py-2 rounded">Verify</button>
                                    </div>
                                </div>
                                <div className="grid grid-cols-3 gap-4 mb-4">
                                    <div>
                                        <label className="block mb-2">Phone Number*</label>
                                        <div className="flex items-center border rounded p-2">
                                            <img src="https://placehold.co/20x20" alt="Country Flag" className="mr-2" />
                                            <input type="text" className="flex-1 outline-none" placeholder="(+44) 123123456" />
                                        </div>
                                        <button className="mt-2 bg-gray-200 text-gray-700 px-4 py-2 rounded">Verify</button>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-4 mb-4">
                                    <div>
                                        <label className="block mb-2">Address Line One*</label>
                                        <div className="flex items-center border rounded p-2">
                                            <i className="fas fa-map-marker-alt mr-2"></i>
                                            <input type="text" className="flex-1 outline-none" placeholder="Changable" />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block mb-2">Address Line Two (Optional)</label>
                                        <div className="flex items-center border rounded p-2">
                                            <i className="fas fa-map-marker-alt mr-2"></i>
                                            <input type="text" className="flex-1 outline-none" placeholder="Changable" />
                                        </div>
                                    </div>
                                </div>
                                <div className="grid grid-cols-3 gap-4 mb-4">
                                    <div>
                                        <label className="block mb-2">Country*</label>
                                        <div className="flex items-center border rounded p-2">
                                            <img src="https://placehold.co/20x20" alt="Country Flag" className="mr-2" />
                                            <select className="flex-1 outline-none">
                                                <option>United Kingdom</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block mb-2">City/Town*</label>
                                        <div className="flex items-center border rounded p-2">
                                            <input type="text" className="flex-1 outline-none" placeholder="Lodon" />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block mb-2">Postal Code*</label>
                                        <div className="flex items-center border rounded p-2">
                                            <i className="fas fa-hashtag mr-2"></i>
                                            <input type="text" className="flex-1 outline-none" placeholder="Changable" />
                                        </div>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-4 mb-4">
                                    <div>
                                        <label className="block mb-2">Nationality*</label>
                                        <div className="flex items-center border rounded p-2">
                                            <img src="https://placehold.co/20x20" alt="Country Flag" className="mr-2" />
                                            <select className="flex-1 outline-none">
                                                <option>United Kingdom</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block mb-2">Second Nationality if available*</label>
                                        <div className="flex items-center border rounded p-2">
                                            <img src="https://placehold.co/20x20" alt="Country Flag" className="mr-2" />
                                            <select className="flex-1 outline-none">
                                                <option>United Kingdom</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="grid grid-cols-3 gap-4 mb-4">
                                    <div>
                                        <label className="block mb-2">Social security number (Only for US People)</label>
                                        <div className="flex items-center border rounded p-2">
                                            <i className="fas fa-hashtag mr-2"></i>
                                            <input type="text" className="flex-1 outline-none" placeholder="123456" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <button className="redBtn redBg text-white font-semibold px-4 py-2 rounded-lg hover:bg-red-600">Save & Next</button>
                    </div>


                </div>



            </div>

        </>
    );
};

export default VerificationPage2;




