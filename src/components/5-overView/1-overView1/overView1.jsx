import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Aside from '../../aside/aside';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faPlus, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import "./overView1.css";

export default function OverView1() {
    const [selectedCoin, setSelectedCoin] = useState('Bitcoin');

    const coins = [
        { name: 'Bitcoin', icon: 'fab fa-bitcoin', value: '350.40' },
        { name: 'Ethereum', icon: 'fab fa-ethereum', value: '350.40' },
        { name: 'Tether', icon: 'fas fa-dollar-sign', value: '350.40' },
        { name: 'USD Coin', icon: 'fas fa-coins', value: '350.40' }
    ];

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="asideComponent col-lg-3 col-md-2" style={{ height: "100%" }}>
                        <Aside />
                    </div>

                    <div className="col-12 col-lg-9 col-md-10 mt-5" style={{ placeItems: "center" }}>

                        <div className="">
                            <div className="flex flex-col md:flex-row justify-between items-center mb-6">
                                <div className="relative w-full md:w-1/2 mb-4 md:mb-0">
                                    <input type="text" placeholder="Search anything here" className="w-full p-3 rounded-lg border border-gray-300" />
                                    <i className="fas fa-search absolute top-3 right-3 text-gray-400"></i>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <i className="fas fa-bell text-gray-400"></i>
                                    <div className="flex items-center space-x-2">
                                        <img src="https://placehold.co/40x40" alt="User profile picture" className="w-10 h-10 rounded-full" />
                                        <div className="flex flex-col items-start">
                                            <span className="text-gray-700">John Smith</span>
                                        </div>
                                        <i className="fas fa-caret-down text-gray-400"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="flex">

                                <h1 className="text-2xl font-bold mb-2">Welcome back, John</h1>
                                <button className="bg-red-500 text-white px-4 py-2 rounded-lg mt-1">send/receive</button>

                            </div>
                            <div className="text-gray-500 mb-6">
                                <span>Dashboard</span> <i className="fas fa-chevron-right mx-2"></i> <span className="font-bold text-gray-700">Overview</span>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                                {coins.map((coin) => (
                                    <div
                                        key={coin.name}
                                        className={`p-4 rounded-lg flex items-center justify-between cursor-pointer ${selectedCoin === coin.name ? 'bg-red-500 text-white' : 'bg-white border border-gray-200 text-gray-700'}`}
                                        onClick={() => setSelectedCoin(coin.name)}
                                    >
                                        <i className={`${coin.icon} text-2xl ${selectedCoin === coin.name ? 'text-white' : 'text-gray-500'}`}></i>
                                        <div className="text-right">
                                            <p className="text-xl font-bold">{coin.name}</p>
                                            <p className="text-2xl font-bold">{coin.value}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
                                <div className="bg-white p-6 rounded-lg border border-gray-200">
                                    <h2 className="text-xl font-bold mb-4">Analytics</h2>
                                    <div className="flex space-x-4 mb-4">
                                        <button className="text-gray-700 font-bold">Month</button>
                                        <button className="text-gray-500">Week</button>
                                        <button className="text-gray-500">Day</button>
                                    </div>
                                    <div className="flex justify-between items-end h-40">
                                        <div className="w-1/5 bg-red-500 h-24"></div>
                                        <div className="w-1/5 bg-red-500 h-32"></div>
                                        <div className="w-1/5 bg-red-500 h-40"></div>
                                        <div className="w-1/5 bg-red-500 h-28"></div>
                                        <div className="w-1/5 bg-red-500 h-36"></div>
                                    </div>
                                </div>
                                <div className="bg-white p-6 rounded-lg border border-gray-200">
                                    <h2 className="text-xl font-bold mb-4">Balance Overview</h2>
                                    <div className="flex space-x-4 mb-4">
                                        <button className="text-gray-700 font-bold">Month</button>
                                        <button className="text-gray-500">Week</button>
                                        <button className="text-gray-500">Day</button>
                                    </div>
                                    <div className="relative h-40">
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="w-full h-1/2 bg-red-500 rounded-full"></div>
                                        </div>
                                        <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-red-500 font-bold">1000 $</div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white p-6 rounded-lg border border-gray-200">
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
                                <div className="hidden md:grid grid-cols-5 gap-4 text-gray-500 mb-2">
                                    <div>Recipient/Applicant</div>
                                    <div>Type</div>
                                    <div>Type</div>
                                    <div>Invoices</div>
                                    <div>Amount</div>
                                </div>
                                <div className="space-y-4">
                                    <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
                                        <div className="flex flex-col md:flex-row items-start md:items-center space-y-2 md:space-y-0 md:space-x-4">
                                            <img src="https://placehold.co/40x40" alt="Recipient profile picture" className="w-10 h-10 rounded-full" />
                                            <div>
                                                <p className="text-gray-500 md:hidden">Recipient/Applicant</p>
                                                <p className="font-bold text-gray-700">Muhammad Abdelhamid</p>
                                                <p className="text-gray-500">Yesterday • 3:20 PM</p>
                                            </div>
                                        </div>
                                        <div className="flex flex-col md:flex-row items-start md:items-center space-y-2 md:space-y-0 md:space-x-2">
                                            <p className="text-gray-500 md:hidden">Type</p>
                                            <i className="fas fa-arrow-up text-gray-700"></i>
                                            <p className="text-gray-700">SEND</p>
                                        </div>
                                        <div>
                                            <p className="text-gray-500 md:hidden">Type</p>
                                            <p className="text-gray-700">Escrow</p>
                                        </div>
                                        <div>
                                            <p className="text-gray-500 md:hidden">Invoices</p>
                                            <p className="text-gray-700">-</p>
                                        </div>
                                        <div className="flex flex-col md:flex-row items-start md:items-center space-y-2 md:space-y-0 md:space-x-2">
                                            <p className="text-gray-500 md:hidden">Amount</p>
                                            <p className="text-gray-700">-$3,000</p>
                                            <button className="text-red-500 border border-red-500 rounded-lg px-4 py-2">View Details</button>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
                                        <div className="flex flex-col md:flex-row items-start md:items-center space-y-2 md:space-y-0 md:space-x-4">
                                            <img src="https://placehold.co/40x40" alt="Recipient profile picture" className="w-10 h-10 rounded-full" />
                                            <div>
                                                <p className="text-gray-500 md:hidden">Recipient/Applicant</p>
                                                <p className="font-bold text-gray-700">Muhammad Abdelhamid</p>
                                                <p className="text-gray-500">Yesterday • 3:20 PM</p>
                                            </div>
                                        </div>
                                        <div className="flex flex-col md:flex-row items-start md:items-center space-y-2 md:space-y-0 md:space-x-2">
                                            <p className="text-gray-500 md:hidden">Type</p>
                                            <i className="fas fa-arrow-up text-gray-700"></i>
                                            <p className="text-gray-700">SEND</p>
                                        </div>
                                        <div>
                                            <p className="text-gray-500 md:hidden">Type</p>
                                            <p className="text-gray-700">Transfer</p>
                                        </div>
                                        <div>
                                            <p className="text-gray-500 md:hidden">Invoices</p>
                                            <p className="text-gray-700">-</p>
                                        </div>
                                        <div className="flex flex-col md:flex-row items-start md:items-center space-y-2 md:space-y-0 md:space-x-2">
                                            <p className="text-gray-500 md:hidden">Amount</p>
                                            <p className="text-gray-700">-$3,000</p>
                                            <button className="text-red-500 border border-red-500 rounded-lg px-4 py-2">View Details</button>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
                                        <div className="flex flex-col md:flex-row items-start md:items-center space-y-2 md:space-y-0 md:space-x-4">
                                            <img src="https://placehold.co/40x40" alt="Recipient profile picture" className="w-10 h-10 rounded-full" />
                                            <div>
                                                <p className="text-gray-500 md:hidden">Recipient/Applicant</p>
                                                <p className="font-bold text-gray-700">Muhammad Abdelhamid</p>
                                                <p className="text-gray-500">10/2/2024</p>
                                            </div>
                                        </div>
                                        <div className="flex flex-col md:flex-row items-start md:items-center space-y-2 md:space-y-0 md:space-x-2">
                                            <p className="text-gray-500 md:hidden">Type</p>
                                            <i className="fas fa-arrow-up text-gray-700"></i>
                                            <p className="text-gray-700">SEND</p>
                                        </div>
                                        <div>
                                            <p className="text-gray-500 md:hidden">Type</p>
                                            <p className="text-gray-700">Transfer</p>
                                        </div>
                                        <div>
                                            <p className="text-gray-500 md:hidden">Invoices</p>
                                            <p className="text-gray-700">-</p>
                                        </div>
                                        <div className="flex flex-col md:flex-row items-start md:items-center space-y-2 md:space-y-0 md:space-x-2">
                                            <p className="text-gray-500 md:hidden">Amount</p>
                                            <p className="text-gray-700">-$3,000</p>
                                            <button className="text-red-500 border border-red-500 rounded-lg px-4 py-2">View Details</button>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
                                        <div className="flex flex-col md:flex-row items-start md:items-center space-y-2 md:space-y-0 md:space-x-4">
                                            <img src="https://placehold.co/40x40" alt="Recipient profile picture" className="w-10 h-10 rounded-full" />
                                            <div>
                                                <p className="text-gray-500 md:hidden">Recipient/Applicant</p>
                                                <p className="font-bold text-gray-700">Muhammad Abdelhamid</p>
                                                <p className="text-gray-500">10/2/2024</p>
                                            </div>
                                        </div>
                                        <div className="flex flex-col md:flex-row items-start md:items-center space-y-2 md:space-y-0 md:space-x-2">
                                            <p className="text-gray-500 md:hidden">Type</p>
                                            <i className="fas fa-arrow-up text-gray-700"></i>
                                            <p className="text-gray-700">SEND</p>
                                        </div>
                                        <div>
                                            <p className="text-gray-500 md:hidden">Type</p>
                                            <p className="text-gray-700">Letter of credit</p>
                                        </div>
                                        <div>
                                            <p className="text-gray-500 md:hidden">Invoices</p>
                                            <p className="text-gray-700">2</p>
                                        </div>
                                        <div className="flex flex-col md:flex-row items-start md:items-center space-y-2 md:space-y-0 md:space-x-2">
                                            <p className="text-gray-500 md:hidden">Amount</p>
                                            <p className="text-gray-700">-$3,000</p>
                                            <button className="text-red-500 border border-red-500 rounded-lg px-4 py-2">View Details</button>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
                                        <div className="flex flex-col md:flex-row items-start md:items-center space-y-2 md:space-y-0 md:space-x-4">
                                            <img src="https://placehold.co/40x40" alt="Recipient profile picture" className="w-10 h-10 rounded-full" />
                                            <div>
                                                <p className="text-gray-500 md:hidden">Recipient/Applicant</p>
                                                <p className="font-bold text-gray-700">Muhammad Abdelhamid</p>
                                                <p className="text-gray-500">10/2/2024</p>
                                            </div>
                                        </div>
                                        <div className="flex flex-col md:flex-row items-start md:items-center space-y-2 md:space-y-0 md:space-x-2">
                                            <p className="text-gray-500 md:hidden">Type</p>
                                            <i className="fas fa-arrow-up text-gray-700"></i>
                                            <p className="text-gray-700">SEND</p>
                                        </div>
                                        <div>
                                            <p className="text-gray-500 md:hidden">Type</p>
                                            <p className="text-gray-700">Transfer</p>
                                        </div>
                                        <div>
                                            <p className="text-gray-500 md:hidden">Invoices</p>
                                            <p className="text-gray-700">-</p>
                                        </div>
                                        <div className="flex flex-col md:flex-row items-start md:items-center space-y-2 md:space-y-0 md:space-x-2">
                                            <p className="text-gray-500 md:hidden">Amount</p>
                                            <p className="text-gray-700">-$3,000</p>
                                            <button className="text-red-500 border border-red-500 rounded-lg px-4 py-2">View Details</button>
                                        </div>
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
