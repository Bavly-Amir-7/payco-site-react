import React, { useState } from 'react';
import Aside from '../../aside/aside';
import "./credit1.css";
import { BarChart } from '@mui/x-charts/BarChart';
import recptImage from "./Ellipse 7.svg";
import notFound from "./No Results@3x.svg";



export default function Credit1() {



    const [activeTab, setActiveTab] = React.useState('sent');



    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="asideComponent col-lg-3 col-md-2" style={{ height: "100%" }}>
                        <Aside />
                    </div>

                    <div className="col-12 col-lg-9 col-md-10 mt-5" style={{ placeItems: "center" }}>





                        <div className="">
                        <div className="flex flex-col md:flex-row justify-between items-center mb-6 w-100">
                            <div className="parent w-100 flex gap-2">
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
                            <div className="flex justify-between">

                                <h1 className="text-2xl font-bold mb-2">Welcome back, John</h1>
                                <button className="redBg text-white px-4 py-2 rounded-lg mt-1">send/receive</button>

                            </div>
                            <div className="text-gray-500 mb-6">
                                <span>Dashboard</span> <i className="fas fa-chevron-right mx-2"></i> <span className="font-bold text-gray-700">Accounts</span>
                            </div>



                            <div className="bg-white  rounded-lg border border-gray-200">











                                <div>
                                    <div className="flex items-center space-x-4 bg-gray-200 p-2 rounded-lg" style={{ justifyContent: "space-around" }}>
                                        <div></div>
                                        <div className="sentAndrevice flex gap-2">

                                            <button
                                                className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${activeTab === 'sent' ? 'bg-white' : ''}`}
                                                onClick={() => setActiveTab('sent')}
                                            >
                                                <span className={`font-semibold ${activeTab === 'sent' ? 'text-red-600' : 'text-gray-600'}`}>Sent</span>
                                                {activeTab === 'sent' && <span className="text-red-600">•</span>}
                                            </button>
                                            <button
                                                className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${activeTab === 'received' ? 'bg-white' : ''}`}
                                                onClick={() => setActiveTab('received')}
                                            >
                                                <span className={`font-semibold ${activeTab === 'received' ? 'text-red-600' : 'text-gray-600'}`}>Received</span>
                                                {activeTab === 'received' && <span className="text-red-600">•</span>}
                                            </button>
                                        </div>
                                        <div className="text-gray-400 cursor-pointer">
                                            See all
                                        </div>
                                    </div>

                                    {/* محتوى الزرار المختار */}
                                    <div className="mt-4 p-4  rounded-lg">
                                        {activeTab === 'sent' && (
                                            <div>
                                                <div className="flex justify-between items-center mb-4">
                                                    <h2 className="text-xl font-bold">Recent transactions</h2>
                                                    <div className="flex space-x-4">
                                                        <select className="border border-gray-300 rounded-lg p-2">
                                                            <option>All</option>
                                                            <option>Sent</option>
                                                        </select>
                                                        <select className="border border-gray-300 rounded-lg p-2">
                                                            <option>Sent</option>
                                                        </select>
                                                        <button className="text-red-500">See all</button>
                                                    </div>
                                                </div>
                                                <div className="hidden md:grid grid-cols-6 gap-1  text-gray-500 mb-2">
                                                    <div className='col-span-1 md:col-span-2'>Recipient/Applicant</div>
                                                    <div >Type</div>
                                                    <div className=''>Ref Num.</div>
                                                    <div>Status</div>
                                                    <div>Amount</div>
                                                </div>
                                                <div className="space-y-4">
                                                    <div className="grid grid-cols-1 md:grid-cols-6 gap-1 items-center">
                                                        <div className="col-span-2 md:col-span-2 flex flex-col md:flex-row items-start md:items-center space-y-2 md:space-y-0 md:space-x-4">
                                                            <img src={recptImage} alt="Recipient profile picture" className="w-10 h-10 rounded-full" />
                                                            <div>
                                                                <p className="text-gray-500 md:hidden">Recipient/Applicant</p>
                                                                <p className="font-bold text-gray-700">Muhammad Abdelhamid</p>
                                                                <p className="text-gray-500">10/2/2024</p>
                                                            </div>
                                                        </div>
                                                        <div className="flex flex-col md:flex-row items-start md:items-center space-y-2 md:space-y-0 md:space-x-1 gap-1">
                                                            <p className="text-gray-500 md:hidden">Type</p>
                                                            <i className=""><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M0.941297 13.9319C0.900519 14.5047 1.29555 14.9995 1.82363 15.0371L10.4291 15.6498C10.9572 15.6874 11.4183 15.2535 11.4591 14.6807C11.4999 14.1079 11.1049 13.6131 10.5768 13.5755L2.92746 13.0309L3.51814 4.73379C3.55892 4.16099 3.16389 3.66617 2.63581 3.62857C2.10774 3.59098 1.64659 4.02485 1.60581 4.59765L0.941297 13.9319ZM14.5316 0.744688L1.27356 13.2185L2.52136 14.7815L15.7794 2.30769L14.5316 0.744688Z" fill="black" />
                                                            </svg>
                                                            </i>
                                                            <p className="text-gray-700">Received</p>
                                                        </div>
                                                        <div>
                                                            <p className="text-gray-500 md:hidden">Type</p>
                                                            <p className="text-gray-700">#12345</p>
                                                        </div>
                                                        <div>
                                                            <p className="text-gray-500 md:hidden">Status</p>
                                                            <button className='confirmedBtn' >Confirmed</button>
                                                        </div>
                                                        <div className="flex flex-col md:flex-row items-start md:items-center space-y-2 md:space-y-0 md:space-x-1 gap-1">
                                                            <p className="text-gray-500 md:hidden">Amount</p>
                                                            <p className="text-gray-700">-$3,000</p>
                                                            <button className="viewDetails text-red-500 border border-red-500 rounded-lg w-100 py-2 text-xs">View Details</button>
                                                        </div>
                                                    </div>

                                                    <div className="grid grid-cols-1 md:grid-cols-6 gap-1 items-center">
                                                        <div className="col-span-2 md:col-span-2 flex flex-col md:flex-row items-start md:items-center space-y-2 md:space-y-0 md:space-x-4">
                                                            <img src={recptImage} alt="Recipient profile picture" className="w-10 h-10 rounded-full" />
                                                            <div>
                                                                <p className="text-gray-500 md:hidden">Recipient/Applicant</p>
                                                                <p className="font-bold text-gray-700">Muhammad Abdelhamid</p>
                                                                <p className="text-gray-500">10/2/2024</p>
                                                            </div>
                                                        </div>
                                                        <div className="flex flex-col md:flex-row items-start md:items-center space-y-2 md:space-y-0 md:space-x-1 gap-1">
                                                            <p className="text-gray-500 md:hidden">Type</p>
                                                            <i className=""><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M0.941297 13.9319C0.900519 14.5047 1.29555 14.9995 1.82363 15.0371L10.4291 15.6498C10.9572 15.6874 11.4183 15.2535 11.4591 14.6807C11.4999 14.1079 11.1049 13.6131 10.5768 13.5755L2.92746 13.0309L3.51814 4.73379C3.55892 4.16099 3.16389 3.66617 2.63581 3.62857C2.10774 3.59098 1.64659 4.02485 1.60581 4.59765L0.941297 13.9319ZM14.5316 0.744688L1.27356 13.2185L2.52136 14.7815L15.7794 2.30769L14.5316 0.744688Z" fill="black" />
                                                            </svg>
                                                            </i>                                            <p className="text-gray-700">Received</p>
                                                        </div>
                                                        <div>
                                                            <p className="text-gray-500 md:hidden">Type</p>
                                                            <p className="text-gray-700">#12345</p>
                                                        </div>
                                                        <div>
                                                            <p className="text-gray-500 md:hidden">Status</p>
                                                            <button className='pendingdBtn'>Pending</button>                                        </div>
                                                        <div className="flex flex-col md:flex-row items-start md:items-center space-y-2 md:space-y-0 md:space-x-1 gap-1">
                                                            <p className="text-gray-500 md:hidden">Amount</p>
                                                            <p className="text-gray-700">-$3,000</p>
                                                            <button className="text-red-500 border border-red-500 rounded-lg w-100 py-2 text-xs">View Details</button>
                                                        </div>
                                                    </div>

                                                    <div className="grid grid-cols-1 md:grid-cols-6 gap-1 items-center">
                                                        <div className="col-span-2 md:col-span-2 flex flex-col md:flex-row items-start md:items-center space-y-2 md:space-y-0 md:space-x-4">
                                                            <img src={recptImage} alt="Recipient profile picture" className="w-10 h-10 rounded-full" />
                                                            <div>
                                                                <p className="text-gray-500 md:hidden">Recipient/Applicant</p>
                                                                <p className="font-bold text-gray-700">Muhammad Abdelhamid</p>
                                                                <p className="text-gray-500">10/2/2024</p>
                                                            </div>
                                                        </div>
                                                        <div className="flex flex-col md:flex-row items-start md:items-center space-y-2 md:space-y-0 md:space-x-1 gap-1">
                                                            <p className="text-gray-500 md:hidden">Type</p>
                                                            <i className=""><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M0.941297 13.9319C0.900519 14.5047 1.29555 14.9995 1.82363 15.0371L10.4291 15.6498C10.9572 15.6874 11.4183 15.2535 11.4591 14.6807C11.4999 14.1079 11.1049 13.6131 10.5768 13.5755L2.92746 13.0309L3.51814 4.73379C3.55892 4.16099 3.16389 3.66617 2.63581 3.62857C2.10774 3.59098 1.64659 4.02485 1.60581 4.59765L0.941297 13.9319ZM14.5316 0.744688L1.27356 13.2185L2.52136 14.7815L15.7794 2.30769L14.5316 0.744688Z" fill="black" />
                                                            </svg>
                                                            </i>                                            <p className="text-gray-700">Received</p>
                                                        </div>
                                                        <div>
                                                            <p className="text-gray-500 md:hidden">Type</p>
                                                            <p className="text-gray-700">#12345</p>
                                                        </div>
                                                        <div>
                                                            <p className="text-gray-500 md:hidden">Status</p>
                                                            <button className='cancelledBtn'>Cancelled</button>                                       </div>
                                                        <div className="flex flex-col md:flex-row items-start md:items-center space-y-2 md:space-y-0 md:space-x-1 gap-1">
                                                            <p className="text-gray-500 md:hidden">Amount</p>
                                                            <p className="text-gray-700">-$3,000</p>
                                                            <button className="text-red-500 border border-red-500 rounded-lg w-100 py-2 text-xs">View Details</button>
                                                        </div>
                                                    </div>

                                                    <div className="grid grid-cols-1 md:grid-cols-6 gap-1 items-center">
                                                        <div className="col-span-2 md:col-span-2 flex flex-col md:flex-row items-start md:items-center space-y-2 md:space-y-0 md:space-x-4">
                                                            <img src={recptImage} alt="Recipient profile picture" className="w-10 h-10 rounded-full" />
                                                            <div>
                                                                <p className="text-gray-500 md:hidden">Recipient/Applicant</p>
                                                                <p className="font-bold text-gray-700">Muhammad Abdelhamid</p>
                                                                <p className="text-gray-500">10/2/2024</p>
                                                            </div>
                                                        </div>
                                                        <div className="flex flex-col md:flex-row items-start md:items-center space-y-2 md:space-y-0 md:space-x-1 gap-1">
                                                            <p className="text-gray-500 md:hidden">Type</p>
                                                            <i className=""><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M0.941297 13.9319C0.900519 14.5047 1.29555 14.9995 1.82363 15.0371L10.4291 15.6498C10.9572 15.6874 11.4183 15.2535 11.4591 14.6807C11.4999 14.1079 11.1049 13.6131 10.5768 13.5755L2.92746 13.0309L3.51814 4.73379C3.55892 4.16099 3.16389 3.66617 2.63581 3.62857C2.10774 3.59098 1.64659 4.02485 1.60581 4.59765L0.941297 13.9319ZM14.5316 0.744688L1.27356 13.2185L2.52136 14.7815L15.7794 2.30769L14.5316 0.744688Z" fill="black" />
                                                            </svg>
                                                            </i>                                            <p className="text-gray-700">Received</p>
                                                        </div>
                                                        <div>
                                                            <p className="text-gray-500 md:hidden">Type</p>
                                                            <p className="text-gray-700">#12345</p>
                                                        </div>
                                                        <div>
                                                            <p className="text-gray-500 md:hidden">Status</p>
                                                            <button className='confirmedBtn' >Confirmed</button>
                                                        </div>
                                                        <div className="flex flex-col md:flex-row items-start md:items-center space-y-2 md:space-y-0 md:space-x-1 gap-1">
                                                            <p className="text-gray-500 md:hidden">Amount</p>
                                                            <p className="text-gray-700">-$3,000</p>
                                                            <button className="text-red-500 border border-red-500 rounded-lg w-100 py-2 text-xs">View Details</button>
                                                        </div>
                                                    </div>

                                                    <div className="grid grid-cols-1 md:grid-cols-6 gap-1 items-center">
                                                        <div className="col-span-2 md:col-span-2 flex flex-col md:flex-row items-start md:items-center space-y-2 md:space-y-0 md:space-x-4">
                                                            <img src={recptImage} alt="Recipient profile picture" className="w-10 h-10 rounded-full" />
                                                            <div>
                                                                <p className="text-gray-500 md:hidden">Recipient/Applicant</p>
                                                                <p className="font-bold text-gray-700">Muhammad Abdelhamid</p>
                                                                <p className="text-gray-500">10/2/2024</p>
                                                            </div>
                                                        </div>
                                                        <div className="flex flex-col md:flex-row items-start md:items-center space-y-2 md:space-y-0 md:space-x-1 gap-1">
                                                            <p className="text-gray-500 md:hidden">Type</p>
                                                            <i className=""><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M0.941297 13.9319C0.900519 14.5047 1.29555 14.9995 1.82363 15.0371L10.4291 15.6498C10.9572 15.6874 11.4183 15.2535 11.4591 14.6807C11.4999 14.1079 11.1049 13.6131 10.5768 13.5755L2.92746 13.0309L3.51814 4.73379C3.55892 4.16099 3.16389 3.66617 2.63581 3.62857C2.10774 3.59098 1.64659 4.02485 1.60581 4.59765L0.941297 13.9319ZM14.5316 0.744688L1.27356 13.2185L2.52136 14.7815L15.7794 2.30769L14.5316 0.744688Z" fill="black" />
                                                            </svg>
                                                            </i>                                            <p className="text-gray-700">Received</p>
                                                        </div>
                                                        <div>
                                                            <p className="text-gray-500 md:hidden">Type</p>
                                                            <p className="text-gray-700">#12345</p>
                                                        </div>
                                                        <div>
                                                            <p className="text-gray-500 md:hidden">Status</p>
                                                            <button className='confirmedBtn' >Confirmed</button>
                                                        </div>
                                                        <div className="flex flex-col md:flex-row items-start md:items-center space-y-2 md:space-y-0 md:space-x-1 gap-1">
                                                            <p className="text-gray-500 md:hidden">Amount</p>
                                                            <p className="text-gray-700">-$3,000</p>
                                                            <button className="text-red-500 border border-red-500 rounded-lg w-100 py-2 text-xs">View Details</button>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        )}
                                        {activeTab === 'received' && (
                                            <div>
                                                <div className="flex justify-between items-center mb-4">
                                                    <h2 className="text-xl font-bold">Recent transactions</h2>
                                                    <div className="flex space-x-4">
                                                        <select className="border border-gray-300 rounded-lg p-2">
                                                            <option>All</option>
                                                            <option>Sent</option>
                                                        </select>
                                                        <select className="border border-gray-300 rounded-lg p-2">
                                                            <option>Sent</option>
                                                        </select>
                                                        <button className="text-red-500">See all</button>
                                                    </div>
                                                </div>
                                                <div className="hidden md:grid grid-cols-6 gap-1  text-gray-500 mb-2">
                                                    <div className='col-span-1 md:col-span-2'>Recipient/Applicant</div>
                                                    <div >Type</div>
                                                    <div className=''>Ref Num.</div>
                                                    <div>Status</div>
                                                    <div>Amount</div>
                                                </div>
                                                <div className="space-y-4">
                                                    <div className="grid grid-cols-1 md:grid-cols-6 gap-1 items-center">
                                                        <div className="col-span-2 md:col-span-2 flex flex-col md:flex-row items-start md:items-center space-y-2 md:space-y-0 md:space-x-4">
                                                            <img src={recptImage} alt="Recipient profile picture" className="w-10 h-10 rounded-full" />
                                                            <div>
                                                                <p className="text-gray-500 md:hidden">Recipient/Applicant</p>
                                                                <p className="font-bold text-gray-700">Muhammad Abdelhamid</p>
                                                                <p className="text-gray-500">10/2/2024</p>
                                                            </div>
                                                        </div>
                                                        <div className="flex flex-col md:flex-row items-start md:items-center space-y-2 md:space-y-0 md:space-x-1 gap-1">
                                                            <p className="text-gray-500 md:hidden">Type</p>
                                                            <i className=""><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M0.941297 13.9319C0.900519 14.5047 1.29555 14.9995 1.82363 15.0371L10.4291 15.6498C10.9572 15.6874 11.4183 15.2535 11.4591 14.6807C11.4999 14.1079 11.1049 13.6131 10.5768 13.5755L2.92746 13.0309L3.51814 4.73379C3.55892 4.16099 3.16389 3.66617 2.63581 3.62857C2.10774 3.59098 1.64659 4.02485 1.60581 4.59765L0.941297 13.9319ZM14.5316 0.744688L1.27356 13.2185L2.52136 14.7815L15.7794 2.30769L14.5316 0.744688Z" fill="black" />
                                                            </svg>
                                                            </i>
                                                            <p className="text-gray-700">Received</p>
                                                        </div>
                                                        <div>
                                                            <p className="text-gray-500 md:hidden">Type</p>
                                                            <p className="text-gray-700">#12345</p>
                                                        </div>
                                                        <div>
                                                            <p className="text-gray-500 md:hidden">Status</p>
                                                            <button className='confirmedBtn' >Confirmed</button>
                                                        </div>
                                                        <div className="flex flex-col md:flex-row items-start md:items-center space-y-2 md:space-y-0 md:space-x-1 gap-1">
                                                            <p className="text-gray-500 md:hidden">Amount</p>
                                                            <p className="text-gray-700">-$3,000</p>
                                                            <button className="viewDetails text-red-500 border border-red-500 rounded-lg w-100 py-2 text-xs">View Details</button>
                                                        </div>
                                                    </div>





                                                    <div className="grid grid-cols-1 md:grid-cols-6 gap-1 items-center">
                                                        <div className="col-span-2 md:col-span-2 flex flex-col md:flex-row items-start md:items-center space-y-2 md:space-y-0 md:space-x-4">
                                                            <img src={recptImage} alt="Recipient profile picture" className="w-10 h-10 rounded-full" />
                                                            <div>
                                                                <p className="text-gray-500 md:hidden">Recipient/Applicant</p>
                                                                <p className="font-bold text-gray-700">Muhammad Abdelhamid</p>
                                                                <p className="text-gray-500">10/2/2024</p>
                                                            </div>
                                                        </div>
                                                        <div className="flex flex-col md:flex-row items-start md:items-center space-y-2 md:space-y-0 md:space-x-1 gap-1">
                                                            <p className="text-gray-500 md:hidden">Type</p>
                                                            <i className=""><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M0.941297 13.9319C0.900519 14.5047 1.29555 14.9995 1.82363 15.0371L10.4291 15.6498C10.9572 15.6874 11.4183 15.2535 11.4591 14.6807C11.4999 14.1079 11.1049 13.6131 10.5768 13.5755L2.92746 13.0309L3.51814 4.73379C3.55892 4.16099 3.16389 3.66617 2.63581 3.62857C2.10774 3.59098 1.64659 4.02485 1.60581 4.59765L0.941297 13.9319ZM14.5316 0.744688L1.27356 13.2185L2.52136 14.7815L15.7794 2.30769L14.5316 0.744688Z" fill="black" />
                                                            </svg>
                                                            </i>                                            <p className="text-gray-700">Received</p>
                                                        </div>
                                                        <div>
                                                            <p className="text-gray-500 md:hidden">Type</p>
                                                            <p className="text-gray-700">#12345</p>
                                                        </div>
                                                        <div>
                                                            <p className="text-gray-500 md:hidden">Status</p>
                                                            <button className='confirmedBtn' >Confirmed</button>
                                                        </div>
                                                        <div className="flex flex-col md:flex-row items-start md:items-center space-y-2 md:space-y-0 md:space-x-1 gap-1">
                                                            <p className="text-gray-500 md:hidden">Amount</p>
                                                            <p className="text-gray-700">-$3,000</p>
                                                            <button className="text-red-500 border border-red-500 rounded-lg w-100 py-2 text-xs">View Details</button>
                                                        </div>
                                                    </div>

                                                    <div className="grid grid-cols-1 md:grid-cols-6 gap-1 items-center">
                                                        <div className="col-span-2 md:col-span-2 flex flex-col md:flex-row items-start md:items-center space-y-2 md:space-y-0 md:space-x-4">
                                                            <img src={recptImage} alt="Recipient profile picture" className="w-10 h-10 rounded-full" />
                                                            <div>
                                                                <p className="text-gray-500 md:hidden">Recipient/Applicant</p>
                                                                <p className="font-bold text-gray-700">Muhammad Abdelhamid</p>
                                                                <p className="text-gray-500">10/2/2024</p>
                                                            </div>
                                                        </div>
                                                        <div className="flex flex-col md:flex-row items-start md:items-center space-y-2 md:space-y-0 md:space-x-1 gap-1">
                                                            <p className="text-gray-500 md:hidden">Type</p>
                                                            <i className=""><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M0.941297 13.9319C0.900519 14.5047 1.29555 14.9995 1.82363 15.0371L10.4291 15.6498C10.9572 15.6874 11.4183 15.2535 11.4591 14.6807C11.4999 14.1079 11.1049 13.6131 10.5768 13.5755L2.92746 13.0309L3.51814 4.73379C3.55892 4.16099 3.16389 3.66617 2.63581 3.62857C2.10774 3.59098 1.64659 4.02485 1.60581 4.59765L0.941297 13.9319ZM14.5316 0.744688L1.27356 13.2185L2.52136 14.7815L15.7794 2.30769L14.5316 0.744688Z" fill="black" />
                                                            </svg>
                                                            </i>                                            <p className="text-gray-700">Received</p>
                                                        </div>
                                                        <div>
                                                            <p className="text-gray-500 md:hidden">Type</p>
                                                            <p className="text-gray-700">#12345</p>
                                                        </div>
                                                        <div>
                                                            <p className="text-gray-500 md:hidden">Status</p>
                                                            <button className='confirmedBtn' >Confirmed</button>
                                                        </div>
                                                        <div className="flex flex-col md:flex-row items-start md:items-center space-y-2 md:space-y-0 md:space-x-1 gap-1">
                                                            <p className="text-gray-500 md:hidden">Amount</p>
                                                            <p className="text-gray-700">-$3,000</p>
                                                            <button className="text-red-500 border border-red-500 rounded-lg w-100 py-2 text-xs">View Details</button>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
















                            </div>
                        </div>


                    </div>
                </div>
            </div>

            {/* Modal */}


        </>
    );
}
